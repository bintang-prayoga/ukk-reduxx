import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import prisma from "../prisma";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          throw new Error("User Not Found");
        } else {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("Password Or Email Is Incorrect");
          } else {
            return user;
          }
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
          role: true,
          createdComic: {
            select: {
              id: true,
              slug: true,
              title: true,
            },
          },
          bookmarks: {
            include: {
              genres: true,
            },
          },
          ratings: {
            select: {
              id: true,
              comicId: true,
              userId: true,
              score: true,
            },
          },
          recaps: {
            select: {
              userId: true,
            },
          },
        },
      });
      const allComic = await prisma.comic.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          genres: true,
          coverArt: true,
          status: true,
          publication: true,
          createdBy: true,
          synopsis: true,
          author: true,
          artist: true,
          featured: true,
          chapters: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      session.user = user;
      session.allComic = allComic;
      return session;
    },
  },
});

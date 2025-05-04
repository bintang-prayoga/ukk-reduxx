import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

async function main() {
  const BoedNoSuper = await prisma.user.create({
    data: {
      name: "BoedNoNiwa",
      email: "dukunas12@gmail.com",
      password: bcrypt.hashSync("123456", salt),
      image:
        "https://res.cloudinary.com/boednocomic/image/upload/v1675054177/profilePhoto/Cheat_Codes_md4j3r.png",
      role: "super",
    },
  });
  const BoedNoUser = await prisma.user.create({
    data: {
      name: "BoedNoUser",
      email: "dukunas56@gmail.com",
      password: bcrypt.hashSync("123456", salt),
      image:
        "https://res.cloudinary.com/boednocomic/image/upload/v1675054092/profilePhoto/By_The_Time_I_Get_To_Phoenix_gtoiz7.jpg",
      role: "user",
    },
  });

  const genreList = await prisma.genre.createMany({
    data: [
      {
        name: "Action",
      },
      {
        name: "Adventure",
      },
      {
        name: "Comedy",
      },
      {
        name: "Crime",
      },
      {
        name: "Drama",
      },
      {
        name: "Fantasy",
      },
      {
        name: "Historical",
      },
      {
        name: "Horror",
      },
      {
        name: "Isekai",
      },
      {
        name: "Mecha",
      },
      {
        name: "Medical",
      },
      {
        name: "Mystery",
      },
      {
        name: "Philosophical",
      },
      {
        name: "Psychological",
      },
      {
        name: "Romance",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Slice Of Life",
      },
      {
        name: "Sports",
      },
      {
        name: "Superhero",
      },
      {
        name: "Thriller",
      },
      {
        name: "Tragedy",
      },
      {
        name: "Wuxia",
      },
    ],
  });
}

const comicList = await prisma.comic.createMany({
  data: [
    {
      title: "Otonari Ni Ginga",
      type: "comic",
      exclusivity: "paid",
      slug: "otonari-ni-ginga",
      synopsis:
        "After the death of his father, Kuga Ichirou, a shoujo mangaka fresh out of high school, has to take care of his two little siblings, Machi and Fumio, all by himself. Struggling to meet a deadline after his previous assistants get their manga debuts, he hires a new assistant through his editor. However, his life takes an unexpected turn after this new assistant is revealed to be a beautiful and mysterious girl…",
      author: "Amagakure Gido",
      artist: "Amagakure Gido",
      status: "Ongoing",
      publication: "2019",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1745928028/coverArt/Otonari_Ni_Ginga_Vol.1_mhhb83.jpg",
    },
    {
      title: "Illustration No. 1",
      slug: "illustration-no-1",
      type: "illustration",
      exclusivity: "free",
      synopsis: "A story about someone who is a little different from the rest",
      author: null,
      artist: null,
      status: null,
      publication: null,
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1745858514/coverArt/vtjpvefwrq9fx5qekmqc.jpg",
    },
  ],
});

// const commentList = await prisma.comment.createMany({
//   data: [
//     {
//       content: "This is a comment",
//       userId: BoedNoSuper.id,
//       comicId: comicList[0].id,
//     },
//     {
//       content: "This is another comment",
//       userId: BoedNoUser.id,
//       comicId: comicList[1].id,
//     },
//   ],
// });

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

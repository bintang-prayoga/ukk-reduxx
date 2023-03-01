import prisma from "../prisma";
import moment from "moment";

export default async function getComic(req, res) {
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

  return JSON.parse(JSON.stringify(allComic));
}

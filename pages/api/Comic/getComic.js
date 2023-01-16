import prisma from "../prisma";

export default async function getComic(req, res) {
  const allComic = await prisma.comic.findMany({
    select: {
      id: true,
      title: true,
      genres: true,
      coverArt: true,
      synopsis: true,
      author: true,
      artist: true,
    },
  });

  return allComic;
}

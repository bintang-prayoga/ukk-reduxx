import prisma from "../prisma";

export default async function getFeatured(req, res) {
  const featuredComic = await prisma.comic.findMany({
    include: {
      genres: true,
    },
    where: {
      featured: true,
    },
  });

  return featuredComic;
}

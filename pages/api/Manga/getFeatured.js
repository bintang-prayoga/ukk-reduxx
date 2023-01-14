import prisma from "../prisma";

export default async function getFeatured(req, res) {
  const featuredManga = await prisma.manga.findMany({
    include: {
      genres: true,
    },
    where: {
      featured: true,
    },
  });

  return featuredManga;
}

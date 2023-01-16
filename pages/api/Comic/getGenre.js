import prisma from "../prisma";

export default async function getGenre(req, res) {
  const allGenre = await prisma.genre.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return allGenre;
}

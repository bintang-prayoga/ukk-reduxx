import prisma from "../prisma";

export default async function getGenre(req, res) {
  const allGenre = await prisma.genre.findMany({
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
      comic: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
    },
  });

  return JSON.parse(JSON.stringify(allGenre));
}

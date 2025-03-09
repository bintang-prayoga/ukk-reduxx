import prisma from "../prisma";

export default async function getHistory(req, res) {
  const findUser = await prisma.recap.findMany({
    where: {
      userId: req.query.id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      chapter: {
        select: {
          id: true,
          title: true,
          chapNum: true,
          comic: {
            select: {
              id: true,
              title: true,
              slug: true,
              coverArt: true,
            },
          },
        },
      },
    },
  });

  return JSON.parse(JSON.stringify(findUser));
}

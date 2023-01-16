import prisma from "../prisma";

const getLatest = async (req, res) => {
  const latest = await prisma.comic.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      cover: true,
    },
  });
};

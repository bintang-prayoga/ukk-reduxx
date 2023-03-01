import prisma from "../prisma";

export default async function getAllChaps(req, res) {
  const { id } = req.query;

  const chapters = await prisma.chapters.findMany({
    where: {
      comicId: id,
    },
    orderBy: {
      chapNum: "asc",
    },
    include: {
      images: {
        orderBy: {
          pageNum: "asc",
        },
      },
      comic: {
        select: {
          id: true,
          title: true,
          createdBy: true,
        },
      },
    },
  });

  return JSON.parse(JSON.stringify(chapters));
}

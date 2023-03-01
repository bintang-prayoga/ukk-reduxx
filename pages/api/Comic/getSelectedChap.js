import prisma from "../prisma";

export default async function getSelectedChap(req, res) {
  const { id, chapNum } = req.query;

  const chapters = await prisma.chapters.findMany({
    where: {
      comicId: id,
      chapNum: chapNum,
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
      comic: true,
    },
  });

  return JSON.parse(JSON.stringify(chapters));
}

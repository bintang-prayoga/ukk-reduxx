import prisma from "../prisma";

export default async function getSIngleChap(req, res) {
  const { id } = req.query;

  const initialChapter = await prisma.chapters.findUnique({
    where: {
      id: id,
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
          slug: true,
          title: true,
          chapters: true,
        },
      },
    },
  });

  const prevChapter = await prisma.chapters.findFirst({
    where: {
      comicId: initialChapter.comicId,
      chapNum: initialChapter.chapNum - 1,
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

  const nextChapter = await prisma.chapters.findFirst({
    where: {
      comicId: initialChapter.comicId,
      chapNum: initialChapter.chapNum + 1,
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

  initialChapter.comic.chapters = initialChapter.comic.chapters.length;

  console.log(initialChapter);

  return JSON.parse(
    JSON.stringify({ initialChapter, prevChapter, nextChapter })
  );
}

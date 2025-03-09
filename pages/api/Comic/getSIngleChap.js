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

  const allChapters = await prisma.chapters.findMany({
    where: {
      comicId: initialChapter.comicId,
    },
    select: {
      id: true,
      chapNum: true,
      title: true,
    },
  });

  initialChapter.comic.chapters = initialChapter.comic.chapters.length;

  return JSON.parse(
    JSON.stringify({ allChapters, initialChapter, prevChapter, nextChapter })
  );
}

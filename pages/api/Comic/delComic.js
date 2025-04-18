import prisma from "../prisma";

export default async function delComic(req, res) {
  const { id } = req.body;

  try {
    await prisma.recap.deleteMany({
      where: {
        comicId: id,
      },
    });

    // Hapus semua Rating terkait
    await prisma.rating.deleteMany({
      where: {
        comicId: id,
      },
    });

    const chapters = await prisma.chapters.findMany({
      where: {
        comicId: id,
      },
      select: {
        id: true,
      },
    });

    const chapterIds = chapters.map((chap) => chap.id);

    await prisma.images.deleteMany({
      where: {
        chapterId: {
          in: chapterIds,
        },
      },
    });

    await prisma.chapters.deleteMany({
      where: {
        comicId: id,
      },
    });

    await prisma.comic.update({
      where: { id },
      data: {
        genres: {
          set: [],
        },
      },
    });

    await prisma.comic.update({
      where: { id },
      data: {
        bookmarks: {
          set: [],
        },
        createdBy: {
          set: [],
        },
      },
    });

    await prisma.comic.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Comic deleted" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Failed to delete comic", error });
  }
}

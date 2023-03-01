import prisma from "../prisma";

export default async function delChapter(req, res) {
  const { id } = req.body;

  try {
    const deleteImages = await prisma.images.deleteMany({
      where: {
        chapterId: id,
      },
    });

    const deleteChapter = await prisma.chapters.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Chapter deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

import prisma from "../prisma";

export default async function delBookmark(req, res) {
  const { userId, comicId } = req.body;

  try {
    const bookmark = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        bookmarks: {
          disconnect: {
            id: comicId,
          },
        },
      },
      select: {
        bookmarks: {
          select: {
            id: true,
          },
        },
      },
    });

    return res.status(200).json({ message: "Bookmark deleted" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

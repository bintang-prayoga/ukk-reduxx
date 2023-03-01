import prisma from "../prisma";

export default async function postBookmark(req, res) {
  const { userId, comicId } = req.body;

  try {
    const bookmark = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        bookmarks: {
          connect: {
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

    return res.status(200).json({ message: "bookmark created" });
  } catch (error) {
    return res.status(400).json({ message: "bookmark already exists" });
  }
}

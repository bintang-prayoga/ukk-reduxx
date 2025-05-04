import prisma from "../prisma";

export default async function delComment(req, res) {
  const { commentId } = req.body;

  try {
    const deletedComment = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        isDeleted: true,
      },
    });

    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: error.message });
  }
}

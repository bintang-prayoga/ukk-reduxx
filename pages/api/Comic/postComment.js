import prisma from "../prisma";

export default async function postComment(req, res) {
  const { content, sessionId, comicId, parentId = null } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        content: content,
        user: {
          connect: { id: sessionId },
        },
        comic: {
          connect: { id: comicId },
        },
        parent: parentId
          ? {
              connect: { id: parentId },
            }
          : undefined,
      },
    });

    res.status(200).json({ message: "Comment created", comment: newComment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: error.message });
  }
}

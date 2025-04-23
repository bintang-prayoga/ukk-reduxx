import prisma from "../prisma";

export default async function getComment(req, res) {
  const { slug } = req.query;

  const allComments = await prisma.comment.findMany({
    where: {
      comic: {
        slug: slug,
      },
    },
    include: {
      user: true,
    },
  });

  const comments = allComments.map((comment) => {
    return {
      id: comment.id,
      content: comment.content,
      user: {
        id: comment.user.id,
        name: comment.user.name,
        image: comment.user.image,
      },
    };
  });

  return JSON.parse(JSON.stringify(comments));
}

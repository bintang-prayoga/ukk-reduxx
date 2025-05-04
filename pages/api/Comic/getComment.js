import prisma from "../prisma";

export default async function getComment(context, page = 1, limit = 5) {
  const slug = context.query.slug;

  try {
    const comic = await prisma.comic.findUnique({
      where: {
        slug: slug,
      },
      select: {
        title: true,
        id: true,
        slug: true,
      },
    });

    if (!comic) {
      throw new Error("Comic not found");
    }

    const totalComments = await prisma.comment.count({
      where: {
        comic: {
          slug: slug,
        },
        isDeleted: false,
      },
    });

    const allComments = await prisma.comment.findMany({
      where: {
        comic: {
          slug: slug,
        },
        isDeleted: false,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    const comments = allComments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      user: {
        id: comment.user.id,
        name: comment.user.name,
        image: comment.user.image,
        role: comment.user.role,
      },
    }));

    return JSON.parse(
      JSON.stringify({
        comments,
        comic,
        totalPages: Math.ceil(totalComments / limit),
      })
    );
  } catch (error) {
    console.error("Error fetching comments:", error);
    return {
      comments: [],
      comic: null,
      totalPages: 1,
    };
  }
}

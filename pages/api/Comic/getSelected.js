import prisma from "../prisma";

export default async function getSelected(req, res) {
  const { slug } = req.query;
  console.log(req.query);
  const selectedComic = await prisma.comic.findUnique({
    include: {
      genres: true,
      createdBy: true,
      chapters: {
        orderBy: {
          chapNum: "desc",
        },
        include: {
          images: {
            orderBy: {
              pageNum: "asc",
            },
          },
        },
      },
      bookmarks: true,
      ratings: {
        select: {
          id: true,
          comicId: true,
          userId: true,
          score: true,
        },
      },
    },
    where: {
      slug: slug,
    },
  });

  return JSON.parse(JSON.stringify(selectedComic));
}

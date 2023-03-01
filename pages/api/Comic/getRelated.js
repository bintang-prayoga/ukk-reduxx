import prisma from "../prisma";

export default async function getRelated(req, res) {
  const { slug } = req.query;
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
    },
    where: {
      slug: slug,
    },
  });

  const relatedComic = await prisma.comic.findMany({
    where: {
      genres: {
        some: {
          id: {
            in:
              selectedComic.genres.length > 3
                ? selectedComic.genres.slice(0, 3).map((genre) => genre.id)
                : selectedComic.genres.map((genre) => genre.id),
          },
        },
      },
      slug: {
        not: slug,
      },
    },
  });

  return JSON.parse(JSON.stringify(relatedComic));
}

import prisma from "../prisma";

export default async function getSelected(req, res) {
  const { id } = req.query;
  const selectedComic = await prisma.comic.findUnique({
    include: {
      genres: true,
    },
    where: {
      id: id,
    },
  });
  return selectedComic;
}

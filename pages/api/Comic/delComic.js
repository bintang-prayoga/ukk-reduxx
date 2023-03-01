import prisma from "../prisma";

export default async function delComic(req, res) {
  const { id } = req.body;

  try {
    const comic = await prisma.comic.delete({
      where: {
        id: id,
      },
    });

    return res.json(comic);
  } catch (error) {
    console.log(error);
  }
}

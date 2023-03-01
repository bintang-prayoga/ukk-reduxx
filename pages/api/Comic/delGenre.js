import prisma from "../prisma";

export default async function delGenre(req, res) {
  const { id } = req.body;
  try {
    const genre = await prisma.genre.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: "Genre deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Genre not found" });
  }
}

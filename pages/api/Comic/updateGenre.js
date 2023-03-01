import prisma from "../prisma";

export default async function updateGenre(req, res) {
  const { id, name } = req.body;

  try {
    const genre = await prisma.genre.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

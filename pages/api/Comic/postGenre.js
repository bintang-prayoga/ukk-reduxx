import prisma from "../prisma";

export default async function postGenre(req, res) {
  const { name } = req.body;

  const findExisting = await prisma.genre.findMany({
    where: {
      name: name,
    },
  });

  if (JSON.parse(JSON.stringify(findExisting)).length > 0) {
    return res.status(400).json({ message: "Genre already exists" });
  } else {
    const newGenre = await prisma.genre.create({
      data: {
        name: name,
      },
    });
    return res.status(200).json({ message: "Genre created" });
  }
}

import prisma from "../prisma";

export default async function handle(req, res) {
  const { id } = req.query;
  const genre = await prisma.genre.findUnique({
    where: {
      id: id,
    },
    include: {
      comic: true,
    },
  });

  return JSON.parse(JSON.stringify(genre));
}

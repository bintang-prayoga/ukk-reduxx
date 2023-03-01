import prisma from "../prisma";

export default async function getCreatedBy(req, res) {
  const { user } = req.query;

  const createdBy = await prisma.comic.findMany({
    where: {
      createdBy: {
        some: {
          id: {
            in: user,
          },
        },
      },
    },
    include: {
      genres: true,
    },
  });

  return JSON.parse(JSON.stringify(createdBy));
}

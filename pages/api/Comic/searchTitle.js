import prisma from "../prisma";

export default async function searchTitle(req, res) {
  const { title, genres } = req.body;

  try {
    const search = await prisma.comic.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
        genres: {
          some: {
            id: {
              in: genres,
            },
          },
        },
      },
      include: {
        genres: true,
      },
    });

    res.status(200).json(search);
    return JSON.parse(JSON.stringify(search));
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

import prisma from "../prisma";

export default async function searchTitle(req, res) {
  const { title, genres } = req.body;

  // if there is a title but no genre
  if (title && !genres) {
    const search = await prisma.comic.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
      include: {
        genres: true,
      },
    });

    try {
      res.status(200).json(search);
      return JSON.parse(JSON.stringify(search));
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }

  // if there is a genre but no title
  if (!title && genres) {
    const search = await prisma.comic.findMany({
      where: {
        genres: {
          hasSome: genres,
        },
      },
      include: {
        genres: true,
      },
    });

    try {
      res.status(200).json(search);
      return JSON.parse(JSON.stringify(search));
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }

  // if there is a title and genre
  const search = await prisma.comic.findMany({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
      genres: {
        hasSome: genres,
      },
    },
    include: {
      genres: true,
    },
  });

  // if there is no title and genre
  if (!search) {
    const search = await prisma.comic.findMany();
    try {
      res.status(200).json(search);
      return JSON.parse(JSON.stringify(search));
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

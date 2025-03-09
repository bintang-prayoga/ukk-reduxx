import prisma from "../prisma";

export default async function searchTitle(req, res) {
  const { title, genres } = req.body;

  try {
    let search;

    // Jika hanya ada judul
    if (title && !genres) {
      search = await prisma.comic.findMany({
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
    }
    // Jika hanya ada genre
    else if (!title && genres) {
      search = await prisma.comic.findMany({
        where: {
          genres: {
            some: {
              id: {
                in: genres, // Genres harus berupa array ID
              },
            },
          },
        },
        include: {
          genres: true,
        },
      });
    }
    // Jika ada judul dan genre
    else if (title && genres) {
      search = await prisma.comic.findMany({
        where: {
          title: {
            contains: title,
            mode: "insensitive",
          },
          genres: {
            some: {
              id: {
                in: genres, // Genres harus berupa array ID
              },
            },
          },
        },
        include: {
          genres: true,
        },
      });
    }
    // Jika tidak ada judul dan genre
    else {
      search = await prisma.comic.findMany({
        include: {
          genres: true,
        },
      });
    }

    if (search.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    res.status(200).json(search);
  } catch (error) {
    console.error("Error searching comics:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

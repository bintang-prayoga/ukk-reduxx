import prisma from "../prisma";
import slugify from "slugify";

export default async function updateComic(req, res) {
  const {
    id,
    title,
    type,
    synopsis,
    author,
    artist,
    status,
    publication,
    genres,
    coverArt,
    exclusivity,
  } = req.body;

  try {
    const existingComic = await prisma.comic.findUnique({
      where: {
        id: id,
      },
    });
    if (existingComic.title !== title) {
      const existingSlug = await prisma.comic.findUnique({
        where: {
          slug: slugify(title, { lower: true, replacement: "-" }),
        },
      });
      if (existingSlug) {
        return res.status(400).json({ message: "Title already exists" });
      }
    }

    const updatedComic = await prisma.comic.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        type: type,
        slug: slugify(title, { lower: true, replacement: "-" }),
        synopsis: synopsis,
        author: author,
        artist: artist,
        coverArt: coverArt,
        exclusivity: exclusivity,
        genres: {
          connect: genres.map((genre) => {
            return {
              id: genre,
            };
          }),
        },
        status: status,
        publication: publication,
      },
    });

    return res.status(200).json(updatedComic);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

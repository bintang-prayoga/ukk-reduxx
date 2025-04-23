import prisma from "../prisma";
import slugify from "slugify";

export default async function postComic(req, res) {
  const {
    title,
    synopsis,
    author,
    artist,
    status,
    publication,
    exclusivity,
    genres,
    coverArt,
    createdBy,
  } = req.body;

  try {
    const newComic = await prisma.comic.create({
      data: {
        title: title,
        type: "comic",
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
        createdAt: new Date(),
        createdBy: {
          connect: {
            id: createdBy,
          },
        },
      },
    });
    res.status(200).json({ message: "Comic created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

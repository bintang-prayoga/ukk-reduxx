import prisma from "../prisma";
import slugify from "slugify";

export default async function postIllust(req, res) {
  const { id, title, type, synopsis, coverArt, exclusivity } = req.body;

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

    const newIllust = await prisma.comic.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        type: type,
        slug: slugify(title, { lower: true, replacement: "-" }),
        synopsis: synopsis,
        author: null,
        artist: null,
        coverArt: coverArt,
        exclusivity: exclusivity,
        status: null,
        publication: null,
      },
    });

    res.status(200).json({ message: "Illustration created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

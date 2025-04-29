import prisma from "../prisma";
import slugify from "slugify";

export default async function postIllust(req, res) {
  const { title, type, synopsis, coverArt, exclusivity, createdBy } = req.body;

  try {
    const newIllust = await prisma.comic.create({
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
        createdAt: new Date(),
        createdBy: {
          connect: {
            id: createdBy,
          },
        },
      },
    });

    res.status(200).json({ message: "Illustration created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
}

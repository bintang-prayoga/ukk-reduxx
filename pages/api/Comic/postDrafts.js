import prisma from "../prisma";

export default async function postDrafts(req, res) {
  const {
    title,
    synopsis,
    author,
    artist,
    coverArt,
    status,
    release,
    featured,
    chapters,
  } = req.body;

  const draft = await prisma.comic.create({
    data: {
      title,
      synopsis,
      author,
      artist,
      coverArt,
      status,
      release,
      featured,
      genres: {
        connect: genres,
      },
      chapters: {
        create: chapters,
      },
    },
  });

  return res.json(draft);
}

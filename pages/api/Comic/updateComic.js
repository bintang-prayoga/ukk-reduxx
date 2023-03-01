import prisma from "../prisma";

export default async function updateComic(req, res) {
  const {
    id,
    title,
    synopsis,
    author,
    artist,
    status,
    publication,
    genres,
    coverArt,
  } = req.body;

  const updatedComic = await prisma.comic.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      synopsis: synopsis,
      author: author,
      artist: artist,
      coverArt: coverArt,
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

  console.log(JSON.parse(JSON.stringify(updatedComic)));

  return res.status(200).json(updatedComic);
}

import prisma from "../prisma";

export default async function postRating(req, res) {
  const { userId, comicId, score } = req.body;

  try {
    const newRating = await prisma.rating.create({
      data: {
        score: parseInt(score),
        comic: {
          connect: {
            id: comicId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    res.status(200).json({ message: "Rating created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
}

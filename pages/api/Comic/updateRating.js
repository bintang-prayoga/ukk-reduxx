import prisma from "../prisma";

export default async function updateRating(req, res) {
  const { ratingId, score } = req.body;

  try {
    if (score === "11") {
      await prisma.rating.delete({
        where: {
          id: ratingId,
        },
      });
    } else {
      await prisma.rating.update({
        where: {
          id: ratingId,
        },
        data: {
          score: parseInt(score),
        },
      });
    }

    res.status(200).json({ message: "Rating updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
}

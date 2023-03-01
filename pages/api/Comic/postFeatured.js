import prisma from "../prisma";

export default async function postFeatured(req, res) {
  const { id, featured } = req.body;
  const comic = await prisma.comic.update({
    where: { id },
    data: {
      featured: !featured,
    },
  });
  res.json(comic);
}

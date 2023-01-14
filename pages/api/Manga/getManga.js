import prisma from "../prisma";

export default async function getManga(req, res) {
  const allManga = await prisma.manga.findMany();

  return allManga;
}

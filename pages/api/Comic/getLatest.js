import prisma from "../prisma";

export default async function getLatest() {
  const latest = await prisma.comic.findMany({
    skip: 0,
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      genres: true,
    },
  });

  return JSON.parse(JSON.stringify(latest));
}

import prisma from "../prisma";

export default async function getAllUser(req, res) {
  const allUser = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return JSON.parse(JSON.stringify(allUser));
}

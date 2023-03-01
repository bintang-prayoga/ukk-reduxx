import prisma from "../prisma";
export default async function getSelectedUser(req, res) {
  const { id } = req.query;

  const selected = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      password: true,
      email: true,
      image: true,
      role: true,
    },
  });

  return JSON.parse(JSON.stringify(selected));
}

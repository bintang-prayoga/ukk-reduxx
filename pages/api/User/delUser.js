import prisma from "../prisma";

export default async function delUser(req, res) {
  const { id } = req.body;

  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
    include: {
      recaps: true,
      ratings: true,
    },
  });

  return res.json(deleteUser);
}

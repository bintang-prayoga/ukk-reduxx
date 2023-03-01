import prisma from "../prisma";

export default async function updateUser(req, res) {
  const { id, name, oldEmail, email, role } = req.body;

  const update = await prisma.user.update({
    where: {
      id: id,
      email: oldEmail,
    },
    data: {
      name: name,
      email: email,
      role: role,
    },
  });

  return res.json(update);
}

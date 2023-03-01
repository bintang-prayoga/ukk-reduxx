import prisma from "../prisma";

export default async function postProfile(req, res) {
  const { id, name, email, image } = req.body;

  const uploadProfile = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      image: image,
    },
  });

  return JSON.parse(JSON.stringify(uploadProfile));
}

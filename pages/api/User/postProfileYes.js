import prisma from "../prisma";
import bcrypt from "bcrypt";

export default async function postProfileYes(req, res) {
  const { id, name, email, password, newPassword, image } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  const isValid = await bcrypt.compare(password, user.password);

  if (isValid) {
    const uploadProfile = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        image: image,
        password: await bcrypt.hash(newPassword, 10),
      },
    });

    return JSON.parse(JSON.stringify(uploadProfile));
  } else {
    res.status(401).json({ message: "Password Or Email Is Incorrect" });
  }
}

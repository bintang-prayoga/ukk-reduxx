import prisma from "../prisma";
import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);

export default async function signup(req, res) {
  const { email, name, password } = req.body;

  const findExisting = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findExisting) {
    return res.status(400).json({ message: "Email already exists" });
  } else {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: bcrypt.hashSync(password, salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return res.json(newUser);
  }
}

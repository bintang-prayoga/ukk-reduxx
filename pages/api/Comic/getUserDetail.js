import prisma from "../prisma";

export default function handler(req, res) {
  const { email } = req.body;
  const user = prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return JSON.parse(JSON.stringify(user));
}

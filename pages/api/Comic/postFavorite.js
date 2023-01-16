import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function postFavorite(req, res) {
  const { id } = req.query;
  const { userId } = req.body;
  const addedComic = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      favorites: {
        connect: {
          id: id,
        },
      },
    },
  });
  return addedComic;
}

// api  function to remove a Comic from the user's favorites
//
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// export default async function deleteFavorite(req, res) {
//   const { id } = req.query;
//   const { userId } = req.body;
//   const removedComic = await prisma.user.update({
//     where: {
//       id: userId,
//     },
//     data: {
//       favorites: {
//         disconnect: {
//           id: id,
//         },
//       },
//     },
//   });
//   return removedComic;
// }
//
// api  function to get the user's favorites
//
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// export default async function getFavorites(req, res) {
//   const { id } = req.query;
//   const favorites = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//     include: {
//       favorites: true,
//     },
//   });
//   return favorites;
// }
//
// api  function to get all the users
//
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// export default async function getUsers(req, res) {
//   const users = await prisma.user.findMany();
//   return users;
// }
//
// api  function to get the user's profile
//
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new Prisma

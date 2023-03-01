import prisma from "../prisma";

export default async function postChapter(req, res) {
  const { chapTitle, chapNum, chapImg, comicId, pageNum } = req.body;

  try {
    const createChapter = await prisma.chapters.create({
      data: {
        title: chapTitle,
        chapNum: parseInt(chapNum),
        comic: {
          connect: {
            id: comicId,
          },
        },
        images: {
          create: chapImg.map((image, index) => {
            return {
              url: image,
              pageNum: index + 1,
            };
          }),
        },
      },
    });

    return res.status(200).json({ message: "Chapter created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

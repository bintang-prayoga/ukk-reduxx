import prisma from "../prisma";

export default async function postChapterRead(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, chapterId } = req.body;

  // Validasi input
  if (!userId || !chapterId) {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {
    // Cari komik terkait dengan chapterId
    const findComic = await prisma.chapters.findFirst({
      where: { id: chapterId },
      select: { comic: { select: { id: true } } },
    });

    if (!findComic) {
      return res.status(404).json({ message: "Chapter not found" });
    }

    // Cari semua recap terkait userId dan chapterId
    const existingRecaps = await prisma.recap.findMany({
      where: {
        userId,
        chapterId,
      },
    });

    // Jika ada lebih dari satu entri, hapus semua kecuali satu
    if (existingRecaps.length > 1) {
      const idsToDelete = existingRecaps.slice(1).map((recap) => recap.id); // Ambil ID entri duplikat
      await prisma.recap.deleteMany({
        where: {
          id: { in: idsToDelete },
        },
      });
    }

    // Periksa jika recap sudah ada
    const existingRecap = existingRecaps[0];

    if (existingRecap) {
      // Update `updatedAt` jika sudah ada
      await prisma.recap.update({
        where: { id: existingRecap.id },
        data: { updatedAt: new Date() },
      });
    } else {
      // Tambahkan recap baru jika tidak ada
      await prisma.recap.create({
        data: {
          user: { connect: { id: userId } },
          comic: { connect: { id: findComic.comic.id } },
          chapter: { connect: { id: chapterId } },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    }

    return res.status(200).json({ message: "Chapter read successfully" });
  } catch (error) {
    console.error("Error recording chapter read:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

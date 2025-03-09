import Image from "next/image";
import UserLayout from "../Layout/UserLayout";
import getSingleChap from "../api/Comic/getSingleChap";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const chapter = await getSingleChap(context);

  const allChapters = chapter.allChapters.sort((a, b) => a.chapNum - b.chapNum);
  const isGuest = !context.req.headers.cookie?.includes(
    "next-auth.session-token"
  );

  if (isGuest) {
    const allowedChapters = allChapters.slice(0, 3);
    if (
      !allowedChapters.some((chap) => chap.id === chapter.initialChapter.id)
    ) {
      return {
        redirect: {
          destination: `/titles/${chapter.initialChapter.comic.slug}`,
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      initialChapter: chapter.initialChapter,
      nextChapter: chapter.nextChapter,
      prevChapter: chapter.prevChapter,
      allChapters,
    },
  };
}

function ChapterReadPage({
  initialChapter,
  nextChapter,
  prevChapter,
  allChapters,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentChapterId, setCurrentChapterId] = useState(initialChapter.id);
  const { data: session } = useSession();
  const router = useRouter();

  const MAX_GUEST_CHAPTERS = 3;
  const isGuest = !session;

  useEffect(() => {
    const recordChapterRead = async () => {
      if (session && currentChapterId) {
        try {
          await fetch("/api/Comic/postChapterRead", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: session.user.id,
              chapterId: currentChapterId,
            }),
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    recordChapterRead();
  }, [session, currentChapterId]);

  useEffect(() => {
    const handleNavigation = (e) => {
      if (e.key === "ArrowRight") {
        if (currentImage < initialChapter.images.length - 1) {
          setCurrentImage(currentImage + 1);
        } else if (currentImage + 1 === initialChapter.images.length) {
          if (
            isGuest &&
            allChapters.indexOf(nextChapter) >= MAX_GUEST_CHAPTERS
          ) {
            alert("Sign up to access more chapters!");
            router.push(`/titles/${initialChapter.comic.slug}`);
          } else if (nextChapter) {
            setCurrentChapterId(nextChapter.id); // Update chapter ID
            router.push(`/chapters/${nextChapter.id}`);
            setCurrentImage(0);
          } else {
            router.push(`/titles/${initialChapter.comic.slug}`);
          }
        }
      } else if (e.key === "ArrowLeft") {
        if (currentImage > 0) {
          setCurrentImage(currentImage - 1);
        } else if (currentImage === 0) {
          if (prevChapter) {
            setCurrentChapterId(prevChapter.id); // Update chapter ID
            router.push(`/chapters/${prevChapter.id}`).then(() => {
              setCurrentImage(prevChapter.images.length - 1);
            });
          } else {
            router.push(`/titles/${initialChapter.comic.slug}`);
          }
        }
      }
    };

    document.addEventListener("keydown", handleNavigation);
    return () => {
      document.removeEventListener("keydown", handleNavigation);
    };
  }, [
    currentImage,
    initialChapter,
    nextChapter,
    prevChapter,
    isGuest,
    router,
    allChapters,
  ]);

  return (
    <div>
      <div className="text-center rounded-lg bg-zinc-900 mb-5">
        <h1 className="text-cyan-500 text-xl font-semibold">
          {initialChapter.comic.title}
        </h1>
        <h1 className="text-cyan-700 text-md font-semibold">
          {initialChapter.title}
        </h1>
        <div className="grid grid-cols-2 mx-5 gap-4">
          <p className="text-gray-300 bg-zinc-800 mb-5 rounded-lg">
            Ch. {initialChapter.chapNum}
          </p>
          <p className="text-gray-300 bg-zinc-800 mb-5 rounded-lg">
            {initialChapter.images[currentImage].pageNum} /{" "}
            {initialChapter.images.length}
          </p>
        </div>
      </div>
      <div className="text-center">
        <Image
          src={initialChapter.images[currentImage].url}
          width={500}
          height={650}
        />
      </div>
    </div>
  );
}

export default ChapterReadPage;

ChapterReadPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

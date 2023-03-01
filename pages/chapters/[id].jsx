import Image from "next/image";
import UserLayout from "../Layout/UserLayout";
import getSingleChap from "../api/Comic/getSingleChap";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const chapter = await getSingleChap(context);

  return {
    props: {
      initialChapter: chapter.initialChapter,
      nextChapter: chapter.nextChapter,
      prevChapter: chapter.prevChapter,
    },
  };
}

function ChapterReadPage({ initialChapter, nextChapter, prevChapter }) {
  const [currentImage, setCurrentImage] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleNextImage = (e) => {
      if (session) {
        if (e.key === "ArrowRight") {
          if (currentImage < initialChapter.images.length - 1) {
            setCurrentImage(currentImage + 1);
          } else if (currentImage + 1 === initialChapter.images.length) {
            if (nextChapter === null) {
              router.push(`/titles/${initialChapter.comic.slug}`);
            } else {
              router.push(`/chapters/${nextChapter.id}`);
              setCurrentImage(0);
            }
          } else {
            setCurrentImage(0);
          }
        } else if (e.key === "ArrowLeft") {
          if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
          } else if (currentImage + 1 === 1) {
            if (prevChapter === null)
              router.push(`/titles/${initialChapter.comic.slug}`);
            else {
              router.push(`/chapters/${prevChapter.id}`);
              setCurrentImage(initialChapter.images.length - 1);
            }
          } else {
            setCurrentImage(initialChapter.images.length - 1);
          }
        }
      } else {
        if (e.key === "ArrowRight") {
          if (currentImage < initialChapter.images.length - 1) {
            setCurrentImage(currentImage + 1);
          } else if (currentImage + 1 === initialChapter.images.length) {
            if (nextChapter === null) {
              router.push(`/titles/${initialChapter.comic.slug}`);
            } else {
              router.push(`/chapters/${nextChapter.id}`);
              setCurrentImage(0);
            }
          } else {
            setCurrentImage(0);
          }
        } else if (e.key === "ArrowLeft") {
          if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
          } else if (currentImage + 1 === 1) {
            if (prevChapter === null)
              router.push(`/titles/${initialChapter.comic.slug}`);
            else {
              if (
                initialChapter.comic.chapters.length - initialChapter.chapNum <
                2
              ) {
                router.push(`/chapters/${prevChapter.id}`);
                setCurrentImage(initialChapter.images.length - 1);
              }
            }
          } else if (currentImage) {
            setCurrentImage(initialChapter.images.length - 1);
          }
        }
      }
    };
    document.addEventListener("keydown", handleNextImage);
    return () => {
      document.removeEventListener("keydown", handleNextImage);
    };
  }, [currentImage, prevChapter, nextChapter, initialChapter]);

  if (session) {
    return (
      <>
        <div className="">
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
      </>
    );
  } else {
    return (
      <>
        <div className="">
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
      </>
    );
  }
}

export default ChapterReadPage;

ChapterReadPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

import { useEffect, useContext, useState } from "react";
import { MangaContext } from "../../Context/MangaContext";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import getSelected from "../api/Manga/getSelected";
import UserLayout from "../../Layout/UserLayout";
import Link from "next/link";

export async function getServerSideProps(context) {
  const manga = await getSelected(context);

  return {
    props: {
      manga: manga,
    },
  };
}

export function ReadMore({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);

  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  }

  return (
    <div className="text-lg ">
      <p className="">{isReadMore ? text.slice(0, 200) : text}</p>
      <div className=" border-t border-t-cyan-500 text-center">
        <button
          onClick={() => toggleReadMore()}
          className=" bg-cyan-500 px-2 rounded-b-lg"
        >
          {isReadMore ? "READ MORE" : "SHOW LESS"}
          {isReadMore ? (
            <FaChevronDown className="text-md mx-auto" />
          ) : (
            <FaChevronUp className="text-md mx-auto" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function SingleManga({ manga }) {
  const { breakpoint, setBreakpoint } = useContext(MangaContext);
  const [ascend, setAscend] = useState(() => true);
  const [related, setRelated] = useState(() => manga.genres);

  function limitRelated() {
    setRelated(related.slice(0, 5));
  }

  function getBreakpoint() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width < 640) {
      setBreakpoint(1);
    } else if (width < 768) {
      setBreakpoint(2);
    } else if (width < 1024) {
      setBreakpoint(3);
    } else {
      setBreakpoint(4);
    }
  }

  useEffect(() => {
    getBreakpoint();
    limitRelated();
    window.addEventListener("resize", getBreakpoint);
    return () => {
      window.removeEventListener("resize", getBreakpoint);
    };
  }, []);

  return (
    <>
      <div className="">
        <div
          className="bg-top bg-cover"
          style={{ backgroundImage: `url(${manga.coverArt})` }}
        ></div>
        <div
          className={`grid ${
            breakpoint <= 3 ? "grid-cols-1" : "grid-cols-3"
          } grid-flow-row-dense`}
        >
          <div className="mx-auto">
            <img
              src={manga.coverArt}
              className="rounded shadow-md max-w-[21rem] max-h-[31rem]"
            />
          </div>
          <div className="flex flex-col gap-4 px-5 col-span-2">
            <div className="mt-2">
              <h1 className="text-5xl font-bold">{manga.title}</h1>
              <p className="text-lg font-medium my-4">{manga.author}</p>
            </div>
            <div className="flex">
              {manga.genres.map((genre, index) => (
                <p
                  className="bg-zinc-900 rounded-md text-center font-semibold text-xs md:text-md px-2 py-1 uppercase mx-1"
                  key={index}
                >
                  {genre.name}
                </p>
              ))}
            </div>
            {breakpoint <= 2 ? (
              <ReadMore text={manga.synopsis} />
            ) : (
              <p className="text-lg">{manga.synopsis}</p>
            )}
            <div>
              <button className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row">
                <AiOutlineStar className="my-auto" />
                <p className="mx-2">Add To Favorite</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid ${
          breakpoint <= 3 ? "grid-cols-1" : "grid-cols-3"
        } grid-flow-row-dense mt-10`}
      >
        <div className="flex flex-col gap-4 px-5 col-span-2">
          <div className="flex flex-row justify-between">
            <h1 className="tracking-widest font-semibold text-xl mx-0 lg:mx-5">
              CHAPTER LIST
            </h1>
            <button
              className="flex flex-row bg-zinc-900 px-2 py-1 rounded-md"
              onClick={() => setAscend(!ascend)}
            >
              {ascend ? (
                <>
                  <p>ASCENDING</p>
                  <FaChevronUp className="text-md mx-2 my-auto" />
                </>
              ) : (
                <>
                  <p>DESCENDING</p>
                  <FaChevronDown className="text-md mx-2 my-auto" />
                </>
              )}
            </button>
          </div>
          {manga.genres.map((genre, index) => (
            <Link href={``} key={index}>
              <div className="border-l-2 border-l-cyan-500 bg-zinc-900 rounded-tr-md rounded-br-md cursor-pointer">
                <div className="mx-2 my-2">
                  <h3 className="font-bold">Chapter Number, Chapter Title</h3>
                  <p className="flex align-middle">
                    <FiUser className="my-auto" />{" "}
                    <span className="mx-2">BoedNoNiwa</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 mx-5">
          <div className="max-w-sm p-6 bg-slate-600 border border-cyan-500 rounded-lg shadow-md ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
              Related Manga
            </h5>
            <div className="mb-3">
              {related.map((genre, index) => (
                <Link href={`/titles/`} key={index}>
                  <div className="flex gap-2 my-2 cursor-pointer">
                    <img
                      src={manga.coverArt}
                      className="rounded shadow-md max-w-[4rem] max-h-[5rem]"
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">{manga.title}</h1>
                      <p className="tracking-tight text-xs">
                        Ch. 10 - Childhood Friends, And...?
                      </p>
                      <div className=" mt-4 flex">
                        <FiUser className="my-auto" />
                        <p className="mx-2">{`ww`}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SingleManga.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

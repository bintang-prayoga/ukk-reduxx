import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaBookmark,
  FaRegBookmark,
  FaRegStar,
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { ModalComp } from "../../Components";
import moment from "moment-timezone";
import parse from "html-react-parser";
import UserLayout from "../Layout/UserLayout";
import Link from "next/link";
import Image from "next/image";
import getSelected from "../api/Comic/getSelected";
import getRelated from "../api/Comic/getRelated";

export async function getServerSideProps(context) {
  const comic = await getSelected(context);
  const relatedComic = await getRelated(context);

  const length = comic.ratings.length;
  const totalRating = comic.ratings.reduce((acc, item) => acc + item.score, 0);
  const comicRating = length > 0 ? totalRating / length : 0;

  return {
    props: {
      comic: comic,
      relatedComic: relatedComic,
      comicRating: comicRating,
    },
  };
}

export function ReadMore({ text, sliced }) {
  const [isReadMore, setIsReadMore] = useState(true);

  function toggleReadMore() {
    setIsReadMore(!isReadMore);
  }

  return (
    <div className="">
      {isReadMore ? parse(text.slice(0, sliced)) : parse(text)}
      <div className=" border-t border-t-cyan-500 text-center">
        <button
          onClick={() => toggleReadMore()}
          className="bg-cyan-500 px-2 pt-2 pb-0.5 rounded-b-lg text-xs lg:text-md text-black"
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

export function ShowChapter({ session, comic }) {
  if (session) {
    if (comic.chapters.length === 0) {
      return (
        <div className="text-center mx-auto my-2 bg-zinc-900 p-4 rounded-lg">
          <h1 className="text-2xl font-semibold">
            There are no chapter for this comic
          </h1>
        </div>
      );
    } else {
      return comic.chapters.map((chapter, index) => (
        <Link href={`/chapters/${chapter.id}`} key={index}>
          <div className="border-l-2 border-l-cyan-500 bg-zinc-900 rounded-tr-md rounded-br-md cursor-pointer py-1">
            <div className="mx-2 flex justify-between">
              <h3 className="font-bold">
                Ch. {chapter.chapNum} - {chapter.title}
              </h3>
              <p className="flex align-middle">
                <BsClockHistory className="my-auto" />{" "}
                <span className="mx-2">
                  {moment(chapter.createdAt, "YYYYMMDD")
                    .tz("Asia/Jakarta")
                    .fromNow()}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ));
    }
  } else {
    if (comic.chapters.length === 0) {
      return (
        <div className="text-center mx-auto my-2 bg-zinc-900 p-4 rounded-lg">
          <h1 className="text-2xl font-semibold">
            There are no chapter for this comic
          </h1>
        </div>
      );
    } else {
      const earliestChapters = [...comic.chapters]
        .sort((a, b) => a.chapNum - b.chapNum)
        .slice(0, 3);
      earliestChapters.reverse();
      return (
        <>
          {earliestChapters.map((chapter, index) => (
            <Link href={`/chapters/${chapter.id}`} key={index}>
              <div className="border-l-2 border-l-cyan-500 bg-zinc-900 rounded-tr-md rounded-br-md cursor-pointer">
                <div className="mx-2 my-2 flex justify-between">
                  <h3 className="font-bold">
                    Ch. {chapter.chapNum} - {chapter.title}
                  </h3>
                  <p className="flex align-middle">
                    <BsClockHistory className="my-auto" />{" "}
                    <span className="mx-2">
                      {moment(chapter.createdAt, "YYYYMMDD")
                        .tz("Asia/Jakarta")
                        .fromNow()}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="text-center mx-auto my-2">
            <h1 className="">
              Interested in this comic? Sign up to read the rest
            </h1>
            <Link href="/signup">
              <button className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row text-black mx-auto font-semibold mt-2">
                Sign Up
              </button>
            </Link>
          </div>
        </>
      );
    }
  }
}

export function BookmarkBtn({ session, comic, addBookmark, removeBookmark }) {
  if (session) {
    if (session.user.bookmarks.some((fav) => fav.id === comic.id)) {
      return (
        <button
          className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row text-black"
          onClick={() => removeBookmark()}
        >
          <FaBookmark className="my-auto" />
          <p className="mx-2">Remove Bookmark</p>
        </button>
      );
    } else {
      return (
        <button
          className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row text-black"
          onClick={() => addBookmark()}
        >
          <FaRegBookmark className="my-auto" />
          <p className="mx-2">Bookmark</p>
        </button>
      );
    }
  } else {
    return (
      <Link href="/login">
        <button className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row text-black">
          <FaRegBookmark className="my-auto" />
          <p className="mx-2">Bookmark</p>
        </button>
      </Link>
    );
  }
}

export function RatingBtn({
  session,
  comic,
  register,
  addRating,
  updateRating,
}) {
  const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //check if user has rated the comic
  if (session) {
    const rate = session.user.ratings.find((rate) => rate.comicId === comic.id);
    if (session.user.ratings.some((rate) => rate.comicId === comic.id)) {
      return (
        <form className="max-w-sm">
          <select
            id="countries"
            className="bg-cyan-500 text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full p-2.5 text-black"
            value={rate.score}
            {...register("rating", {
              onChange: (e) =>
                updateRating({ score: e.target.value, ratingId: rate.id }),
            })}
          >
            {ratingOptions.map((rating, index) => (
              <option
                key={index}
                value={rating}
                className="bg-zinc-700 text-white"
              >
                {rating}{" "}
              </option>
            ))}
            <option value={11} className="bg-zinc-700 text-white">
              Remove Rating
            </option>
          </select>
        </form>
      );
    } else {
      return (
        <form className="max-w-sm">
          <select
            id="rating"
            className="bg-zinc-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
            name="rating"
            defaultValue={rate?.score || 0}
            {...register("rating", {
              onChange: (e) => addRating(e.target.value),
            })}
          >
            <option>Rate</option>
            {ratingOptions.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}{" "}
              </option>
            ))}
          </select>
        </form>
      );
    }
  } else {
    return (
      <Link href="/login">
        <button className="bg-cyan-500 px-5 py-2 rounded-md flex flex-row text-black">
          <FaRegStar className="my-auto" />
          <p className="mx-2">Rate</p>
        </button>
      </Link>
    );
  }
}

export default function SingleComic({ comic, relatedComic, comicRating }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: session } = useSession();
  const [related, setRelated] = useState(relatedComic);
  const [statusStyle, setStatusStyle] = useState(() => "");
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  function limitRelated() {
    setRelated(related.slice(0, 3));
  }

  function statusSetting() {
    if (comic.status === "Ongoing") {
      setStatusStyle("bg-cyan-500");
    } else if (comic.status === "Completed") {
      setStatusStyle("bg-green-500");
    } else if (comic.status === "Hiatus") {
      setStatusStyle("bg-orange-500");
    } else {
      setStatusStyle("bg-red-500");
    }
  }

  async function addRating(data) {
    await fetch("/api/Comic/postRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comicId: comic.id,
        userId: session.user.id,
        score: data,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: `Successfully rated ${comic.title}`,
        });
        window.location.reload();
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: `Failed to rate ${comic.title}`,
        });
      }
    });
  }

  async function updateRating(data) {
    await fetch("/api/Comic/updateRating", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ratingId: data.ratingId,
        score: data.score,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: `Successfully updated rating`,
        });
        window.location.reload();
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: `Failed to update rating`,
        });
      }
    });
  }

  async function addBookmark() {
    await fetch("/api/Comic/postBookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comicId: comic.id,
        userId: session.user.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: `Successfully added ${comic.title} to your bookmark`,
        });
        window.location.reload();
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: `Failed to add ${comic.title} to your bookmark`,
        });
      }
    });
  }

  async function removeBookmark() {
    await fetch("/api/Comic/delBookmark", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comicId: comic.id,
        userId: session.user.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: `Successfully removed ${comic.title} from your bookmark`,
        });
        window.location.reload();
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: `Failed to remove ${comic.title} from your bookmark`,
        });
      }
    });
  }

  useEffect(() => {
    statusSetting();
    limitRelated();
  }, []);

  return (
    <>
      <ModalComp modalData={modalData} setModalData={setModalData} />
      <div className="">
        <div className={`grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense`}>
          <div className="mx-auto">
            <Image
              width={336}
              height={496}
              src={comic.coverArt}
              className="rounded shadow-md max-w-[21rem] max-h-[31rem]"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-4 px-5 col-span-2">
            <div className="mt-2">
              <h1 className="text-5xl font-bold">{comic.title}</h1>
              <p className="text-lg font-medium my-4">
                {comic.author === comic.artist
                  ? comic.author
                  : `${comic.author}, ${comic.artist}`}
              </p>
              <div className="flex">
                <p className="flex bg-zinc-900 rounded-md text-center font-semibold text-xs md:text-md px-2 py-1 uppercase mx-1">
                  <span
                    className={`animate-ping absolute inline-flex h-3 w-3 mr-2 my-0.5 rounded-full ${statusStyle} opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 my-auto mr-2 ${statusStyle}`}
                  ></span>
                  {comic.status}
                </p>
                <div className="flex">
                  <FaRegBookmark className="my-auto" />
                  <p>{comic.bookmarks.length}</p>
                  <div className="mx-1"></div>
                  <FaRegStar className="my-auto" />
                  <p className="mx-1">
                    {comicRating.toString().substring(0, 3)}
                    <span className="mx-1 text-gray-400 text-xs">
                      ({comic.ratings.length})
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {comic.genres.map((genre, index) => (
                <p
                  className="bg-zinc-900 rounded-md text-center font-semibold text-xs md:text-md px-2 py-1 uppercase mx-1"
                  key={index}
                >
                  {genre.name}
                </p>
              ))}
            </div>

            <ReadMore text={comic.synopsis} sliced="200" />

            <div className="mt-5 flex gap-2">
              <BookmarkBtn
                session={session}
                comic={comic}
                addBookmark={addBookmark}
                removeBookmark={removeBookmark}
              />
              <RatingBtn
                session={session}
                comic={comic}
                addRating={addRating}
                updateRating={updateRating}
                register={register}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense mt-10`}
      >
        <div className="flex flex-col gap-4 px-5 col-span-2">
          <div className="flex flex-row justify-between">
            <h1 className="tracking-widest font-semibold text-xl mx-0 lg:mx-5">
              CHAPTER LIST
            </h1>
          </div>
          <ShowChapter session={session} comic={comic} />
        </div>
        <div className="flex flex-col gap-4 mx-5">
          <div className="max-w-sm p-6 bg-slate-600 border border-cyan-500 rounded-lg shadow-md my-3 mx-auto lg:my-0">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
              Similar comic
            </h5>
            <div className="mb-3">
              {related.map((comic, index) => (
                <Link href={`/titles/${comic.slug}`} key={index}>
                  <div className="flex gap-2 my-2 cursor-pointer">
                    <img
                      src={comic.coverArt}
                      className="rounded shadow-md max-w-[4rem] max-h-[5rem]"
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">{comic.title}</h1>
                      <div className=" mt-4 flex">
                        <FiUser className="my-auto" />
                        {comic.author === comic.artist ? (
                          <p className="mx-2">{comic.author}</p>
                        ) : (
                          `${comic.author}, ${comic.artist}`
                        )}
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

SingleComic.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

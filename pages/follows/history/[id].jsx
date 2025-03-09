import { useState } from "react";
import { useSession } from "next-auth/react";
import { UnauthorizedPage } from "../../../Components";
import UserLayout from "../../Layout/UserLayout";
import { useRouter } from "next/router";
import getHistory from "../../api/Comic/getHistory";
import Link from "next/link";
import Image from "next/image";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment-timezone";

export async function getServerSideProps(context) {
  const history = await getHistory(context);

  // Group history by comic ID
  const groupedHistory = Object.values(
    history.reduce((acc, item) => {
      const comicId = item.chapter.comic.id;
      if (!acc[comicId]) {
        acc[comicId] = {
          comic: item.chapter.comic,
          chapters: [],
        };
      }
      acc[comicId].chapters.push(item.chapter);
      return acc;
    }, {})
  );

  return {
    props: {
      history: groupedHistory,
    },
  };
}

function HistoryPage({ history }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [showAll, setShowAll] = useState({}); // Status untuk setiap elemen

  if (session) {
    if (session.user.id === router.query.id) {
      if (history.length === 0) {
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold">No History</h1>
            <p className="text-lg">Start reading!</p>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col items-start justify-center h-full">
            <div className="flex flex-col items-start justify-center w-full my-2">
              <h1 className="text-2xl font-bold">History</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              {history.map((item, index) => {
                const isExpanded = showAll[index] || false; // Periksa apakah elemen ini dalam status "expanded"
                const sortedChapters = [...item.chapters].reverse(); // Balikkan urutan chapter
                // const timestamp = moment.tz(
                //   item.chapters[index].updatedAt,
                //   "Asia/Jakarta"
                // );
                const visibleChapters = isExpanded
                  ? sortedChapters
                  : sortedChapters.slice(0, 3);

                return (
                  <div
                    className="bg-zinc-900 my-2 rounded-md cursor-pointer lg:flex w-full "
                    key={index}
                  >
                    <div className="flex h-full items-start justify-start py-2">
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense`}
                      >
                        <div className="mx-auto col-span-1">
                          <Image
                            src={item.comic.coverArt}
                            width={300}
                            height={200}
                            className="max-h-[10rem]
                sm:max-h-[calc(300px-4rem)]
                max-w-[10rem]
                object-contain 
                rounded-md
                sm:shadow-lg
                bg-none"
                          />
                        </div>
                        <div className="col-span-2 flex-col">
                          <Link href={`/titles/${item.comic.slug}`}>
                            <h1
                              className={`text-white font-semibold text-2xl text-center md:text-center lg:text-left md:text-3xl mb-5 cursor-pointer`}
                            >
                              {item.comic.title}
                            </h1>
                          </Link>
                          <div className="space-y-2">
                            {visibleChapters.map((chapter, idx) => (
                              <Link
                                href={`/chapters/${chapter.id}`}
                                key={idx}
                                type="submit"
                              >
                                <div className="border-l-2 border-l-cyan-500 bg-zinc-900 hover:bg-slate-800 rounded-tr-md rounded-br-md cursor-pointer py-1">
                                  <div className="mx-2 my-2 flex justify-between">
                                    <h3 className="font-bold">
                                      Ch. {chapter.chapNum}
                                      {"  "}
                                      <span className=" mx-2 text-sm">
                                        {chapter.title.length > 40
                                          ? chapter.title.substring(0, 40) +
                                            "..."
                                          : chapter.title}
                                      </span>
                                    </h3>
                                    <p className="flex align-middle mx-5">
                                      <BsClockHistory className="my-auto" />{" "}
                                      <span className="mx-2">
                                        {/* {timestamp.fromNow()} */}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            {item.chapters.length > 3 && (
                              <button
                                onClick={() =>
                                  setShowAll((prev) => ({
                                    ...prev,
                                    [index]: !isExpanded,
                                  }))
                                }
                                className="text-cyan-500 hover:underline mt-2"
                              >
                                {isExpanded ? "Show Less" : "Read More"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default HistoryPage;

HistoryPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

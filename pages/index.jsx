import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import UserLayout from "./Layout/UserLayout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import getLatest from "./api/Comic/getLatest";
import getFeatured from "./api/Comic/getFeatured";
import { Card } from "../Components";

export async function getServerSideProps() {
  const latestComic = await getLatest();
  const featured = await getFeatured();
  return {
    props: {
      latestComic: latestComic,
      featured: featured,
    },
  };
}

export default function Home({ latestComic, featured }) {
  return (
    <>
      <div className="my-3">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">
          Featured Title
        </h1>
        <div className="bg-zinc-700 rounded-md">
          <Carousel
            indicators={false}
            rightControl={<FaChevronRight className="text-white text-2xl" />}
            leftControl={<FaChevronLeft className="text-white text-2xl" />}
          >
            {featured.map((comic, index) => (
              <Card key={index} comic={comic} index={index} bg="bg-zinc-900" />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="my-3">
        <div className="flex justify-between my-2">
          <h1 className="text-xl md:text-2xl mb-2 font-semibold">Newcomer</h1>
          <Link href={`/titles`}>
            <AiOutlineArrowRight className="my-auto text-3xl font-bold mx-3 cursor-pointer" />
          </Link>
        </div>

        <div className="bg-zinc-700 rounded-md grid grid-rows-5 md:grid-rows-2 md:grid-cols-5 lg:grid-cols-10 lg:grid-rows-1 grid-flow-col overflow-hidden gap-1">
          {latestComic.map((comic, index) => (
            <Link href={`/titles/${comic.slug}`} key={index}>
              <div className=" my-2 mx-auto bg-gradient-to-t from-zinc-700 to-transparent cursor-pointer">
                <Image
                  src={comic.coverArt}
                  width={150}
                  height={200}
                  className="w-full h-full object-contain rounded-md"
                />

                <div className="bg-gradient-to-t from-zinc-700 to-transparent ">
                  {comic.title.length > 20 ? (
                    <h1 className="text-white font-semibold text-center">
                      {comic.title.substring(0, 18)}...
                    </h1>
                  ) : (
                    <h1 className="text-white font-semibold text-center">
                      {comic.title}
                    </h1>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

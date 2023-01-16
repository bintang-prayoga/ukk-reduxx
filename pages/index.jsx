import Link from "next/link";
import Hero from "../Components/Hero";
import UserLayout from "../Layout/UserLayout";
import { FiUser } from "react-icons/fi";
import { ComicContext, ComicProvider } from "../Context/ComicContext";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import getComic from "./api/Comic/getComic";
import getFeatured from "./api/Comic/getFeatured";

export async function getServerSideProps() {
  const comic = await getComic();
  const featured = await getFeatured();
  return {
    props: {
      comic: comic,
      featured: featured,
    },
  };
}

export default function Home({ comic, featured }) {
  useEffect(() => {
    console.log(comic);
  }, []);

  return (
    <>
      <div className="my-3">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">
          Featured Title
        </h1>
        <Hero featured={featured} />
      </div>
      <div className="my-3">
        <h1 className="text-xl md:text-2xl mb-2 font-semibold">
          Latest Update
        </h1>
        <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-2 bg-zinc-700 rounded-md">
          {comic.map((item, index) => (
            <div className="grid gap-4 p-4" key={index}>
              <Link href={`/titles/${item.id}`} key={index}>
                <div className="flex gap-2 cursor-pointer">
                  <img
                    src={item.coverArt}
                    className="rounded shadow-md max-w-[5rem] max-h-[6rem]"
                  />
                  <div className="">
                    <h1 className=" font-semibold">{item.title}</h1>
                    <p className="tracking-tight">
                      Ch. 10 - Childhood Friends, And...?
                    </p>
                    <div className="mt-8 flex">
                      <FiUser className="my-auto" />
                      <p className="mx-2">{item.uploadedBy}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="my-3">
        <h1 className="text-xl md:text-2xl font-semibold">Featured Title</h1>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

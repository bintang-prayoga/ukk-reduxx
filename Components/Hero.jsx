import { useContext, useEffect, useState } from "react";
import { MangaContext } from "../Context/MangaContext";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Link from "next/link";

function Hero({ featured }) {
  const { breakpoint, setBreakpoint } = useContext(MangaContext);

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
    window.addEventListener("resize", getBreakpoint);
    return () => {
      window.removeEventListener("resize", getBreakpoint);
    };
  }, []);

  return (
    <div className="bg-zinc-700 rounded-md">
      <Carousel
        indicators={false}
        rightControl={<FaChevronRight />}
        leftControl={<FaChevronLeft />}
      >
        {featured.map((manga, index) => (
          <Link href={`/titles/${manga.id}`} key={index}>
            <div className="flex h-full items-center justify-center py-2 w-5/6 mx-auto">
              <div
                className={`grid ${
                  breakpoint <= 3 ? "grid-cols-1" : "grid-cols-3"
                } grid-flow-row-dense`}
              >
                <div className="mx-auto col-span-1">
                  <img
                    src={manga.coverArt}
                    className="max-h-[10rem]
                    sm:max-h-[calc(300px-4rem)]
                    max-w-[10rem]
                    object-contain 
                    rounded
                    sm:shadow-lg
                    bg-none
                    "
                  />
                </div>
                <div className="col-span-2 flex-col">
                  <h1
                    className={`text-white font-semibold text-2xl text-center md:text-center lg:text-left md:text-3xl `}
                  >
                    {manga.title}
                  </h1>
                  <div className="flex my-2">
                    <div className="flex mx-auto lg:mx-0">
                      {manga.genres.map((genre, index) => (
                        <p
                          className="bg-zinc-900 rounded-md text-center font-semibold text-xs md:text-md px-2 uppercase mx-1"
                          key={index}
                        >
                          {genre.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className={`mt-5 ${breakpoint <= 3 ? "hidden" : ""}`}>
                    {manga.synopsis}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;

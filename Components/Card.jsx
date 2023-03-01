import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

export function DisplayGenre({ genre, index, bg }) {
  if (index < 3) {
    return (
      <p
        className={`${bg} rounded-md text-center font-semibold text-xs md:text-md px-2 uppercase mx-1`}
        key={index}
      >
        {genre.name}
      </p>
    );
  } else {
    return null;
  }
}

function Card({ comic, index, bg }) {
  return (
    <Link href={`/titles/${comic.slug}`} key={index}>
      <div className="flex h-full items-center justify-center py-2 mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-3  grid-flow-row-dense`}>
          <div className="mx-auto col-span-1">
            <Image
              src={comic.coverArt}
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
            <h1
              className={`text-white font-semibold text-2xl text-center md:text-center lg:text-left md:text-3xl `}
            >
              {comic.title}
            </h1>
            <p className="mt-1 text-center lg:text-left font-semibold">
              {comic.author === comic.artist
                ? comic.author
                : `${comic.author}, ${comic.artist}`}
            </p>
            <div className="flex my-2">
              <div className="flex mx-auto lg:mx-0">
                {comic.genres.map((genre, index) => (
                  <DisplayGenre
                    genre={genre}
                    key={index}
                    index={index}
                    bg={bg}
                  />
                ))}
              </div>
            </div>
            <div className={`mt-5 hidden lg:block`}>
              {parse(comic.synopsis.slice(0, 200))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

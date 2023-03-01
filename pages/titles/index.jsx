import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../Components";
import { MdFilterAlt } from "react-icons/md";
import UserLayout from "../Layout/UserLayout";
import getGenre from "../api/Comic/getGenre";
import getLatest from "../api/Comic/getLatest";

export async function getServerSideProps() {
  const genre = await getGenre();
  const latest = await getLatest();
  return {
    props: {
      genre: genre,
      latest: latest,
    },
  };
}

function TitleSearchPage({ genre, latest }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [searchResult, setSearchResult] = useState([]);
  const [latestComic, setLatestComic] = useState(latest);
  const [filter, setFilter] = useState(() => false);

  async function onSubmit(data) {
    if (data.title || data.genres) {
      const searchData = await fetch(`/api/Comic/searchTitle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((r) => r.json());
      if (searchData.length === 0) {
        alert("No result found");
      } else {
        setLatestComic(searchData);
      }
    } else {
      setLatestComic(latest);
    }
  }

  return (
    <>
      <div>
        <h1 className="font-semibold tracking-wide text-2xl">Search Title</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mt-3">
            <input
              type={`text`}
              className="bg-zinc-900 border border-zinc-900 w-full rounded-md shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 sm:text-sm"
              placeholder="Search Comic Title"
              {...register("title")}
            />
            <div
              className={`flex justify-between cursor-pointer hover:text-cyan-500 hover:bg-zinc-900 rounded-md px-1 mx-1 ${
                filter ? "text-cyan-500" : ""
              }`}
              onClick={() => setFilter(!filter)}
            >
              <MdFilterAlt className="my-auto text-2xl" />
              <p className="my-auto">Filter</p>
            </div>
          </div>
          {filter && (
            <div className="rounded-md my-2">
              <h1 className="font-semibold tracking-wide text-2xl">
                Filter By Genre
              </h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {genre.map((genre, index) => (
                  <div key={index}>
                    <label
                      htmlFor={genre.name}
                      className={`flex items-center rounded-md px-2 py-1 cursor-pointer ${
                        watch("genres") && watch("genres")?.includes(genre.id)
                          ? "bg-cyan-600"
                          : "bg-zinc-900"
                      }`}
                    >
                      {genre.name}
                    </label>
                    <input
                      {...register("genres")}
                      id={genre.name}
                      className="hidden"
                      value={genre.id}
                      type="checkbox"
                    />
                  </div>
                ))}
                <div>
                  <input
                    className="flex items-center rounded-md px-2 py-1 cursor-pointer bg-cyan-500"
                    type="submit"
                  />
                </div>
              </div>
            </div>
          )}
        </form>
        <h1 className="font-semibold tracking-wide text-2xl">Result</h1>
        <div>
          {latestComic.map((comic, index) => (
            <div className="bg-zinc-900 rounded-md my-2 cursor-pointer lg:flex w-full hover:bg-slate-800">
              <Card key={index} index={index} comic={comic} bg="bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TitleSearchPage;

TitleSearchPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

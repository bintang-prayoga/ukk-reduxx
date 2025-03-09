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
    reset, // reset function to reset form values
    formState: { errors },
  } = useForm();
  const [resultCon, setResultCon] = useState({
    isOpen: false,
  });
  const [latestComic, setLatestComic] = useState(latest || []); // Default ke array kosong jika data kosong
  const [filter, setFilter] = useState(() => false);

  async function onSubmit(data) {
    if (data.title || data.genres) {
      try {
        const searchData = await fetch(`/api/Comic/searchTitle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => r.json());

        // Pastikan searchData selalu berupa array
        if (Array.isArray(searchData) && searchData.length > 0) {
          setLatestComic(searchData);
          setResultCon({ isOpen: false });
        } else {
          setLatestComic([]); // Reset ke array kosong jika tidak ada hasil
          setResultCon({ isOpen: true });
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLatestComic([]);
        setResultCon({ isOpen: true });
      }
    } else {
      setLatestComic(latest); // Reset ke data awal jika input kosong
      setResultCon({ isOpen: false });
    }
  }

  // Function to reset both title and genres
  const resetFilters = () => {
    reset({
      title: "", // Clear the title field
      genres: [], // Clear the genres field
    });
    setLatestComic(latest); // Reset to default data
  };

  return (
    <>
      <div>
        <h1 className="font-semibold tracking-wide text-2xl">Search Title</h1>
        <form onChange={handleSubmit(onSubmit)}>
          <div className="flex justify-center mt-3">
            <input
              type="text"
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
                    <input
                      {...register("genres")}
                      id={genre.name}
                      className="hidden"
                      value={genre.id}
                      type="checkbox"
                    />
                    <label
                      htmlFor={genre.name}
                      className={`flex items-center rounded-md px-2 py-1 cursor-pointer ${
                        // Make sure to use default value as empty array if watch('genres') is undefined
                        (watch("genres") || []).includes(String(genre.id))
                          ? "bg-cyan-600 text-white"
                          : "bg-zinc-900 text-gray-300"
                      }`}
                    >
                      {genre.name}
                    </label>
                  </div>
                ))}
                <div>
                  {/* Reset button to clear both title and genres */}
                  <button
                    type="button" // Set button type to 'button' to avoid form submission
                    onClick={resetFilters}
                    className="flex items-center rounded-md px-2 py-1 cursor-pointer bg-red-500 text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
        <h1 className="font-semibold tracking-wide text-2xl my-2">Result</h1>
        {resultCon.isOpen ? (
          <div className="bg-red-500 rounded-md my-2">
            <p className="text-white text-center">No Result Found</p>
          </div>
        ) : (
          <div>
            {/* Tambahkan validasi jika latestComic bukan array */}
            {Array.isArray(latestComic) && latestComic.length > 0 ? (
              latestComic.map((comic, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-md my-2 cursor-pointer lg:flex w-full hover:bg-slate-800"
                >
                  <Card index={index} comic={comic} bg="bg-zinc-800" />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                <p>No comics available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default TitleSearchPage;

TitleSearchPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

import { useEffect } from "react";
import UserLayout from "../../Layout/UserLayout";
// import postDrafts from "../api/Manga/postDrafts";
import getGenre from "../api/Comic/getGenre";

export async function getServerSideProps(context) {
  const genre = await getGenre();

  return {
    props: {
      genre: genre,
    },
  };
}

function ComicDraftsPage({ genre }) {
  useEffect(() => {
    console.log(genre);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <form className="">
          <div className="flex flex-col ">
            <div>
              <h1>Enter New Title</h1>
              <input
                type={`text`}
                className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                placeholder="Enter Title"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ComicDraftsPage;

ComicDraftsPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

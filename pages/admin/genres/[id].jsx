import UserLayout from "../../Layout/UserLayout";
import { useSession } from "next-auth/react";
import { TableComp, ModalComp, UnauthorizedPage } from "../../../Components";
import { useState, useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import getSelectedGenre from "../../api/Comic/getSelectedGenre";
import Link from "next/link";

export async function getServerSideProps(context) {
  const genre = await getSelectedGenre(context);
  return {
    props: {
      genre: genre,
    },
  };
}

function GenreDetails({ genre }) {
  const { data: session } = useSession();
  const columnHelper = createColumnHelper();

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const genreData = useMemo(
    () =>
      genre.comic.map((item, index) => {
        return {
          index: index + 1,
          ...item,
        };
      }),
    [genre]
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor("index", {
        header: "Index",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => (
          <span>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={`/titles/${info.row.original.slug}`}
              className="text-blue-500 hover:underline"
            >
              {info.getValue()}
            </Link>
          </span>
        ),
      }),
    ],
    []
  );

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <div>
            <h1 className="text-2xl font-semibold my-2">
              {genre.name} - {genre.comic.length} Comics
            </h1>
            <div className=" rounded-lg shadow-md flex-col">
              <TableComp columns={columns} data={genreData} />
            </div>
          </div>
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default GenreDetails;

GenreDetails.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

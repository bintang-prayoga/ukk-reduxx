import { useEffect, useState, useMemo } from "react";
import {
  TableComp,
  ModalComp,
  UnauthorizedPage,
  Confirm,
} from "../../Components";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { createColumnHelper } from "@tanstack/react-table";
import { FaSignOutAlt } from "react-icons/fa";
import UserLayout from "../Layout/UserLayout";
import authOptions from "../api/auth/[...nextauth]";
import getAllUser from "../api/User/getAllUser";
import getGenre from "../api/Comic/getGenre";
import getComic from "../api/Comic/getComic";
import Link from "next/link";

export async function getServerSideProps(context) {
  const comic = await getComic();
  const genre = await getGenre();
  const user = await getAllUser();
  return {
    props: {
      user: user,
      genre: genre,
      comic: comic,
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

export function CardInfo({ value, title }) {
  return (
    <>
      <div
        className={`card relative flex flex-col mx-auto bg-neutral-700 py-3 px-2`}
      >
        <p className="text-sm font-normal ">{title}</p>
        <h1 className={`font-bold text-2xl`}>{value}</h1>
      </div>
    </>
  );
}

function ComicsDashboard({ comic, genre, user }) {
  const { data: session } = useSession();
  const columnHelper = createColumnHelper();

  const comicsData = useMemo(
    () =>
      comic.map((item, index) => {
        return {
          index: index + 1,
          featured: item.featured ? "Yes" : "No",
          ...item,
        };
      }),
    [comic]
  );

  const [adminData, setAdminData] = useState(
    user.filter((item) => item.role === "admin" || item.role === "super")
  );

  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    type: "",
    name: "",
    id: "",
  });

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  function delEvent(data) {
    setConfirmData({
      isOpen: true,
      type: "Comic",
      name: data.title,
      id: data.id,
    });
  }

  async function onDelete() {
    const del = await fetch(`/api/Comic/delComic`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: confirmData.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: "Comic has been successfully deleted",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Comic delete failed",
        });
      }
    });
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor("index", {
        header: "Index",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("author", {
        header: "Author",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("artist", {
        header: "Artist",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("action", {
        header: "Action",
        cell: (info) => (
          <div className="grid grid-cols-2 text-center">
            {console.log(info.row.original)}
            <Link href={`/follows/drafts/editComic/${info.row.original.slug}`}>
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
              onClick={() => delEvent(info.row.original)}
            >
              Delete
            </button>
          </div>
        ),
      }),
    ],
    []
  );

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          <div className="">
            {modalData.isOpen && (
              <ModalComp modalData={modalData} setModalData={setModalData} />
            )}
            {confirmData.isOpen && (
              <Confirm
                confirmData={confirmData}
                setConfirmData={setConfirmData}
                onSubmit={onDelete}
              />
            )}
            <h1 className="text-2xl font-semibold">Comics Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <CardInfo value={comic.length} title="Total Comics" />
              <CardInfo value={genre.length} title="Total Genre" />
              <div
                className={`card relative flex flex-col mx-auto bg-neutral-700 py-3 px-2`}
              >
                <p className="text-sm font-normal ">Featured</p>
                <div className="flex justify-between">
                  <h1 className={`font-bold text-2xl`}>{comic.length}</h1>
                  <Link href={`/admin/featured`}>
                    <FaSignOutAlt className="my-auto text-2xl hover:cursor-pointer" />
                  </Link>
                </div>
              </div>
              <CardInfo value={adminData.length} title="Total Admin" />
            </div>
            <div className=" rounded-lg shadow-md flex-col">
              <TableComp columns={columns} data={comicsData} />
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

export default ComicsDashboard;

ComicsDashboard.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

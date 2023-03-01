import { useState, useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import {
  TableComp,
  Confirm,
  ModalComp,
  UnauthorizedPage,
} from "../../../../Components";
import { useRouter } from "next/router";
import UserLayout from "../../../Layout/UserLayout";
import getAllChaps from "../../../api/Comic/getAllChaps";
import Link from "next/link";

export async function getServerSideProps(context) {
  const chapters = await getAllChaps(context);

  return {
    props: {
      chapters,
    },
  };
}

function ComicChaptersPage({ chapters }) {
  const columnHelper = createColumnHelper();
  const { data: session } = useSession();
  const router = useRouter();

  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    type: "",
    name: "",
    id: "",
  });

  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    isOpen: false,
  });

  function delEvent(data) {
    setConfirmData({
      isOpen: true,
      type: data.comic.title,
      name: data.title,
      id: data.id,
    });
  }

  async function onDelete() {
    const del = await fetch("/api/Comic/delChapter", {
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
          title: "Success",
          message: "Chapter deleted successfully",
          isOpen: true,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        setModalData({
          title: "Error",
          message: `failed to delete ${confirmData.name} from ${confirmData.type}`,
          isOpen: true,
        });
      }
    });
  }

  const columns = useMemo(() => [
    columnHelper.accessor("chapNum", {
      header: "Chapter",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("title", {
      header: "Chapter Title",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("action", {
      header: "Action",
      cell: (info) => (
        <div className="grid grid-cols-1 text-center">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
            onClick={() => delEvent(info.row.original)}
          >
            Delete
          </button>
        </div>
      ),
    }),
  ]);

  if (session) {
    if (chapters.length !== 0) {
      if (
        chapters.comic.createdBy[0].id === session.user.id ||
        session.user.role === "super"
      ) {
        return (
          <>
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
            <div className="my-2 flex justify-between">
              <h1 className="text-2xl font-semibold">
                Chapters List - {chapters[0].comic.title}
              </h1>
              <Link href={`/chapters/add/${chapters[0].comic.slug}`}>
                <button className="bg-cyan-500 px-2 py-1 rounded-lg flex gap-2">
                  <FaPlus className="my-auto" /> Add New Chapter
                </button>
              </Link>
            </div>
            <div className=" rounded-lg shadow-md flex-col">
              <TableComp columns={columns} data={chapters} />
            </div>
          </>
        );
      } else {
        return <UnauthorizedPage />;
      }
    } else {
      const comic = session.user.createdComic.find(
        (comic) => comic.id === router.query.id
      );

      return (
        <>
          <div className="my-2 flex justify-between">
            <h1 className="text-2xl font-semibold">
              Chapters List - {comic.title}
            </h1>
            <Link href={`/chapters/add/${comic.slug}`}>
              <button className="bg-cyan-500 px-2 py-1 rounded-lg flex gap-2">
                <FaPlus className="my-auto" /> Add New Chapter
              </button>
            </Link>
          </div>
          <div className=" rounded-lg shadow-md flex-col">
            <h1 className="text-2xl">There are no chapters yet.</h1>
          </div>
        </>
      );
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default ComicChaptersPage;

ComicChaptersPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

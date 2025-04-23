import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import UserLayout from "../../Layout/UserLayout";
import getCreatedBy from "../../api/Comic/getCreatedBy";
import {
  UnauthorizedPage,
  Card,
  Confirm,
  ModalComp,
} from "../../../Components";

export async function getServerSideProps(context) {
  const drafts = await getCreatedBy(context);
  return {
    props: {
      drafts: drafts.reverse(),
    },
  };
}

function ComicDraftsPage({ drafts }) {
  const { data: session } = useSession();
  const router = useRouter();

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

  async function delComic(data) {
    setConfirmData({
      isOpen: true,
      type: "Comic",
      name: data.title,
      id: data.id,
    });
  }

  async function onSubmit() {
    const delComic = await fetch("/api/Comic/delComic", {
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
          message: "Comic has been deleted",
        });
        setConfirmData({
          isOpen: false,
          type: "",
          name: "",
          id: "",
        });
        router.reload();
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Comic has not been deleted",
        });
        setConfirmData({
          isOpen: false,
          type: "",
          name: "",
          id: "",
        });
      }
    });
  }

  if (session) {
    if (session.user.id === router.query.user) {
      return (
        <>
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          {confirmData.isOpen && (
            <Confirm
              confirmData={confirmData}
              setConfirmData={setConfirmData}
              onSubmit={onSubmit}
            />
          )}
          {session.user.role === "user" &&
          session.user.createdComic.length >= 5 ? (
            <div className="flex justify-center my-5">
              <h1 className="text-2xl font-bold">
                You have reached the maximum number of comics you can create
              </h1>
            </div>
          ) : (
            <div className="mx-auto grid grid-cols-1 gap-4 mt-5">
              <Link href="/follows/drafts/newDrafts">
                <div className="transition bg-zinc-700 rounded-md hover:border-cyan-500 border-zinc-600 cursor-pointer text-center border-2 border-dashed">
                  <h1 className="py-5">+ New Comic</h1>
                </div>
              </Link>
              <Link href="/follows/drafts/illustration">
                <div className="transition bg-zinc-700 rounded-md hover:border-cyan-500 border-zinc-600 cursor-pointer text-center border-2 border-dashed">
                  <h1 className="py-5">+ New Illustration</h1>
                </div>
              </Link>
            </div>
          )}
          {drafts.length === 0 ? (
            <div className="flex justify-center my-5">
              <h1 className="text-2xl font-bold">Empty Drafts</h1>
            </div>
          ) : (
            <div className="mt-5">
              {drafts.map((comic, index) => (
                <div className=" bg-zinc-900 my-2 rounded-md cursor-pointer lg:flex w-full hover:bg-slate-800">
                  <Card
                    key={index}
                    comic={comic}
                    index={index}
                    bg="bg-zinc-800"
                  />
                  <div className="flex flex-col">
                    <Link href={`/follows/drafts/edit/${comic.slug}`}>
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold mx-auto py-2 px-4 rounded lg:mx-2 my-2 flex">
                        Edit Comic
                      </button>
                    </Link>
                    <Link href={`/follows/drafts/chapters/${comic.id}`}>
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold mx-auto py-2 px-4 rounded lg:mx-2 my-2 flex">
                        Edit Chapters
                      </button>
                    </Link>

                    <button
                      onClick={() => delComic(comic)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold mx-auto py-1 px-4 rounded lg:mx-2 my-2 flex"
                    >
                      Delete Comic
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default ComicDraftsPage;

ComicDraftsPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

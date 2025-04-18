import { useEffect, useState, useMemo } from "react";
import { ModalComp, TableComp, UnauthorizedPage } from "../../Components";
import { createColumnHelper } from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import UserLayout from "../Layout/UserLayout";
import getComic from "../api/Comic/getComic";

export async function getServerSideProps(context) {
  const comic = await getComic();
  return {
    props: {
      comic,
    },
  };
}

function FeaturedDashboard({ comic }) {
  const columnHelper = createColumnHelper();
  const { data: session } = useSession();
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const featuredData = useMemo(
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

  async function toggleFeatured(data) {
    const res = await fetch("/api/Comic/postFeatured", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          title: "Success",
          message: "Featured updated successfully",
          isOpen: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setModalData({
          title: "Error",
          message: "Failed to update featured",
          isOpen: true,
        });
      }
    });
  }

  const columns = useMemo(() => [
    columnHelper.accessor("index", {
      header: "Index",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("featured", {
      header: "Featured",
      cell: (info) => <span>{info.getValue() ? "Yes" : "No"}</span>,
    }),
    columnHelper.accessor("action", {
      header: "Action",
      cell: (info) => (
        <div className="grid grid-cols-1 text-center gap-1">
          <button
            className={`${
              info.row.original.featured ? "bg-cyan-500" : "bg-red-500"
            } text-white px-2 py-1 rounded-md`}
            onClick={() => toggleFeatured(info.row.original)}
          >
            {info.row.original.featured ? "Featured" : "Not"}
          </button>
        </div>
      ),
    }),
  ]);

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <div>
            <h1 className="text-2xl font-semibold mb-4">Featured Dashboard</h1>
            <div className=" rounded-lg shadow-md flex-col">
              <TableComp columns={columns} data={featuredData} />
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

export default FeaturedDashboard;

FeaturedDashboard.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

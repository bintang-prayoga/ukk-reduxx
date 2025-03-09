import { TableComp, UnauthorizedPage } from "../../Components";
import { useMemo } from "react";
import { useSession } from "next-auth/react";
import { createColumnHelper } from "@tanstack/react-table";

import getComic from "../api/Comic/getComic";
import UserLayout from "../Layout/UserLayout";
import moment from "moment-timezone";
export async function getServerSideProps() {
  const comic = await getComic();
  return {
    props: {
      comic: comic,
    },
  };
}

function TimelineDashboard({ comic }) {
  const { data: session } = useSession();

  const columnHelper = createColumnHelper();

  const comicData = useMemo(
    () =>
      comic.map((item, index) => {
        return {
          index: index + 1,
          createdAt: moment(item.createdAt)
            .tz("Asia/Jakarta")
            .format("DD MMM YYYY"),
          createdTime: moment(item.createdAt, "YYYYMMDD")
            .tz("Asia/Jakarta")
            .fromNow(),
          ...item,
        };
      }),
    [comic]
  );

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
      columnHelper.accessor("createdAt", {
        header: "Created At",
        cell: (info) => (
          <span>{moment(info.getValue()).format("DD MMM YYYY")}</span>
        ),
      }),
      columnHelper.accessor("createdTime", {
        header: "Created Time",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
    ],
    []
  );

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          <div className="my-3 flex justify-between">
            <h1 className="text-2xl font-semibold">Timeline</h1>
          </div>
          <div className="flex rounded-lg shadow-md flex-col">
            <TableComp columns={columns} data={comicData} />
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

export default TimelineDashboard;

TimelineDashboard.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

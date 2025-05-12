import { useSession } from "next-auth/react";
import { UnauthorizedPage, TableComp, Trakteer } from "../../../Components";
import UserLayout from "../../Layout/UserLayout";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import Link from "next/link";
import getOneSubscription from "../../api/User/getOneSubscription";

export async function getServerSideProps(context) {
  const subscription = await getOneSubscription(context);

  return {
    props: {
      subscription: subscription || null,
    },
  };
}

function SubscriptionsPage({ subscription }) {
  const { data: session } = useSession();
  const router = useRouter();
  const columnHelper = createColumnHelper();

  // Memoize subscription data
  const subscriptionData = useMemo(() => {
    if (!subscription || subscription.length === 0) {
      return [];
    }
    return subscription.map((item, index) => ({
      index: index + 1,
      ...item,
    }));
  }, [subscription]);

  // Define table columns
  const columns = useMemo(
    () => [
      columnHelper.accessor("index", {
        header: "Index",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("supporter_email", {
        header: "Supporter Email",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("supporter_name", {
        header: "Name",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("unit_name", {
        header: "Paket",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("quantity", {
        header: "Quantity",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("amount", {
        header: "Amount",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("date", {
        header: "Date",
        cell: (info) => (
          <span>{moment(info.getValue()).format("YYYY-MM-DD")}</span>
        ),
      }),
    ],
    []
  );

  if (session) {
    if (session.user.id === router.query.id) {
      // Handle empty subscription
      if (!subscription || subscription.length === 0) {
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <Trakteer />
            <h1 className="text-lg font-bold my-5">
              You haven't made any transactions
            </h1>
          </div>
        );
      }

      // Render subscription table if data exists
      return (
        <div className="flex flex-col items-center justify-center h-full">
          {/* <Link
            href="https://trakteer.id/BoedTrial/tip/embed/modal"
            className="text-blue-500 mt-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Support Me on Trakteer!
            </button>
          </Link> */}
          <Trakteer />
          <div className="mt-4">
            <h1 className="text-lg font-bold">Riwayat Subscription</h1>
            <TableComp data={subscriptionData} columns={columns} />
          </div>
        </div>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default SubscriptionsPage;

SubscriptionsPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

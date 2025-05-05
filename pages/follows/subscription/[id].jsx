import { useSession } from "next-auth/react";
import { UnauthorizedPage, Trakteer } from "../../../Components";
import UserLayout from "../../Layout/UserLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SubscriptionsPage() {
  const [payhistory, setPayHistory] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
    getHistory()
  },[])

  async function getHistory(params) {
    try {
      const res = await fetch(
        'https://api.trakteer.id/v1/public/supports?limit=20&page=1',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'key': process.env.TRAKTEER_KEY,
          }
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      setPayHistory(json.data);
      console.log(payhistory)
    } catch (err) {
      console.error(err);
    }
  }

  if (session) {
    if (session.user.id === router.query.id) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <Trakteer />
          <div className="mt-4">
            <h1 className="text-lg font-bold">Riwayat Subscription</h1>

          </div>
        </div>
      )
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

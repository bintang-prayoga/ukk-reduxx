import { useSession } from "next-auth/react";
import { UnauthorizedPage, Card } from "../../../Components";
import UserLayout from "../../Layout/UserLayout";
import { useRouter } from "next/router";

function BookmarksPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (session) {
    if (session.user.id === router.query.id) {
      if (session.user.bookmarks.length === 0) {
        return (
          <>
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-2xl font-bold">No Bookmarks</h1>
              <p className="text-lg">You haven't added any bookmarks yet.</p>
            </div>
          </>
        );
      } else {
        return (
          <div className="flex flex-col items-start justify-center h-full">
            <div className="flex flex-col items-start justify-center w-full my-2">
              <h1 className="text-2xl font-bold">Bookmarks</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              {session.user.bookmarks.map((bookmark, index) => (
                <div className=" bg-zinc-900 my-2 rounded-md cursor-pointer lg:flex w-full hover:bg-slate-800">
                  <Card
                    key={index}
                    comic={bookmark}
                    index={index}
                    bg="bg-zinc-800"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      }
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default BookmarksPage;

BookmarksPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

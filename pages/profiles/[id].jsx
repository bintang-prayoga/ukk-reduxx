import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { UnauthorizedPage } from "../../components";
import { FaSignOutAlt } from "react-icons/fa";
import UserLayout from "../Layout/UserLayout";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "flowbite-react";

function ProfilesPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    if (session.user.id === router.query.id) {
      return (
        <>
          <div className="flex flex-row mx-5 gap-20">
            <div className="flex flex-col ">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              ) : (
                <Avatar
                  rounded="true"
                  className=" w-[300px] h-[300px] "
                  size="xl"
                />
              )}
              <Link href={`/profiles/edit/${session.user.id}`}>
                <button className="bg-cyan-500 text-white px-5 py-2 rounded-full mt-5">
                  Edit Profile
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-gray-400">Username</label>
                <h1 className="text-2xl font-semibold">{session.user.name}</h1>
              </div>
              <div>
                <label className="text-gray-400">Email</label>
                <h1 className="text-2xl font-semibold">{session.user.email}</h1>
              </div>
              <div>
                <label className="text-gray-400">Role</label>
                <h1 className="text-2xl font-semibold capitalize">
                  {session.user.role}
                </h1>
              </div>
              <div>
                <label className="text-gray-400">Bookmarks</label>
                <h1 className="text-2xl font-semibold">
                  {session.user.bookmarks.length}
                  <span className="text-lg font-normal">
                    , books have been marked.
                  </span>
                </h1>
              </div>
              <button
                className="flex text-2xl bg-zinc-900 rounded-lg gap-2 mx-auto py-1 px-3"
                onClick={() => signOut()}
              >
                Logout
                <FaSignOutAlt className="my-auto" />
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return;
  }
}

export default ProfilesPage;

ProfilesPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

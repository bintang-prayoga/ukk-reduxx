import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHome,
  FaBookmark,
  FaSearch,
  FaSignOutAlt,
  FaBook,
  FaUserFriends,
  FaRegHourglass,
  FaDollarSign,
} from "react-icons/fa";
import { MdEditNote, MdCategory, MdHistory } from "react-icons/md";
import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Avatar } from "flowbite-react";
import { signOut } from "next-auth/react";
import moment from "moment-timezone";

export function DisplayManage({ router, activeNav, defaultNav, session }) {
  const today = moment().format("DD MMM YYYY");
  session.allComic.map((item, index) => {
    item.createdAt = moment(item.createdAt)
      .tz("Asia/Jakarta")
      .format("DD MMM YYYY");
  });
  const todayComic = session.allComic.filter(
    (item) => item.createdAt === today
  );

  if (session.user.role === "super") {
    return (
      <div>
        <li className="mt-4 text-xl">Admin</li>
        <Link href="/admin/users">
          <li
            className={`
        ${
          router.pathname === "/admin/users" ? activeNav : defaultNav
        } cursor-pointer
      `}
          >
            <FaUserFriends className="mr-4" />
            <span>Users</span>
          </li>
        </Link>
        <Link href="/admin/payment">
          <li
            className={`
        ${
          router.pathname === "/admin/payment" ? activeNav : defaultNav
        } cursor-pointer
      `}
          >
            <FaDollarSign className="mr-4" />
            <span>Payment</span>
          </li>
        </Link>
        <Link href="/admin/comics">
          <li
            className={`
        ${
          router.pathname === "/admin/comics" ? activeNav : defaultNav
        } cursor-pointer
      `}
          >
            <FaBook className="mr-4" />
            <span>Comics</span>
          </li>
        </Link>
        <Link href="/admin/genres">
          <li
            className={`
        ${
          router.pathname === "/admin/genres" ? activeNav : defaultNav
        } cursor-pointer mt-0
      `}
          >
            <MdCategory className="mr-4" />
            <span>Genres</span>
          </li>
        </Link>
        <Link href="/admin/timeline">
          <li
            className={`
        ${
          router.pathname === "/admin/timeline" ? activeNav : defaultNav
        } cursor-pointer mt-0
      `}
          >
            <MdHistory className="mr-4" />
            <p>
              Timeline{" "}
              {todayComic.length > 0 && (
                <>
                  <span
                    className={`animate-ping absolute inline-flex h-3 w-3 mr-2 my-0.5 rounded-full bg-fuchsia-500 opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 my-auto mr-2 bg-fuchsia-500`}
                  ></span>
                </>
              )}
            </p>
          </li>
        </Link>
      </div>
    );
  }
}

function Routes({ sidenav, setSideNav, session }) {
  const router = useRouter();

  // get comic data

  const activeNav =
    "px-4 py-2 flex items-center font-bold bg-cyan-600 rounded-xl mb-3";
  const defaultNav = "px-4 py-2 flex items-center";

  function handleLogout() {
    router.push("/");
    signOut();
  }

  useEffect(() => {
    setSideNav(sidenav);
  }, [setSideNav]);

  return (
    <Transition.Root show={sidenav || false} as={Fragment}>
      <div className="md:w-[230px] w-screen h-screen z-10 absolute md:relative">
        <div
          className={`absolute -z-10 w-full h-full bg-zinc-900 bg-opacity-50`}
          onClick={() => setSideNav(false)}
        ></div>
        <div
          id="navigation"
          className={`bg-zinc-900 w-[230px] h-full md:flex flex-col justify-between p-3 absolute`}
        >
          <div className="nav-menu">
            <div className="my-5 flex">
              {session ? (
                <div className="flex mx-auto">
                  <Link href={`/profiles/${session.user.id}`}>
                    {session.user.image ? (
                      <Avatar img={session.user.image} rounded="true" />
                    ) : (
                      <Avatar rounded="true" />
                    )}
                  </Link>
                  <div className="text-white mx-2">
                    <p className="font-semibold">{session.user.name}</p>
                    <button
                      className="flex justify-between text-sm font-semibold cursor-pointer hover:bg-zinc-800 px-1 rounded-md"
                      onClick={() => handleLogout()}
                    >
                      Logout
                      <FaSignOutAlt className="my-auto ml-2" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex mx-auto">
                  <Avatar rounded="true" />
                  <div className="text-white mx-2">
                    <p className="font-semibold">Guest</p>
                    <Link href="/login">
                      <div className="flex justify-between text-sm font-semibold cursor-pointer hover:bg-zinc-800 px-1 rounded-md">
                        Login
                        <FaSignOutAlt className="my-auto ml-2" />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <nav>
              <ul className="m-0 p-4 list-none text-white font-bold">
                <Link href="/">
                  <li
                    className={`
                      ${
                        router.pathname === "/" ? activeNav : defaultNav
                      } cursor-pointer
                    `}
                  >
                    <FaHome className="mr-4" />
                    <span>Dashboard</span>
                  </li>
                </Link>
                <Link href="/titles">
                  <li
                    className={`
                      ${
                        router.pathname === "/titles" ? activeNav : defaultNav
                      } cursor-pointer
                    `}
                  >
                    <FaSearch className="mr-4" />
                    <span>Search</span>
                  </li>
                </Link>
                {session && (
                  <div>
                    <li className="mt-4 text-xl">Follows</li>

                    <Link href={`/follows/bookmark/${session.user.id}`}>
                      <li
                        className={`
                      ${
                        router.pathname === "/follows/bookmark/[id]"
                          ? activeNav
                          : defaultNav
                      } cursor-pointer
                    `}
                      >
                        <FaBookmark className="mr-4" />
                        <span>Bookmark</span>
                      </li>
                    </Link>
                    <Link href={`/follows/history/${session.user.id}`}>
                      <li
                        className={`
                      ${
                        router.pathname === "/follows/history/[id]"
                          ? activeNav
                          : defaultNav
                      } cursor-pointer
                    `}
                      >
                        <FaRegHourglass className="mr-4" />
                        <span>History</span>
                      </li>
                    </Link>
                    <Link href={`/follows/subscription/${session.user.id}`}>
                      <li
                        className={`
                      ${
                        router.pathname === "/follows/subscription/[id]"
                          ? activeNav
                          : defaultNav
                      } cursor-pointer
                    `}
                      >
                        <FaDollarSign className="mr-4" />
                        <span>Subscription</span>
                      </li>
                    </Link>
                    <Link href={`/follows/drafts/${session.user.id}`}>
                      <li
                        className={`
                      ${
                        router.pathname === `/follows/drafts/[user]`
                          ? activeNav
                          : defaultNav
                      } cursor-pointer
                    `}
                      >
                        <MdEditNote className="mr-2 text-2xl" />
                        <span>Drafts</span>
                      </li>
                    </Link>

                    <DisplayManage
                      session={session}
                      activeNav={activeNav}
                      defaultNav={defaultNav}
                      router={router}
                    />
                  </div>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}

export default Routes;

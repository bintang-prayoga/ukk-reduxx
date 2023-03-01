import { FaBars, FaSearch } from "react-icons/fa";
import { useState, useEffect, Fragment } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Routes from "../Routes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function UserLayout({ children }) {
  const [sidenav, setSideNav] = useState(() => false);
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>BoedNoComic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" flex-none md:flex antialiased font-sans">
        <Routes {...{ sidenav, setSideNav, session }} />
        <div className="flex-1 flex-co text-white">
          <div className="px-3 my-3">
            <div className="border-b border-b-cyan-500 flex items-center pb-2">
              <FaBars
                className="cursor-pointer ml-3 mr-3 text-2xl"
                onClick={() => setSideNav(!sidenav)}
              />
              <Link href="/">
                <h1 className="font-bold flex-1 text-sm md:text-xl cursor-pointer">
                  👋
                </h1>
              </Link>
            </div>
          </div>
          <div className="bg-zinc-800 rounded-md p-3 flex-1 mx-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;

UserLayout.getLayout = (page) => <UserLayout>{page}</UserLayout>;

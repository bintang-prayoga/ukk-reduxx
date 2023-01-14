import { FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Routes from "../pages/Routes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function UserLayout({ children }) {
  const [openSearch, setOpenSearch] = useState(() => false);
  const [sidenav, setSideNav] = useState(() => false);

  return (
    <>
      <Head>
        <title>BoedNoManga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row antialiased">
        <Routes {...{ sidenav, setSideNav }} />
        <div className="flex-1 flex-col text-white">
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
              <form className="px-2 mx-2 bg-zinc-800 rounded-lg flex items-center">
                <input
                  type={`text`}
                  className=" bg-zinc-800 w-full focus:outline-none border-none"
                  placeholder="Search Manga"
                />
                <FaSearch className="cursor-pointer ml-2 text-xl" />
              </form>

              <Image
                src={`https://cdn.discordapp.com/attachments/1021055312087748608/1021059069429174352/unknown.png`}
                height={40}
                width={40}
                className="rounded-full"
              />
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

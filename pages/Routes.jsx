import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaHome, FaStar } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";

function Routes({ sidenav, setSideNav }) {
  const router = useRouter();

  const activeNav =
    "px-4 py-2 flex items-center font-bold bg-cyan-600 rounded-xl mb-3";
  const defaultNav = "px-4 py-2 flex items-center";

  useEffect(() => {
    setSideNav(sidenav);
  }, [setSideNav]);

  return (
    <Transition.Root show={false || sidenav} as={Fragment}>
      <div className="md:w-[230px] w-screen h-full z-10 absolute md:relative">
        <div
          className={`absolute -z-10 w-full h-full bg-opacity-50`}
          onClick={() => setSideNav(false)}
        ></div>
        <div
          id="navigation"
          className={`w-[230px] h-full md:flex flex-col justify-between p-3 absolute`}
        >
          <div className="nav-menu">
            <nav>
              <ul className="m-0 p-4 list-none text-white font-bold">
                <Link href="/">
                  <a>
                    <li
                      className={
                        router.pathname === "/" ? activeNav : defaultNav
                      }
                    >
                      <FaHome className="mr-4" />
                      <span>Dashboard</span>
                    </li>
                  </a>
                </Link>
                <li className="mt-4  text-xl">Follows</li>
                <Link href="/updates">
                  <a>
                    <li
                      className={
                        router.pathname === "/updates" ? activeNav : defaultNav
                      }
                    >
                      <MdUpdate className="mr-4" />
                      <span>Updates</span>
                    </li>
                  </a>
                </Link>
                <Link href="/updates">
                  <a>
                    <li
                      className={
                        router.pathname === "/updates" ? activeNav : defaultNav
                      }
                    >
                      <FaStar className="mr-4" />
                      <span>Favorites</span>
                    </li>
                  </a>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}

export default Routes;

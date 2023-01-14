import AuthLayout from "../Layout/AuthLayout";
import Link from "next/link";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    confirmed: undefined,
    valid: false,
    isAdmin: false,
    isSuper: false,
  });

  const [isOpen, setIsOpen] = useState(() => false);

  function handleSubmit() {}

  return (
    <>
      <form className="mt-8 space-y-6 text-white" action="#" method="POST">
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div className="relative">
          <label className="text-sm font-bold tracking-wide">Username</label>
          <input
            className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-t-md"
            type="text"
            placeholder="Enter New Username"
            onChange={({ target }) =>
              setCredentials((prev) => ({
                ...prev,
                username: target.value,
                valid: prev.password?.length > 0 && target.value.length > 0,
              }))
            }
          />
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">Email</label>
          <input
            className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-t-md"
            type="email"
            placeholder="Enter Your Email"
            onChange={({ target }) =>
              setCredentials((prev) => ({
                ...prev,
                email: target.value,
                valid: prev.password?.length > 0 && target.value.length > 0,
              }))
            }
          />
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">Password</label>
          <div className="flex flex-row items-center">
            <input
              className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-t-md"
              type={isOpen ? "text" : "password"}
              placeholder="Enter your password"
              onChange={({ target }) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: target.value,
                  valid: prev.email?.length > 0 && target.value.length > 0,
                }))
              }
            />
            <div
              className={`
                cursor-pointer text-2xl`}
              onClick={() => setIsOpen(() => !isOpen)}
            >
              {isOpen ? (
                <FiEyeOff className="my-2" />
              ) : (
                <FiEye className="my-2" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">
            Confirm Password
          </label>
          <div className="flex flex-row items-center">
            <input
              className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-t-md"
              type={isOpen ? "text" : "password"}
              placeholder="Confirm Your Password"
              onChange={({ target }) =>
                setCredentials((prev) => ({
                  ...prev,
                  confirmed: target.value,
                  valid: prev.email?.length > 0 && target.value.length > 0,
                }))
              }
            />
            <div
              className={`
                cursor-pointer text-2xl`}
              onClick={() => setIsOpen(() => !isOpen)}
            >
              {isOpen ? (
                <FiEyeOff className="my-2" />
              ) : (
                <FiEye className="my-2" />
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center bg-cyan-600 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-cyan-700 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Sign in
          </button>
        </div>
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-300">
          <span>Already Have an account?</span>
          <Link href="/login">
            <p className="text-cyan-600 hover:text-cyan-700 no-underline hover:underline cursor-pointer transition ease-in duration-300">
              Log In
            </p>
          </Link>
        </p>
      </form>
    </>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return AuthLayout.getLayout(page);
};

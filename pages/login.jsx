import { FiEyeOff, FiEye } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import AuthLayout from "./Layout/AuthLayout";

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(() => false);
  const [errorData, setErrorData] = useState({
    error: false,
    message: "",
  });

  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result.error) {
      setErrorData({
        error: true,
        message: result.error,
      });
    } else {
      setTimeout((window.location.href = "/"), 3000);
    }
  }

  return (
    <>
      <form
        className="mt-8 space-y-6 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <div className="flex">
            <label className="text-sm font-bold tracking-wide">Email</label>
            {errorData.error && (
              <label className="text-red-500 text-sm mx-3 ">
                {errorData.message}
              </label>
            )}
          </div>
          <input
            {...register("email", { required: true })}
            className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">Password</label>
          <div className="flex flex-row items-center">
            <input
              {...register("password", { required: true })}
              className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
              type={isOpen ? "text" : "password"}
              placeholder="Enter your password"
            />
            <div
              className={`
                cursor-pointer text-2xl`}
              onClick={() => setIsOpen(() => !isOpen)}
            >
              {isOpen ? (
                <FiEyeOff className="my-2 ml-2" />
              ) : (
                <FiEye className="my-2 ml-2" />
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {}}
            type="submit"
            className="w-full flex justify-center bg-cyan-600 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-cyan-700 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Sign in
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-300">
          <span>Don't have an account?</span>
          <Link href="/signup">
            <p className="text-cyan-600 hover:text-cyan-700 no-underline hover:underline cursor-pointer transition ease-in duration-300">
              Sign up
            </p>
          </Link>
        </div>
      </form>
    </>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return AuthLayout.getLayout(page);
};

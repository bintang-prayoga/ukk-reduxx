import { FiEyeOff, FiEye } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ModalComp } from "../Components";
import Link from "next/link";
import AuthLayout from "./Layout/AuthLayout";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(() => false);
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  async function onSubmit(data) {
    if (data.password === data.confirmed) {
      try {
        const result = await fetch("/api/Auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.status === 400) {
            setModalData({
              isOpen: true,
              title: "Error",
              message: "Email already exist",
            });
          } else if (res.status === 200) {
            setModalData({
              isOpen: true,
              title: "Success",
              message: "Account has been created, please login",
            });
            setTimeout(() => {
              window.location.href = "/login";
            }, 1500);
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      return null;
    }
  }

  return (
    <>
      {modalData.isOpen && (
        <ModalComp modalData={modalData} setModalData={setModalData} />
      )}
      <form
        className="mt-8 space-y-6 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <label className="text-sm font-bold tracking-wide">
            Username
            <span className="text-red-500 mx-2 font-medium">
              {errors.name && `${errors.name.message}`}
            </span>
          </label>
          <input
            {...register("name", {
              required: true,
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters",
              },
              minLength: {
                value: 4,
                message: "Username must be at least 4 characters",
              },
            })}
            className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
            type="text"
            placeholder="Enter New Username"
          />
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">Email</label>
          <input
            {...register("email", { required: true })}
            className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mt-8 content-center">
          <label className="text-sm font-bold tracking-wide">
            Password
            <span className="text-red-500 mx-2 font-medium">
              {errors.password && `${errors.password.message}`}
            </span>
          </label>
          <div className="flex flex-row items-center">
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: (value) => {
                  if (value === getValues("confirmed")) {
                    return true;
                  } else {
                    return "Confirmed password does not match";
                  }
                },
              })}
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
                <FiEyeOff className="my-2 mx-2" />
              ) : (
                <FiEye className="my-2 mx-2" />
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
              {...register("confirmed", { required: true, minLength: 8 })}
              className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
              type={isOpen ? "text" : "password"}
              placeholder="Confirm Your Password"
            />
            <div
              className={`
                cursor-pointer text-2xl`}
              onClick={() => setIsOpen(() => !isOpen)}
            >
              {isOpen ? (
                <FiEyeOff className="my-2 mx-2" />
              ) : (
                <FiEye className="my-2 mx-2" />
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
            Sign Up
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-300">
          <span>Already Have an account?</span>
          <Link href="/login">
            <p className="text-cyan-600 hover:text-cyan-700 no-underline hover:underline cursor-pointer transition ease-in duration-300">
              Log In
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

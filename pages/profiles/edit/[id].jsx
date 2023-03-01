import { UnauthorizedPage, ModalComp } from "../../../components";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { BsCloudUpload } from "react-icons/bs";
import UserLayout from "../../Layout/UserLayout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import getSelectedUser from "../../api/User/getSelectedUser";
import { Avatar } from "flowbite-react";

export async function getServerSideProps(context) {
  const user = await getSelectedUser(context);

  return {
    props: {
      user,
    },
  };
}

function ProfilesEditPage({ user }) {
  const { data: session } = useSession();
  const router = useRouter();

  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    isOpen: false,
  });

  const [isOpen, setIsOpen] = useState({
    password: false,
    eye: false,
    confirmed: false,
  });

  const [photo, setPhoto] = useState({
    imgSrc: [`${user.image}`],
    value: [],
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { onChange } = register("profile", {
    onChange: (e) => {
      const reader = new FileReader();

      reader.onload = () => {
        setPhoto({
          imgSrc: [reader.result],
          value: e.target.files[0],
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    },
  });

  async function onSubmit(data) {
    data.id = user.id;

    if (photo.imgSrc[0] === user.image) {
      data.image = user.image;
      if (isOpen.password) {
        await fetch("/api/User/postProfileYes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => {
          if (r.status === 200) {
            setModalData({
              title: "Success",
              message: "Profile updated successfully",
              isOpen: true,
            });
          } else if (r.status === 401) {
            setModalData({
              title: "Error",
              message: "Password is incorrect",
              isOpen: true,
            });
          }
        });
      } else {
        await fetch("/api/User/postProfileNo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => {
          if (r.status === 200) {
            setModalData({
              title: "Success",
              message: "Profile updated successfully",
              isOpen: true,
            });
          } else {
            setModalData({
              title: "Error",
              message: "Profile update failed",
              isOpen: true,
            });
          }
        });
      }
    } else {
      const formData = new FormData();
      formData.append("upload_preset", "profile-preset");
      formData.append("file", photo.value);

      const coverUrl = await fetch(
        `https://api.cloudinary.com/v1_1/boednocomic/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      data.image = coverUrl.secure_url;

      if (isOpen.password) {
        await fetch("/api/User/postProfileYes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => {
          if (r.status === 200) {
            setModalData({
              title: "Success",
              message: "Profile updated successfully",
              isOpen: true,
            });
          } else if (r.status === 401) {
            setModalData({
              title: "Error",
              message: "Password is incorrect",
              isOpen: true,
            });
          }
        });
      } else {
        await fetch("/api/User/postProfileNo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => {
          if (r.status === 200) {
            setModalData({
              title: "Success",
              message: "Profile updated successfully",
              isOpen: true,
            });
          } else {
            setModalData({
              title: "Error",
              message: "Profile update failed",
              isOpen: true,
            });
          }
        });
      }
    }
  }

  if (session) {
    if (user.id === session.user.id) {
      return (
        <>
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <form
            className="flex flex-row mx-5 gap-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              ) : (
                <Avatar
                  img={photo.imgSrc[0]}
                  rounded="true"
                  className=" w-[300px] h-[300px] "
                  size="xl"
                />
              )}
              <label className="flex justify-center mb-2 px-4 transition bg-zinc-900 border-2 border-zinc-900 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-700 focus:outline-none my-5">
                <span className="flex items-center space-x-2 py-2 ">
                  <BsCloudUpload className="text-gray-500 text-xl" />
                  <span className="font-medium text-blue-600 hover:underline">
                    {" "}
                    Browse Files
                  </span>
                </span>

                <input
                  {...register("profile")}
                  type="file"
                  name="profile"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  onChange={onChange}
                />
              </label>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label className="text-gray-400">
                  Username{" "}
                  <span className="text-sm text-red-500">
                    {" "}
                    {errors.name && `${errors.name.message}`}
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: true,
                    value: user.name,
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
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400">
                  Email{" "}
                  <span className="text-sm text-red-500">
                    {" "}
                    {errors.email && `${errors.email.message}`}
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                    value: user.email,
                  })}
                  className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
                  type="text"
                />
              </div>
              {isOpen.password ? (
                <>
                  <div className="flex flex-col">
                    <label className="text-gray-400">
                      Old Password{" "}
                      <span className="text-sm text-red-500">
                        {" "}
                        {errors.password && `${errors.password.message}`}
                      </span>
                    </label>
                    <div className="flex flex-row items-center">
                      <input
                        {...register("password", {
                          required: isOpen.password ? true : false,
                        })}
                        className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
                        type={isOpen.eye ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <div
                        className={`
                cursor-pointer text-2xl`}
                        onClick={() =>
                          setIsOpen({ ...isOpen, eye: !isOpen.eye })
                        }
                      >
                        {isOpen.eye ? (
                          <FiEyeOff className="my-2 mx-2" />
                        ) : (
                          <FiEye className="my-2 mx-2" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400">
                      New Password{" "}
                      <span className="text-sm text-red-500">
                        {" "}
                        {errors.newPassword && `${errors.newPassword.message}`}
                      </span>
                    </label>
                    <div className="flex flex-row items-center">
                      <input
                        {...register("newPassword", {
                          required: isOpen.password ? true : false,
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                        })}
                        className="bg-zinc-800 w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
                        type={isOpen.eye ? "text" : "password"}
                        placeholder="Enter your new password"
                      />
                    </div>
                    <button
                      onClick={() =>
                        setIsOpen({ ...isOpen, password: !isOpen.password })
                      }
                      className="bg-red-900 text-white rounded-md px-4 py-2 my-2"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      setIsOpen({ ...isOpen, password: !isOpen.password })
                    }
                    className="bg-zinc-900 text-white rounded-md px-4 py-2 my-2 hover:bg-zinc-700"
                  >
                    Change Password
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="bg-zinc-900 text-white rounded-md px-4 py-2 my-2 hover:bg-zinc-700"
              >
                Update
              </button>
              <Link href={`/profiles/${user.id}`}>
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-md px-4 py-2 my-2 hover:bg-red-600"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return;
  }
}

export default ProfilesEditPage;

ProfilesEditPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

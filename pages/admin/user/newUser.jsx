import UserLayout from "../../Layout/UserLayout";
import { useSession } from "next-auth/react";
import { UnauthorizedPage, ModalComp } from "../../../Components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Spinner } from "flowbite-react";

function AddUserPage() {
  const { data: session } = useSession();
  const roleValue = [`super`, `user`];
  const [isSpin, setIsSpin] = useState(() => false);
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsSpin(true);

    const submitUser = await fetch("/api/User/postUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setIsSpin(false);
        setModalData({
          isOpen: true,
          title: "Success",
          message: "User has been added, please refresh the page",
        });
        setTimeout(() => {
          window.location.href = "/admin/users";
        }, 1500);
      } else if (res.status === 400) {
        setIsSpin(false);
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Email already exist",
        });
      }
    });
  }

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <div>
            <h1 className="text-2xl font-semibold">Add User</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col ">
                <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-2">
                  <div className="my-1">
                    <h1>
                      Enter Username{" "}
                      <span className="text-red-500 mx-2 font-medium">
                        {errors.name && `${errors.name.message}`}
                      </span>
                    </h1>
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
                      type={`text`}
                      name="name"
                      className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="my-1">
                    <h1>
                      Enter Email{" "}
                      <span className="text-red-500 mx-2 font-medium">
                        {errors.email && `${errors.email.message}`}
                      </span>
                    </h1>
                    <input
                      {...register("email", { required: true })}
                      type={`email`}
                      name="email"
                      className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-2">
                  <div className="my-1">
                    <h1>
                      Password{" "}
                      <span className="text-red-500 mx-2 font-medium">
                        {errors.password && `${errors.password.message}`}
                      </span>
                    </h1>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      type={`text`}
                      name="password"
                      className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="my-1">
                    <h1>Role</h1>
                    <select
                      {...register("role", { required: true })}
                      name="role"
                      required={true}
                      className="bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      id="role"
                    >
                      <option value="">Select Role</option>
                      {roleValue.map((role, index) => (
                        <option key={index} value={role} className="capitalize">
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-row mx-auto bg-cyan-600 rounded-xl py-2 px-10 my-5">
                  <input
                    type="submit"
                    value={isSpin ? "Creating..." : "Create"}
                    className=" text-xl lg:text-2xl font-semibold uppercase cursor-pointer mx-5"
                  />
                  {isSpin && <Spinner size="lg" color="purple" />}
                </div>
              </div>
            </form>
          </div>
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default AddUserPage;

AddUserPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

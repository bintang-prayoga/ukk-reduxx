import UserLayout from "../../../Layout/UserLayout";
import { useSession } from "next-auth/react";
import { UnauthorizedPage, ModalComp } from "../../../../Components";
import { useForm } from "react-hook-form";
import { Spinner } from "flowbite-react";
import { useState } from "react";
import getSelectedUser from "../../../api/User/getSelectedUser";

export async function getServerSideProps(context) {
  const user = await getSelectedUser(context);

  return {
    props: {
      user,
    },
  };
}

function EditUserPage({ user }) {
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
    data.oldEmail = user.email;

    const submitUser = await fetch(`/api/User/updateUser`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setIsSpin(false);
        setModalData({
          isOpen: true,
          title: `Success`,
          message: `User has been updated, please refresh the page`,
        });
        setTimeout(() => {
          window.location.href = `/admin/users`;
        }, 1500);
      } else if (res.status === 400) {
        setIsSpin(false);
        setModalData({
          isOpen: true,
          title: `Error`,
          message: `Update failed`,
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
                      {...register("email", {
                        required: true,
                        value: user.email,
                      })}
                      type={`email`}
                      name="email"
                      className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div className="grid gap-x-6 grid-cols-1">
                  <div className="my-1">
                    <h1>Role</h1>
                    <select
                      {...register("role", { required: true })}
                      name="role"
                      required={true}
                      className="bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      id="role"
                    >
                      <option value={user.role}>{user.role}</option>
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
                    value={isSpin ? "Updating..." : "Update"}
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

export default EditUserPage;

EditUserPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

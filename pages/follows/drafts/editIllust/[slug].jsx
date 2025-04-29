import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { BsCloudUpload } from "react-icons/bs";
import { Spinner } from "flowbite-react";
import UserLayout from "../../../Layout/UserLayout";
import getGenre from "../../../api/Comic/getGenre";
import { ModalComp, UnauthorizedPage } from "../../../../Components";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";

import "react-quill/dist/quill.snow.css";
import getSelected from "../../../api/Comic/getSelected";

export async function getServerSideProps(context) {
  const comic = await getSelected(context);
  const genre = await getGenre();
  return {
    props: {
      comic: comic,
      genre: genre,
    },
  };
}

function EditIllustPage({ genre, comic }) {
  const { data: session } = useSession();

  const statusValue = [`Ongoing`, `Completed`, `Hiatus`, `Cancelled`].filter(
    (item) => item !== comic.status
  );
  const exclusivityValue = [`Free`, `Paid`].filter(
    (item) => item !== comic.exclusivity
  );

  const [photo, setPhoto] = useState({
    imgSrc: `${comic.coverArt}`,
    value: [],
  });
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    isOpen: false,
  });
  const [synopsisValue, setSynopsisValue] = useState(() => comic.synopsis);
  const [isSpin, setIsSpin] = useState(() => false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { onChange } = register("coverArt", {
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
    data.synopsis = synopsisValue;
    data.id = comic.id;
    data.type = comic.type;

    if (photo.imgSrc === comic.coverArt) {
      data.coverArt = comic.coverArt;
      await fetch("/api/Comic/updateIllust", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          setTimeout(
            (window.location.href = `/follows/drafts/${session.user.id}`),
            3000
          );
          setModalData({
            title: "Success",
            message: `Illustration ${data.title} updated successfully`,
            isOpen: true,
          });
        } else if (response.status === 400) {
          setModalData({
            title: "Error",
            message: `Illustration ${data.title} update failed`,
            isOpen: true,
          });
        } else if (response.status === 500) {
          setModalData({
            title: "Error",
            message: `Illustration ${data.title} update failed`,
            isOpen: true,
          });
        }
      });
    } else {
      const formData = new FormData();
      formData.append("upload_preset", "coverArt-preset");
      formData.append("file", photo.value);

      const coverUrl = await fetch(
        `https://api.cloudinary.com/v1_1/boednocomic/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      data.coverArt = coverUrl.secure_url;

      await fetch("/api/Comic/updateIllust", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          setTimeout(
            (window.location.href = `/follows/drafts/${session.user.id}`),
            3000
          );
          setModalData({
            title: "Success",
            message: `Illustration ${data.title} updated successfully`,
            isOpen: true,
          });
        } else if (response.status === 400) {
          setModalData({
            title: "Error",
            message: `Illustration ${data.title} update failed`,
            isOpen: true,
          });
        } else if (response.status === 500) {
          setModalData({
            title: "Error",
            message: `Illustration ${data.title} update failed`,
            isOpen: true,
          });
        }
      });
    }
  }

  if (session) {
    if (
      session.user.id === comic.createdBy[0].id ||
      session.user.role === "super"
    ) {
      return (
        <>
          <div className="flex flex-col">
            <ModalComp modalData={modalData} setModalData={setModalData} />

            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col ">
                <div className="grid gap-x-6 grid-cols-1 lg:grid-cols-4">
                  <div className="my-2 col-span-3">
                    <h1 className="">Title</h1>
                    <input
                      {...register("title", {
                        required: true,
                        value: comic.title,
                      })}
                      type={`text`}
                      name="title"
                      className=" bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      placeholder="Enter Title"
                    />
                  </div>
                  <div className="my-2 col-span-1">
                    <h1>Exclusivity</h1>
                    <select
                      {...register("exclusivity", { required: true })}
                      name="exclusivity"
                      required={true}
                      className="bg-zinc-700 w-full focus:border-zinc-700 border-none rounded-md"
                      id="exclusivity"
                    >
                      <option value={comic.exclusivity}>
                        {comic.exclusivity}
                      </option>
                      {exclusivityValue.map((exclusivity, index) => (
                        <option key={index} value={exclusivity}>
                          {exclusivity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="my-2">
                  <h1 className="">Synopsis</h1>
                  <input type="hidden" {...register("synopsis")} />
                  <ReactQuill
                    className="mt-2"
                    theme="snow"
                    value={synopsisValue}
                    onChange={setSynopsisValue}
                  />
                </div>

                <div className="my-2 border-t border-t-gray-600 flex mx-auto">
                  <div className={`mt-5 grid grid-cols-1 gap-2`}>
                    <div className="">
                      <Image
                        src={photo.imgSrc}
                        alt="Cover Art"
                        width={200}
                        height={280}
                        className="rounded-lg "
                      />
                    </div>
                    <label className="flex justify-center mb-2 px-4 transition bg-zinc-900 border-2 border-zinc-900 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-700 focus:outline-none">
                      <span className="flex items-center space-x-2 py-2 ">
                        <BsCloudUpload className="text-gray-500 text-xl" />
                        <span className="font-medium text-blue-600 hover:underline">
                          {" "}
                          Browse Files
                        </span>
                      </span>

                      <input
                        {...register("coverArt")}
                        type="file"
                        name="coverArt"
                        className="hidden"
                        accept=".jpg, .jpeg, .png"
                        onChange={onChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-row mx-auto bg-cyan-600 rounded-xl py-2 px-10">
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

export default EditIllustPage;

EditIllustPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

import { UnauthorizedPage, FileUpload, ModalComp } from "../../../Components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Spinner } from "flowbite-react";
import UserLayout from "../../Layout/UserLayout";
import getSelected from "../../api/Comic/getSelected";

export async function getServerSideProps(context) {
  const comic = await getSelected(context);
  return {
    props: {
      comic,
    },
  };
}

function ChapterAddPage({ comic }) {
  const [isSpin, setIsSpin] = useState(() => false);
  const [multipleImg, setMultipleImg] = useState([]);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    isOpen: false,
  });
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const formData = new FormData();
    const imgUrl = [];
    const page = [];
    setIsSpin(true);

    const chapNum = comic.chapters.find(
      (chap) => chap.chapNum === parseInt(data.chapNum)
    );

    if (chapNum) {
      setModalData({
        title: "Error",
        message: `Chapter ${data.chapNum} already exists`,
        isOpen: true,
      });
      return;
    } else {
      for (let i = 0; i < multipleImg.length; i++) {
        formData.append("upload_preset", "chapters-preset");
        formData.append(`file`, multipleImg[i].file);
        const chapterUrl = await fetch(
          `https://api.cloudinary.com/v1_1/boednocomic/image/upload `,
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());
        imgUrl.push(chapterUrl.secure_url);
        page.push(i + 1);
      }
      data.chapImg = imgUrl;
      data.pageNum = page;
      data.comicId = comic.id;
      const postChapter = await fetch("/api/Comic/postChapter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setTimeout(
            (window.location.href = `/follows/drafts/chapters/${comic.id}`),
            3000
          );
          setModalData({
            title: "Success",
            message: "Chapter has been added",
            isOpen: true,
          });
        } else {
          setModalData({
            title: "Error",
            message: "Something went wrong",
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
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <div className="my-2">
            <h1 className="text-2xl font-semibold">
              Add Chapter - {comic.title}
            </h1>
          </div>
          <div>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm font-bold tracking-wide">
                    Chapter Number
                    <span className="text-red-500 mx-2 font-medium">
                      {errors.chapNum && `${errors.chapNum.message}`}
                    </span>
                  </label>
                  <input
                    {...register("chapNum", {
                      required: {
                        value: true,
                        message: "Chapter Number is required",
                      },
                    })}
                    className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
                    type="number"
                  />
                </div>
                <div>
                  <div className="relative">
                    <label className="text-sm font-bold tracking-wide">
                      Chapter Title
                      <span className="text-red-500 mx-2 font-medium">
                        {errors.chapTitle && `${errors.chapTitle.message}`}
                      </span>
                    </label>
                    <input
                      {...register("chapTitle", {
                        required: {
                          value: true,
                          message: "Chapter Title is required",
                        },
                      })}
                      className=" bg-zinc-800 w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-cyan-500 rounded-md"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 multiple">
                <h1 className="font-semibold text-lg">
                  Pages -{" "}
                  <span className=" font-normal text-sm">
                    Please upload from last to first page order
                  </span>
                </h1>
                <FileUpload
                  files={multipleImg}
                  onupdatefiles={setMultipleImg}
                  allowMultiple={true}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  acceptedFileTypes={["image/*"]}
                  required
                />
              </div>
              <div className="flex flex-row mx-auto bg-cyan-600 rounded-xl py-2 px-10">
                <input
                  type="submit"
                  value={isSpin ? "Creating..." : "Create"}
                  className=" text-xl lg:text-2xl font-semibold uppercase cursor-pointer mx-auto"
                />
                {isSpin && <Spinner size="lg" color="purple" />}
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

export default ChapterAddPage;

ChapterAddPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

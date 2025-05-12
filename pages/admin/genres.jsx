import {
  TableComp,
  ModalComp,
  Confirm,
  UnauthorizedPage,
} from "../../Components";
import { useMemo, useState, useEffect } from "react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { createColumnHelper } from "@tanstack/react-table";
import { FaPlus } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import authOptions from "../api/Auth/[...nextauth]";
import getGenre from "../api/Comic/getGenre";
import UserLayout from "../Layout/UserLayout";
import Link from "next/link";

export async function getServerSideProps(context) {
  const genres = await getGenre();
  return {
    props: {
      genres,
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

export function FormComp({ setModalData, formData, setFormData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formData.data,
  });

  useEffect(() => {
    reset(formData.data);
  }, [formData.data]);

  function addSubmit(data) {
    const submitGenre = fetch("/api/Comic/postGenre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: "Genre has been added, please refresh the page",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Genre Already Exists",
        });
      }
    });
  }

  function editSubmit(data) {
    const updateGenre = fetch("/api/Comic/updateGenre", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: "Genre has been updated, please refresh the page",
        });
        setFormData({
          type: "add",
          data: {
            id: "",
            name: "",
          },
          label: "",
          message: "",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Genre Update Failed",
        });
      }
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(
          formData.type === "add" ? addSubmit : editSubmit
        )}
        className="flex"
      >
        <div className="flex flex-col">
          <label className="text-sm font-bold tracking-wide">
            {formData.label}
            <span className="text-red-500 mx-2 font-medium">
              {errors.name && `${errors.name.message}`}
            </span>
          </label>

          <input
            type="text"
            name="name"
            {...register("name", {
              value: formData.data.name,
              required: {
                value: true,
                message: "Genre is required",
              },
            })}
            className="h-8 outline-none bg-zinc-700 rounded-md border border-cyan-500 focus:border-cyan-500"
          />
        </div>
        <div className="flex">
          <button
            className="px-2 mx-2 mt-4 bg-cyan-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            className="px-2 mt-4 bg-red-500 rounded-md"
            type="button"
            onClick={() => setFormData({ isOpen: false })}
          >
            Dismiss
          </button>
        </div>
      </form>
    </>
  );
}

function GenresDashboard({ genres }) {
  const [formData, setFormData] = useState({
    isOpen: false,
    type: "",
    label: "",
    message: "",
    data: {},
  });

  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    type: "",
    name: "",
    id: "",
  });

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });
  const { data: session } = useSession();
  const columnHelper = createColumnHelper();

  const genresData = useMemo(
    () =>
      genres.map((item, index) => {
        return {
          index: index + 1,
          ...item,
        };
      }),
    [genres]
  );

  function addEvent() {
    setFormData({
      isOpen: !formData.isOpen,
      type: "add",
      label: "Add Genre",
      message: "Genre has been added",
      data: {},
    });
  }

  function editEvent(data) {
    setFormData({
      isOpen: true,
      type: "edit",
      label: "Edit Genre",
      message: "Genre has been updated",
      data: data,
    });
  }

  function delEvent(data) {
    setConfirmData({
      isOpen: true,
      type: "Genre",
      name: data.name,
      id: data.id,
    });
  }

  async function onSubmit() {
    const deleteGenre = await fetch("/api/Comic/delGenre", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: confirmData.id }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: "Genre has been successfully deleted ",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Genre Delete Failed",
        });
      }
    });
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor("index", {
        header: "Index",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("length", {
        header: "Comics",
        cell: (info) => <span>{info.row.original.comic.length}</span>,
      }),
      columnHelper.accessor("detail", {
        header: "Details",
        cell: (info) => (
          <Link href={`/admin/genres/${info.row.original.id}`}>
            <button className="bg-cyan-500 text-white px-2 py-1 rounded-md mr-2">
              Details
            </button>
          </Link>
        ),
      }),
      columnHelper.accessor("action", {
        header: "Action",
        cell: (info) => (
          <div className="grid grid-cols-2 text-center">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
              onClick={() => editEvent(info.row.original)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
              onClick={() => delEvent(info.row.original)}
            >
              Delete
            </button>
          </div>
        ),
      }),
    ],
    []
  );

  if (session) {
    if (session.user.role === "super") {
      return (
        <>
          {confirmData.isOpen && (
            <Confirm
              confirmData={confirmData}
              setConfirmData={setConfirmData}
              onSubmit={onSubmit}
            />
          )}
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          <div className="my-3 flex justify-between">
            <h1 className="text-2xl font-semibold">Genres List</h1>

            <div className="flex">
              <button
                className="flex bg-cyan-500 my-auto py-1 rounded-md mx-2"
                onClick={() => window.location.reload}
              >
                <BiRefresh className="my-auto mx-2 text-3xl" />
              </button>
              <button
                className="flex bg-cyan-500 my-auto p-2 rounded-md"
                onClick={() => addEvent()}
              >
                <FaPlus className="my-auto mx-2" />
                Add Genre
              </button>
            </div>
          </div>
          {formData.isOpen && (
            <div className="my-5">
              <FormComp
                modalData={modalData}
                setModalData={setModalData}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          )}
          <div className="flex rounded-lg shadow-md flex-col">
            <TableComp columns={columns} data={genresData} />
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

export default GenresDashboard;

GenresDashboard.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

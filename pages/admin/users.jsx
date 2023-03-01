import {
  UnauthorizedPage,
  TableComp,
  Confirm,
  ModalComp,
} from "../../Components";
import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import UserLayout from "../Layout/UserLayout";
import getAllUser from "../api/User/getAllUser";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export async function getServerSideProps(context) {
  const users = await getAllUser();
  return {
    props: {
      users: users,
    },
  };
}

function UserManagementPage({ users }) {
  const { data: session } = useSession();

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    type: "",
    name: "",
    id: "",
  });

  const usersData = useMemo(
    () =>
      users.map((item, index) => {
        return {
          index: index + 1,
          ...item,
        };
      }),
    [users]
  );
  function delEvent(data) {
    setConfirmData({
      isOpen: true,
      type: "User",
      name: data.name,
      id: data.id,
    });
  }

  async function onSubmit() {
    const delUser = await fetch("/api/User/delUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: confirmData.id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setModalData({
          isOpen: true,
          title: "Success",
          message: "User has been deleted",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setModalData({
          isOpen: true,
          title: "Error",
          message: "Failed to delete user",
        });
      }
    });
  }

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("index", {
        header: "Index",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => <span>{info.getValue()}</span>,
      }),
      columnHelper.accessor("role", {
        header: "Role",
        cell: (info) => {
          if (info.getValue() === "admin") {
            return <span>Admin</span>;
          } else if (info.getValue() === "super") {
            return <span>Super Admin</span>;
          } else {
            return <span>User</span>;
          }
        },
      }),
      columnHelper.accessor("createdAt", {
        header: "Created At",
        cell: (info) => (
          <span>
            {moment(info.getValue()).format("DD MMMM YYYY, h:mm:ss a")}
          </span>
        ),
      }),

      columnHelper.accessor("action", {
        header: "Action",
        cell: (info) => (
          <div className="grid grid-cols-2 text-center">
            <Link href={`/admin/user/edit/${info.row.original.id}`}>
              <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                Edit
              </button>
            </Link>
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
          {modalData.isOpen && (
            <ModalComp modalData={modalData} setModalData={setModalData} />
          )}
          {confirmData.isOpen && (
            <Confirm
              confirmData={confirmData}
              setConfirmData={setConfirmData}
              onSubmit={onSubmit}
            />
          )}
          <div className="flex justify-between my-2">
            <h1 className="text-2xl font-semibold mb-2">User Data</h1>
            <Link href={`/admin/user/newUser`}>
              <button className="flex bg-cyan-500 my-auto p-2 rounded-md text-lg">
                <FaPlus className="my-auto mx-2" />
                Add User
              </button>
            </Link>
          </div>
          <TableComp columns={columns} data={usersData} />
        </>
      );
    } else {
      return <UnauthorizedPage />;
    }
  } else {
    return <UnauthorizedPage />;
  }
}

export default UserManagementPage;

UserManagementPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

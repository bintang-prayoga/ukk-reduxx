import { Avatar } from "flowbite-react";
import parse from "html-react-parser";
import moment from "moment-timezone";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function CommentCard({ comment, userSession, setModalData }) {
  const [screenWidth, setScreenWidth] = useState(null);
  const [isClient, setIsClient] = useState(false); // flag untuk mencegah SSR hydration mismatch

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this comment?")) {
      return;
    }
    try {
      const delComment = await fetch("/api/Comic/delComment", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          commentId: comment.id,
        }),
      }).then((res) => {
        if (res.status === 200) {
          setModalData({
            isOpen: true,
            title: "Success",
            message: "Comment has been successfully deleted",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          setModalData({
            isOpen: true,
            title: "Error",
            message: "Comment delete failed",
          });
        }
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
      setModalData({
        isOpen: true,
        title: "Error",
        message: "Comment delete failed",
      });
    }
  };

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Set awal
    window.addEventListener("resize", handleResize);
    console.log("Session Data in comment card:", userSession);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sembunyikan saat masih SSR
  if (!isClient) return null;

  if (comment.user.role === "super") {
  }

  const avatarSize = screenWidth <= 1024 ? "md" : "lg";

  return (
    <div className="grid grid-cols-4 gap-1">
      <div className="col-span-2 lg:col-span-1 p-4 rounded-lg lg:shadow-md text-center flex lg:justify-center">
        <div>
          {comment.user.image ? (
            <Avatar size={avatarSize} img={comment.user.image} rounded />
          ) : (
            <Avatar size={avatarSize} rounded />
          )}
        </div>
        <div>
          <h2 className="text-md lg:text-xl font-bold mx-4">
            {comment.user.name}
          </h2>
          <p className="text-gray-400 text-sm">{comment.user.role}</p>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-3 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            {moment(comment.createdAt).format("DD MMM YYYY")}
          </p>
          <div className="flex justify-center">
            {userSession === comment.user.id && (
              <>
                <button
                  className="text-gray-300 hover:text-red-500 rounded px-2 py-2 text-sm"
                  onClick={handleDelete}
                >
                  <FaTrash />
                </button>
              </>
            )}
          </div>
        </div>
        <div id="line" className="border-b border-b-cyan-500 my-1"></div>
        <div className="text-gray-100 my-1">{parse(comment.content)}</div>
      </div>
    </div>
  );
}

export default CommentCard;

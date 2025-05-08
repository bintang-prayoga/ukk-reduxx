import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserLayout from "../../Layout/UserLayout";
import getComment from "../../api/Comic/getComment";
import CommentCard from "../../../Components/CommentCard";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ModalComp } from "../../../Components";

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1;
  const limit = 5;

  const commentData = await getComment(context, page, limit);

  return {
    props: {
      comment: commentData.comments,
      comic: commentData.comic,
      page,
      totalPages: commentData.totalPages,
    },
  };
}

function CommentPage({ comment, comic, page, totalPages }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    content: "",
    sessionId: session?.user.id,
    comicId: comic?.id,
  });

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (session?.user?.id) {
      setFormData((prev) => ({
        ...prev,
        sessionId: session.user.id,
      }));
    }
  }, [session]);

  const handlePageChange = (newPage) => {
    router.push({
      pathname: `/titles/${slug}/comment`,
      query: { page: newPage },
    });
  };

  function isContentEmpty(html) {
    if (typeof window === "undefined") return true; // Cegah error saat SSR

    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent.trim() === "";
  }

  const handlePostComment = async () => {
    if (isContentEmpty(formData.content)) {
      alert("Comment cannot be empty.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/Comic/postComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.status === 200) {
          setModalData({
            isOpen: true,
            title: "Success",
            message: "Comment has been successfully posted",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          setModalData({
            isOpen: true,
            title: "Error",
            message: "Comment post failed",
          });
        }
      });
    } catch (error) {
      console.error("Error posting comment:", error);
      setModalData({
        isOpen: true,
        title: "Error",
        message: "Comment post failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {modalData.isOpen && (
        <ModalComp modalData={modalData} setModalData={setModalData} />
      )}

      <div className="flex items-center justify-between p-4 rounded-lg shadow-md mb-4">
        <div>
          <h1 className="text-2xl font-bold">{comic?.title}</h1>
          <p className="text-gray-400">Comment Section</p>
        </div>
        <div>
          <button className="text-gray-300 hover:text-cyan-700 bg-gray-700 hover:bg-gray-600 rounded px-4 py-2 flex justify-between">
            <FaArrowLeft className="mt-1 mr-3" />
            {comic?.type === "Comic" ? (
              <Link href={`/titles/${slug}`}>Back to Comic</Link>
            ) : (
              <Link href={`/titles/${slug}`}>Back to Illustration</Link>
            )}
          </button>
        </div>
      </div>

      {comment?.length > 0 ? (
        comment.map((item, key) => (
          <CommentCard
            setModalData={setModalData}
            userSession={session?.user.id}
            comment={item}
            key={key}
          />
        ))
      ) : (
        <p className="text-gray-300 text-center my-6">No comments found.</p>
      )}

      <div className="my-6">
        <h2 className="text-xl font-semibold text-white mb-2">Add a Comment</h2>
        <ReactQuill
          className="bg-white text-black"
          theme="snow"
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <button
          onClick={handlePostComment}
          disabled={isContentEmpty(formData.content)}
          className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-40"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 bg-gray-700 rounded text-white disabled:opacity-40"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <span className="text-white">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-700 rounded text-white disabled:opacity-40"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CommentPage;

CommentPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

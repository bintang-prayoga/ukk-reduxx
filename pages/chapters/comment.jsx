import { Avatar } from "flowbite-react";
import { useState } from "react";
import UserLayout from "../Layout/UserLayout";

function CommentPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return <div></div>;
}

export default CommentPage;

CommentPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

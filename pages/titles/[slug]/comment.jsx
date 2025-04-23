import { useRouter } from "next/router";
import UserLayout from "../../Layout/UserLayout";
import getComment from "../../api/Comic/getComment";

export async function getServerSideProps(context) {
  const comment = await getComment(context);

  return {
    props: {
      comment: comment,
    },
  };
}
function CommentPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        {/* User profile details go here */}
        <p>User profile information for {slug}</p>
      </div>
      <div className="col-span-3 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {/* Comment section goes here */}
        <p>Comments for {slug}</p>
      </div>
    </div>
  );
}

export default CommentPage;

CommentPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};

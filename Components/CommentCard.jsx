function CommentCard({ comment }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4"></h2>
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

export default CommentCard;

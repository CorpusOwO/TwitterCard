import UserPic from "../users/UserPic";

const CommentPost = () => {
  return (
    <div className="w-full h-auto">
      <div>
        <UserPic />
      </div>
      <div>
        <input
          type="text"
          placeholder="Post your reply!"
          className="bg-transparent border-none active:border-none text-white text-xl w-full outline-none"
        />
      </div>
    </div>
  );
};

export default CommentPost;

import SmallUserProfile from "../users/SmallUserProfile";
import PostActions from "./PostActions";
import PostMedia from "./PostMedia";

function PostCard() {
  return (
    <>
      <div className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-800  p-4 max-w-xl">
        <SmallUserProfile />
        <PostMedia />
        <PostActions />
      </div>
    </>
  );
}

export default PostCard;

import SmallUserProfile from "../users/SmallUserProfile";
import CommentPost from "./CommentPost";
import PostDescription from "./PostDescription";
import RepliyingTo from "./RepliyingTo";
import ReplyActions from "./ReplyActions";

function CommetingPost() {
  return (
    <div className=" fixed flex justify-center  bg-slate-500/30 w-screen h-screen inset-0 z-20 pt-11">
      <section className="w-[33%] rounded-2xl h-96 p-5 bg-black ">
        <SmallUserProfile />
        <PostDescription />
        <RepliyingTo />
        <CommentPost />
        <ReplyActions />
      </section>
    </div>
  );
}

export default CommetingPost;

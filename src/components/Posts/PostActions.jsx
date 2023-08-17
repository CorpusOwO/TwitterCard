import { FaRetweet, FaChartSimple, FaUpload, FaHeart } from "react-icons/fa6";
import { BsChat, BsSuitHeart } from "react-icons/bs";
import { useState } from "react";
import CommetingPost from "./CommetingPost";

function PostActions({ likes = 100 }) {
  const [isLiked, SetIsLiked] = useState(false);
  const [like, setLike] = useState(likes);
  const [isRepliying, setIsRepliying] = useState(false);

  if (isRepliying) {
    return <CommetingPost />;
  }
  return (
    <div className="text-gray-500 dark:text-gray-400 flex mt-3 justify-around ">
      <div
        className="flex items-center mr-6 group hover:cursor-pointer"
        onClick={() => setIsRepliying(true)}
      >
        <span className="p-2 rounded-3xl group-hover:bg-[#1d9cf025] transition ease-in-out delay-[35ms]">
          <BsChat />
        </span>
        <span className="ml-2 group-hover:text-[#1d9bf0] transition ease-in-out delay-[35ms]">
          615
        </span>
      </div>

      <div className="flex items-center mr-6 group hover:cursor-pointer">
        <span className=" p-2 rounded-3xl group-hover:bg-[#00ba7c67] transition ease-in-out delay-[35ms]">
          <FaRetweet />
        </span>
        <span className="ml-2 group-hover:text-[#00ba7c] transition ease-in-out delay-[35ms] ">
          93
        </span>
      </div>

      <div
        className="flex items-center mr-6 group hover:cursor-pointer"
        onClick={() => {
          SetIsLiked(isLiked ? false : true);
          isLiked ? setLike((like) => like - 1) : setLike((like) => like + 1);
        }}
      >
        <span className=" p-2 rounded-3xl group-hover:bg-[#e6177870] transition ease-in-out delay-[35ms]">
          {isLiked ? <FaHeart color="#e61777" /> : <BsSuitHeart />}
        </span>
        <span className="ml-2 group-hover:text-[#e61777] transition ease-in-out delay-[35ms]">
          {like}
        </span>
      </div>

      <div className="flex items-center mr-6 group hover:cursor-pointer">
        <span className=" p-2 rounded-3xl group-hover:bg-[#1d9cf025] transition ease-in-out delay-[35ms]">
          <FaChartSimple />
        </span>
        <span className="ml-2 group-hover:text-[#1d9bf0] transition ease-in-out delay-[35ms]">
          214
        </span>
      </div>

      <div className="flex items-center mr-6 group hover:cursor-pointer">
        <span className="p-2 rounded-3xl group-hover:bg-[#1d9cf025] transition ease-in-out delay-[30ms]">
          <FaUpload />
        </span>
      </div>
    </div>
  );
}

export default PostActions;

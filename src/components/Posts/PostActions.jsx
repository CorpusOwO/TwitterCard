import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaChartSimple,
  FaUpload,
} from "react-icons/fa6";
function PostActions() {
  return (
    <div className="text-gray-500 dark:text-gray-400 flex mt-3 justify-around ">
      <div className="flex items-center mr-6 group hover:cursor-pointer ">
        <span className="p-2 rounded-3xl group-hover:bg-[#1d9cf025] transition ease-in-out delay-[35ms]">
          <FaComment className="group-hover:[#1d9cf025]" />
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

      <div className="flex items-center mr-6 group hover:cursor-pointer">
        <span className=" p-2 rounded-3xl group-hover:bg-[#e6177870] transition ease-in-out delay-[35ms]">
          <FaHeart />
        </span>
        <span className="ml-2 group-hover:text-[#e61777] transition ease-in-out delay-[35ms]">
          103
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

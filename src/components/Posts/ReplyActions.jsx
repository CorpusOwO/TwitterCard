import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
function ReplyActions() {
  return (
    <div className="w-full h-20 flex justify-between ">
      <div className="w-1/3 flex">
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <BsCardImage color="#1d9bf0" />
          </span>
        </div>
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <AiOutlineFileGif color="#1d9bf0" />
          </span>
        </div>
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <CgOptions color="#1d9bf0" />
          </span>
        </div>
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <BsEmojiSmile color="#1d9bf0" />
          </span>
        </div>
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <TbCalendarTime color="#1d9bf0" />
          </span>
        </div>
        <div className="mr-5 group hover:cursor-pointer ">
          <span>
            <IoLocationOutline color="#1d9bf0" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReplyActions;

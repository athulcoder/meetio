import { div } from "framer-motion/client";
import React from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { LuSend, LuUpload } from "react-icons/lu";

const LikeCommentPart = ({ props }) => {
  return (
    <div className="flex justify-between  items-center h-[30px]  py-2 px-3">
      <div className="flex justify-start  gap-3">
        {/* LIKE */}
        <p className="flex gap-1 items-center justify-center text-sm">
          <FaRegHeart size={18} className="cursor-pointer" /> 1.4M
        </p>

        <p className="flex gap-1 items-center justify-center text-sm">
          <FaRegComment size={18} className="cursor-pointer" /> 24.3k
        </p>

        <p className="flex gap-1 items-center justify-center text-sm">
          <LuSend size={18} className="cursor-pointer" /> 14.5k
        </p>
      </div>

      <p>
        <IoShareOutline size={18} className="cursor-pointer" />
      </p>
    </div>
  );
};

export default LikeCommentPart;

import Image from "next/image";
import React from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
const ProfilePart = () => {
  return (
    <div className="w-full h-[50px] flex justify-between p-2 items-center">
      {/* LEFT */}
      <div className="flex gap-3  ">
        <div className="h-[40px] w-[40px] border-2 border-blue-400 rounded-full overflow-hidden ">
          <Image
            src={"/sample_dp.png"}
            height={80}
            width={80}
            alt="sample"
            className="rounded-full p-[.1px]"
          />
        </div>
        <div className="flex flex-col gap">
          <p className="text-sm text-prim-text font-semibold flex gap-1 justify-center items-center">
            forrest_gump <HiStar className="text-pink-500 mt-1" />
          </p>
          <p className="text-[12px] text-prim-text font-light font-sans">
            forrest_gump
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex gap-2 justify-center items-center">
        {/* FOllow BUTTON */}
        <button className="bg-primary-blue px-3 py-1 rounded-xl text-bluish-white text-sm w-[70px] h-[30px]">
          Follow
        </button>

        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default ProfilePart;

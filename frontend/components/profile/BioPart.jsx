import Image from "next/image";
import React from "react";
import { BiShare } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";

const BioPart = () => {
  return (
    <div className=" bg-background min-h-fit">
      <div className="flex items-center justify-start gap-10 py-4">
        <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center">
          <Image
            src={"/sample_post.png"}
            width={300}
            alt="dp"
            height={300}
            className="h-[90px] w-[90px] rounded-full p-[2px]"
          />
        </div>

        {/* COUNTS */}

        <div className="">
          <h1 className="text-md font-semibold">Forrest Gump</h1>
          <div className="flex gap-6 ">
            {/* POST COUNT */}
            <div className="flex flex-col  items-start ">
              12
              <p className="text-sm">posts</p>
            </div>

            {/* FOllowers */}

            <div className="flex flex-col  items-start ">
              1200
              <p className="text-sm">followers</p>
            </div>

            {/* FOllowing*/}

            <div className="flex flex-col justify-center items-start">
              1200
              <p className="text-sm">following</p>
            </div>
          </div>
        </div>
      </div>

      <p className="px-4 text-[13px] font-medium text-prim-text w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolore
      </p>

      <div className="flex w-full gap-5 my-6">
        <button className="flex-2 bg-primary-blue text-lg max-w-[200px] text-white rounded-xl px-3 py-1 h-[34px] cursor-pointer">
          Follow
        </button>
        <button className="flex-2 bg-secondary-w max-w-[200px]  rounded-xl px-3 py-1 h-[34px] cursor-pointer">
          Message
        </button>
        <button className="flex-[0.5] bg-secondary-w max-w-[50px] rounded-xl flex justify-center items-center  cursor-pointer">
          <CiShare2 size={20} className=" " />
        </button>
      </div>

      {/*  */}

      <hr className="w-full border-[0.5px] border-[#d6d6d6]" />
    </div>
  );
};

export default BioPart;

import Image from "next/image";
import React from "react";

const BioPart = () => {
  return (
    <div className="flex bg-background min-h-fit items-center justify-start gap-10 py-4">
      <div className="h-[90px] w-[90px] bg-white rounded-full flex justify-center items-center">
        <Image
          src={"/sample_post.png"}
          width={300}
          alt="dp"
          height={300}
          className="h-[90px] w-[90px] rounded-full p-[1px]"
        />
      </div>

      {/* COUNTS */}

      <div className="flex gap-6 ">
        {/* FOllowers */}

        <div className="flex flex-col justify-center items-center ">
          1200
          <p>Followers</p>
        </div>

        {/* FOllowing*/}

        <div className="flex flex-col justify-center items-center">
          1200
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default BioPart;

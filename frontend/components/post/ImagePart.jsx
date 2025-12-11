import Image from "next/image";
import React from "react";

const ImagePart = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 right-4 h-[30px] bg-black/60 bg-o rounded-2xl p-2 flex justify-center items-center text-bluish-white">
        <p className="text-sm   text-white">1/2</p>
      </div>
      <Image
        src={"/sample_post.jpeg"}
        height={400}
        width={500}
        quality={100}
        alt="sample_Post"
        className=" h-full w-full"
      />
    </div>
  );
};

export default ImagePart;

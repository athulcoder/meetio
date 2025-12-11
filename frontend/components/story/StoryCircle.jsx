import Image from "next/image";
import React from "react";

const StoryCircle = ({ props }) => {
  console.log(props.username);
  return (
    <div className="min-w-[70px] min-h-[70px] bg-bluish-white rounded-full overflow-hidden border-2 border-blue-900">
      <Image
        src={props.img}
        alt={props.username}
        height={90}
        width={90}
      ></Image>
    </div>
  );
};

export default StoryCircle;

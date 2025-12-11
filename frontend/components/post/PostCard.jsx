import React from "react";
import ProfilePart from "./ProfilePart";
import ImagePart from "./ImagePart";
import LikeCommentPart from "./LikeCommentPart";
import CaptionPart from "./CaptionPart";

const PostCard = () => {
  return (
    <>
      <div className="bg-bluish-white w-full max-w-[500px] h-fit  ">
        <ProfilePart />
        <ImagePart />
        <LikeCommentPart />
        <CaptionPart />
      </div>
    </>
  );
};

export default PostCard;

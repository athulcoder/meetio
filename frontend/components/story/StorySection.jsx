import React from "react";
import StoryCircle from "./StoryCircle";
import { STORIES } from "@/constants/StorySample";

const StorySection = () => {
  return (
    <div className=" bg-background h-[90px]  gap-5 overflow-x-auto flex items-center no-scrollbar px-3 ">
      {STORIES.map((person, index) => {
        return <StoryCircle props={person} key={index} />;
      })}
    </div>
  );
};

export default StorySection;

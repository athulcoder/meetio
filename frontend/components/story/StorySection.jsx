import React from "react";
import StoryCircle from "./StoryCircle";
import { STORIES } from "@/constants/StorySample";

const StorySection = () => {
  return (
    <div className=" bg-background h-[90px]  gap-6 overflow-x-auto flex items-center no-scrollbar  pl-3 pr-4 ">
      {STORIES.map((person, index) => {
        return <StoryCircle props={person} key={index} />;
      })}
    </div>
  );
};

export default StorySection;

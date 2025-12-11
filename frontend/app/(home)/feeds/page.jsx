import PostCard from "@/components/post/PostCard";
import StorySection from "@/components/story/StorySection";

import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const FeedPage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto pb-30 ">
      {/* TITLE SECTION */}

      <div className="min-md:hidden w-full h-[30px] px-3 flex justify-between items-center">
        <h1 className="flex items-center justify-start font-kumbh text-primary-blue text-xl ">
          MEETIO
        </h1>

        <IoNotificationsOutline size={26} className=" cursor-pointer" />
      </div>
      {/* Story section */}
      <StorySection />
      <hr className="border-[0.2px] border-[#c7c7c7]" />

      <div className="w-full flex flex-col items-center min-md:ml-10 min-md:items-start ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

export default FeedPage;

import PostCard from "@/components/post/PostCard";
import StorySection from "@/components/story/StorySection";

import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const FeedPage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto pb-30  no-scrollbar">
      {/* TITLE SECTION */}

      <div className="min-md:hidden w-full h-[30px] px-3 py-4 mt-2 flex justify-between items-center">
        <h1 className="flex items-center justify-start font-kumbh text-primary-blue text-4xl ">
          MEETIO
        </h1>

        <IoNotificationsOutline size={26} className=" cursor-pointer" />
      </div>
      {/* Story section */}

      <StorySection />

      <hr className="border-[1px] border-[#dedddd]" />

      <div className="flex flex-col gap-5 justify-center min-md:px-10 ">
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

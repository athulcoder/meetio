import PostCard from "@/components/post/PostCard";
import StorySection from "@/components/story/StorySection";

import React from "react";

const FeedPage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto  ">
      {/* Story section */}
      <StorySection />
      <hr className="border-[0.2px] border-[#c7c7c7]" />

      <div className="flex items-center min-md:items-start min-md:ml-10    flex-col w-full">
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

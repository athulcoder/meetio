import PostCard from "@/components/post/PostCard";
import StorySection from "@/components/story/StorySection";

import React from "react";

const FeedPage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto   ">
      {/* Story section */}
      <StorySection />
      <hr className="border-[0.2px] border-[#c7c7c7]" />

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />

      <div className="w-full bg-bluish-white  h-[80px]"></div>
    </section>
  );
};

export default FeedPage;

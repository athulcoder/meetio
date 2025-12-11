import StorySection from "@/components/story/StorySection";

import React from "react";

const FeedPage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto ">
      {/* Story section */}
      <StorySection />

      <div className="w-full bg-bluish-white  h-[80px]"></div>
    </section>
  );
};

export default FeedPage;

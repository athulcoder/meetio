import BioPart from "@/components/profile/BioPart";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <section className="bg-background h-screen w-full  overflow-y-auto pb-30  p-3">
      {/* PROF */}
      <BioPart />
    </section>
  );
};

export default ProfilePage;

import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const isLoggedIn = true;

  if (isLoggedIn) redirect("/feeds");
  return (
    <div className="bg-blue-600">
      THIS is were all starts (this page is under contruction please for for
      rotues like feeds messages , profile , search , settings etc)
    </div>
  );
};

export default page;

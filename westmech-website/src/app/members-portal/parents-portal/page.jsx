import React from "react";
import TitleView from "@/components/members-portal/TitleView";
import SignIn from "@/components/members-portal/SignIn";

const page = () => {
  const bg = "#F4F4F6";

  return (
    <main
      style={{ backgroundColor: bg }}
      className="sm:min-h-screen w-screen flex flex-col sm:flex-row"
    >
      <TitleView user="parent" title="PARENTS PORTAL" logo="/login/person.svg"></TitleView>
      <div
        style={{ backgroundColor: bg }}
        className="mt-8 mb-16 sm:mt-4 sm:mb-8 sm:h-screen flex items-center justify-center sm:w-1/2"
      >
        <SignIn colour="#017FE0" user="parent"></SignIn>
      </div>
    </main>
  );
};

export default page;

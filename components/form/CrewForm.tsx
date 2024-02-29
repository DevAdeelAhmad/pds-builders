import React from "react";
import Form from "./Form";

const CrewForm = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-1 gap-x-20 lg:gap-x-32 items-center gap-y-6 justify-evenly  px-3 md:px-10">
      <div className="flex flex-col text-center md:flex-[0.5] items-center justify-center text-3xl md:text-4xl lg:text-7xl font-extrabold">
        <span className="">Talk To</span>
        <span className="">The Crew </span>
        <span className="text-yellow-500">Today!</span>
      </div>
      <div className=" w-full md:flex-[0.5] lg:flex-[0.3]">
        <Form />
      </div>
    </section>
  );
};

export default CrewForm;

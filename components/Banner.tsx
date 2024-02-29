import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-yellow-400 justify-evenly py-16">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <span className="text-white text-3xl font-bold">20+</span>
        <span className="text-white text-2xl font-bold">
          Years of Experience
        </span>
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <span className="text-white text-3xl font-bold">40+</span>
        <span className="text-white text-2xl font-bold">
          Construction Sites
        </span>
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <span className="text-white text-3xl font-bold">#1</span>
        <span className="text-white text-2xl font-bold">Top Tier Work</span>
      </div>
    </section>
  );
};

export default Banner;

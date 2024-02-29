import React from "react";
import { Button } from "./ui/button";
import projectTwo from "@/public/assets/projects/project-two.png";
import Image from "next/image";

const HomeBuilds = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-16 px-3 md:px-10 lg:px-16">
      <span className="font-extrabold text-5xl md:text-7xl text-center">
        New Home Builds
      </span>
      <div className="flex flex-col lg:flex-row md:flex-1 gap-x-20 justify-center items-center gap-y-6">
        <Image
          src={projectTwo}
          alt="project-one"
          width={1000}
          height={1000}
          className="md:flex-[0.35] aspect-video rounded-xl"
        />
        <div className="flex flex-col md:flex-[0.5] gap-y-6 md:gap-y-12 justify-center items-start">
          <span className="font-extrabold text-3xl md:text-5xl text-center">
            Tailored to your needs
          </span>
          <span className=" text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            animi saepe, odio consectetur itaque hic nihil, exercitationem
            voluptatem rerum, quisquam repellendus voluptates! Aut id nam
            consectetur aliquid officia, quae deleniti!
          </span>
          <Button className="w-60 h-14 md:font-bold text-lg md:text-xl">
          Contact us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeBuilds;

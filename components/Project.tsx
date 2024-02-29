import Image from "next/image";
import React from "react";
import projectOne from "@/public/assets/projects/project-one.png";
import projectTwo from "@/public/assets/projects/project-two.png";
import { Button } from "./ui/button";

const Project = () => {
  return (
    <section className="flex flex-col px-3 md:px-10 lg:px-16 gap-y-20">
      {/* div 1 */}
      <div className="flex flex-col md:flex-row md:flex-1 gap-x-20 justify-center items-center gap-y-6">
        <Image
          src={projectOne}
          alt="project-one"
          width={1000}
          height={1000}
          className="md:flex-[0.5] w-full md:w-[300px] h-[300px] md:h-[500px] "
        />

        <div className="flex flex-col md:flex-[0.5] gap-y-6 md:gap-y-12 justify-start">
          <span className="font-extrabold text-3xl md:text-5xl ">
            Builders Project
          </span>
          <span className=" text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            animi saepe, odio consectetur itaque hic nihil, exercitationem
            voluptatem rerum, quisquam repellendus voluptates! Aut id nam
            consectetur aliquid officia, quae deleniti!
          </span>
          <Button className="w-48 h-14 font-bold text-lg md:text-xl">
            View more
          </Button>
        </div>
      </div>
      {/* div 2 */}
      <div className="flex flex-col md:flex-row md:flex-1 gap-x-20 justify-center items-center gap-y-6">
        <div className="flex flex-col md:flex-[0.5] gap-y-6 md:gap-y-12 justify-start">
          <span className="font-extrabold text-3xl md:text-5xl ">
            What We Do
          </span>
          <span className=" text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            animi saepe, odio consectetur itaque hic nihil, exercitationem
            voluptatem rerum, quisquam repellendus voluptates! Aut id nam
            consectetur aliquid officia, quae deleniti!
          </span>
          <Button className="w-48 h-14 font-bold text-lg md:text-xl">
            View more
          </Button>
        </div>
        <Image
          src={projectTwo}
          alt="project-one"
          width={1000}
          height={1000}
          className="md:flex-[0.5] w-full md:w-[300px] h-[300px] md:h-[500px] "
        />
      </div>
    </section>
  );
};

export default Project;

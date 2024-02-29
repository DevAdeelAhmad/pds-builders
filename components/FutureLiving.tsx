import React from "react";
import { Button } from "./ui/button";
import projectTwo from "@/public/assets/projects/project-two.png";
import Image from "next/image";

const FutureLiving = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-16 px-3 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row md:flex-1 gap-x-20 justify-center items-center gap-y-6 ">
        <div className="flex flex-col md:flex-[0.5] gap-y-6 md:gap-y-12 justify-center items-start">
          <span className="font-extrabold text-3xl md:text-5xl ">
            Future-Forward Living
          </span>
          <span className="text-lg md:text-xl">
            From the initial idea to the last details, our local builders are
            committed to making sure that every part of your project is handled
            with care and accuracy. We take charge right away, offering careful
            planning and using top-notch materials to ensure that you achieve
            your dream home.
          </span>
          <Button className="w-60 h-14 md:font-bold text-lg md:text-xl">
            Contact us Today
          </Button>
        </div>
        <Image
          src={projectTwo}
          alt="project-one"
          width={1000}
          height={1000}
          className="md:flex-[0.34] aspect-video rounded-xl "
        />
      </div>
    </section>
  );
};

export default FutureLiving;

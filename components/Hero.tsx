import Image from "next/image";
import React from "react";
import hero from "@/public/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      <Image
        src={hero}
        alt=""
        width={1000}
        height={1000}
        className=" h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] w-screen relative"
      />
      <div className="md:absolute bottom-10 left-4 flex gap-x-6 justify-center items-center flex-wrap py-4 gap-y-4 px-4 ">
        <div className="aspect-square px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span>Certification</span>
        </div>
        <div className="aspect-square px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span>Certification</span>
        </div>{" "}
        <div className="aspect-square px-4 bg-white rounded-2xl shadow-md flex text-center justify-center items-center font-bold">
          <span>Certification</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import serviceOne from "@/public/assets/service-one.png";
import serviceTwo from "@/public/assets/service-two.png";
import serviceThree from "@/public/assets/service-three.png";

const Services = () => {
  return (
    <section className=" px-3 md:px-10 lg:px-16 flex flex-col gap-y-4 ">
      <span className="flex text-center items-center justify-center text-3xl font-bold gap-y-6">
        Our Services
      </span>

      <div className="flex flex-col items-center justify-center relative">
        <Image
          src={serviceOne}
          alt=""
          width={1000}
          height={1000}
          className="h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-screen"
        />
        <span className="absolute inset-0 flex items-center justify-center font-bold text-center text-white">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            New Home Builds
          </span>
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-8 pt-4 relative">
        <Image
          src={serviceTwo}
          alt=""
          width={1000}
          height={1000}
          className="h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-screen"
        />
        <span className="absolute inset-0 flex items-center justify-center font-bold text-center text-white">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            New Home Builds
          </span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8 pt-4 relative">
        <Image
          src={serviceThree}
          alt=""
          width={1000}
          height={1000}
          className="h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-screen"
        />
        <span className="absolute inset-0 flex items-center justify-center font-bold text-center text-white">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            New Home Builds
          </span>
        </span>
      </div>
    </section>
  );
};

export default Services;

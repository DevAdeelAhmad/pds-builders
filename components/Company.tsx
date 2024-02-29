import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-24 px-3 md:px-10 lg:px-16">
      <span className="text-4xl md:text-7xl text-center font-extrabold">
        Who is Company
      </span>
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-20  xl:gap-x-40 ">
        <Image
          src="/assets/projects/project-two.png"
          alt=""
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-y-16 lg:px-20">
          <div className="flex flex-col gap-y-3">
            <span className="text-4xl font-bold">Peter Smith</span>
            <span className="text-2xl font-semibold">Directing Manager</span>
          </div>
          <span className="text-lg">
            This company was started by Peter Shaw in 2003. For the past 20
            years, Peter has gotten all of our business for PDS through
            word-of-mouth. PDS has the best subcontractors in all of Hamilton.
            Peter has made sure his team understand the importance of quality,
            accuracy and transparency.
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-10">
        <span className="text-lg flex-[0.3] pr-5">
          Our team can cover all of your building needs. From adding extra space
          to transforming your home completely, we ve got you covered. We have
          been operating for over 20 years in this industry and have learned a
          lot along the way. We have mastered our skills in this industry to
          provide you with the best results.
        </span>
        <div className=" flex-[0.7] overflow-hidden">
          <Image
            src="/assets/image1.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Company;

import React from "react";
import invest from "@/public/assets/invest/invest.png";
import Image from "next/image";
import { Button } from "./ui/button";

const InvestWisely = () => {
  return (
    <section className="flex flex-col px-3 md:px-10 lg:px-16 gap-y-7">
      <div className="flex flex-col max-w-5xl gap-y-2">
        <span className="font-bold text-4xl">Invest Wisely</span>
        <span className="">
          A new build s process usually includes a final walkthrough during the
          handover, regular inspections to ensure safety, early planning and
          design discussions with architects, getting necessary permits and
          approvals, the construction phase covering various stages from
          foundation to finishes, and often a warranty period post-move-in where
          the builder addresses any potential issues.
        </span>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row gap-y-14">
        <div className="flex-[0.7] overflow-hidden">
          <Image
            src={invest}
            alt="invest"
            width={1000}
            height={1000}
            className="md:h-screen"
          />
        </div>
        <div className="flex flex-col gapy-10 gap-y-14 flex-[0.3] px-5">
          {/* div 1 */}
          <div className="flex flex-col gap-y-4 ">
            <span>
              From selecting finishes and layouts to sometimes influencing
              architectural features, customisation allows you to create a home
              that reflects your style and meets specific functional needs.
            </span>
            <span className="text-xl font-bold">PDS, The Team For You.</span>
            <span>
              By choosing PDS Construction, you are putting your project in the
              hands of a team with a strong track record of excellence, honesty,
              and dedication to understanding your vision.
            </span>
          </div>
          <Button className="w-60 h-14 md:font-bold rounded-xl text-lg md:text-xl">
            Contact us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestWisely;

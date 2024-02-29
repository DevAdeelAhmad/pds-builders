import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderData } from "@/constants/SliderData";
import Image from "next/image";
import { Button } from "./ui/button";


const Slider = () => {
  return (
    <section className="flex items-center justify-center px-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full md:max-w-[1636px]"
      >
        <CarouselContent>
          {sliderData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col justify-center items-center gap-y-3 text-center">
                      <Image
                        src={item.picture}
                        alt="pic"
                        width={1000}
                        height={1000}
                        className="w-[400px] rounded-xl"
                      />
                      <span className="font-bold text-=lg lg:text-xl xl:text-3xl">{item.heading}</span>
                      <span className="text-xs md:text-sm lg:text-base">{item.description}</span>
                      <Button className="rounded-full text-base lg:text-xl px-12 py-6">
                        {item.button}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Slider;

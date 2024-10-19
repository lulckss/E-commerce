"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const banners = [
  { img: "/imgs/Allmart.png" },
  { img: "/imgs/Smartwatch.png" },
  { img: "/imgs/Smartphone.png" },
];

const SectionCarousel = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-[1200px] h-[280px] sm:h-[220px] md:h-[250px] lg:h-[300px] xl:h-[316px] items-center justify-center mx-auto"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-yellow-100">
                  <CardContent className="relative flex items-center justify-center p-4 content-center w-full max-w-[1200px] h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] xl:h-[316px]">
                    {banners[index] && (
                      <Image
                        width={1200}
                        height={316}
                        src={banner.img}
                        alt="Allmart"
                        className="absolute w-full h-full object-cover rounded-lg"
                      />
                    )}
                    <span className="">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SectionCarousel;

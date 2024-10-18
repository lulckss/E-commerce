import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const essentials = [
  {
    name: "Daily Essentials",
    imgSrc: "/imgs/fruta1.png",
    alt: "Basket of daily essentials",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
  {
    name: "Vegetables",
    imgSrc: "/imgs/fruta2.png",
    alt: "Bag of vegetables",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
  {
    name: "Fruits",
    imgSrc: "/imgs/fruta3.png",
    alt: "Assorted fruits",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
  {
    name: "Strawberry",
    imgSrc: "/imgs/fruta4.png",
    alt: "Strawberries",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
  {
    name: "Mango",
    imgSrc: "/imgs/fruta5.png",
    alt: "Mango slices",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
  {
    name: "Cherry",
    imgSrc: "/imgs/fruta6.png",
    alt: "Cherries",
    discount: "UP to 50% OFF",
    imgWidth: "w-[120px]",
    imgHeight: "h-[120px]",
  },
];

const Essentials = () => {
  return (
    <div id="essentials" className="container mx-auto px-4 mt-32 mb-56">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b dark:border-gray-800">
        <h1 className="text-2xl text-primary dark:text-white/85 font-semibold border-b-2 border-accent">
          Daily <span className="text-accent">Essentials</span>
        </h1>
        <Link href="#" className="flex items-center justify-center font-medium text-base">
          View All
          <ChevronRight className="text-accent" />
        </Link>
      </div>

      {/* Essentials Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-10">
        {essentials.map((item, index) => (
          <EssentialItem key={index} {...item} />
        ))}
      </div>
    </div>
     );
};

const EssentialItem = ({
  name,
  imgSrc,
  alt,
  discount,
  imgWidth,
  imgHeight,
}) => (
  <Link href="#">
    <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-neutral-700 rounded-lg shado-lg p-5 border dark:border-gray-900 dark:hover:border-accent hover:border-accent">
      <img
        src={imgSrc}
        alt={alt}
        className={`object-contain ${imgWidth} ${imgHeight} mb-4`}
      />
      <h2 className="text-sm font-semibold text-primary dark:text-white/85 mb-2">
        {name}
      </h2>
      <p className="text-[21px] lg:text-lg sm:text-base md:text-base font-bold text-black mb-4">{discount}</p>
    </div>
  </Link>
);


 
export default Essentials;

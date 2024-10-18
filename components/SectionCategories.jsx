"use client";

import React from "react";

import Link from "next/link";
import { Award } from "lucide-react";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Mobile",
    imgSrc: "/imgs/cel1.png",
    borderColor: "border-gray-300",
    imgWidth: "w-[50px]",
    imgHeight: "h-[90px]",
  },
  {
    name: "Cosmetics",
    imgSrc: "/imgs/produtinhoo.png",
    borderColor: "border-gray-300",
    imgWidth: "w-[80px]",
    imgHeight: "h-[130px]",
  },
  {
    name: "Electronics",
    imgSrc: "/imgs/maquinadelavar.png",
    borderColor: "border-gray-300",
    imgWidth: "",
    imgHeight: "",
  },
  {
    name: "Furniture",
    imgSrc: "/imgs/sofa.png",
    borderColor: "border-gray-300",
    imgWidth: "",
    imgHeight: "",
  },
  {
    name: "Watches",
    imgSrc: "/imgs/smartwatchCategories.png",
    borderColor: "border-gray-300",
    imgWidth: "w-[100px]",
    imgHeight: "h-[100px]",
  },
  {
    name: "Decor",
    imgSrc: "/imgs/planta.png",
    borderColor: "border-gray-300",
    imgWidth: "",
    imgHeight: "",
  },
  {
    name: "Accessories",
    imgSrc: "/imgs/colar.png",
    borderColor: "border-gray-300",
    imgWidth: "",
    imgHeight: "",
  },
];

const CategoryItem = ({ name, imgSrc, borderColor, imgWidth, imgHeight }) => (
  <div className="flex flex-col items-center text-center">
    <div
      className={`w-36 h-36 rounded-full border-2 ${borderColor} flex items-center justify-center mb-2 shadow-custom-spread bg-gray-200 dark:bg-neutral-800 hover:border-accent`}
    >
      <img src={imgSrc} alt={name} className={`${imgWidth} ${imgHeight}`} />
    </div>
    <p className="text-base font-medium">{name}</p>
  </div>
);

const SectionCategories = () => {
  return (
    <div id="categories" className="container mt-32">
      {/* Top Categories Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-16 border-b dark:border-gray-800 ">
          <h2 className="text-2xl text-primary/85 dark:text-white/85 font-semibold border-b-2 border-accent">
            Shop From <span className="text-accent">Top Categories</span>
          </h2>
          <Link href="#" className="flex justify-center items-center text-base font-medium">
            View All
            <ChevronRight className="text-accent" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {categories.map((category, index) => (
            <Link href="#">
              <CategoryItem key={index} {...category} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionCategories;

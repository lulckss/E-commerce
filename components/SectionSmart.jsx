"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Supondo que você tenha uma função cn para combinar classes CSS
import Image from "next/image"; // Importando o componente Image do Next.js
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SectionSmart = () => {
  const items = [
    {
      model: "Galaxy S22 Ultra",
      value: "$999",
      discount: "$1500",
      saved: "$500",
      imageUrl: "/imgs/cel1.png",
      imageWidth: 92.5,
      imageHeight: 150,
    },
    {
      model: "Galaxy M13 (4GB | 64GB)",
      value: "$999",
      discount: "$1500",
      saved: "$500",
      imageUrl: "/imgs/cel2.png",
      imageWidth: 125,
      imageHeight: 150,
    },
    {
      model: "Galaxy M33 (4GB | 64GB)",
      value: "$999",
      discount: "$1500",
      saved: "$500",
      imageUrl: "/imgs/cel3.png",
      imageWidth: 131,
      imageHeight: 1,
    },
    {
      model: "Galaxy M53 (4GB | 64GB)",
      value: "$999",
      discount: "$1500",
      saved: "$500",
      imageUrl: "/imgs/cel4.png",
      imageWidth: 138,
      imageHeight: 1,
    },
    {
      model: "Galaxy S21",
      value: "$999",
      discount: "$1500",
      saved: "$500",
      imageUrl: "/imgs/cel5.png",
      imageWidth: 107.5,
      imageHeight: 1,
    },
  ];

  return (
    <div id="electronics" className="container mt-36 mx-aut">
      <div className="flex justify-between border-b dark:border-gray-800">
        <h1 className="text-2xl font-bold text-primary/85 dark:text-white/85 border-b-2 border-accent">
          Grab the best deal on <span className="text-accent">Smartphones</span>
        </h1>
        <Link href="#" className="flex justify-center items-center ">
          <p className="text-md dark:text-white font-medium text-base">View All</p>
          <ChevronRight className="text-accent" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <Card
            key={index}
            model={item.model}
            value={item.value}
            discount={item.discount}
            saved={item.saved}
            imageUrl={item.imageUrl}
            imageWidth={item.imageWidth} // Passando o valor da largura
            imageHeight={item.imageHeight}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  model,
  value,
  discount,
  saved,
  imageUrl,
  imageWidth,
  imageHeight,
}) => {
  return (
    <Link href="#">
      <div
        className={cn(
          "rounded-[20px] overflow-hidden bg-gray-200 dark:bg-neutral-800 hover:border-accent dark:border-gray-900 dark:hover:border-accent transition-shadow duration-200 mt-10 border"
        )}
      >
        {/* Parte da Imagem com Background */}
        <div className="bg-gray-300 dark:bg-neutral-700 rounded-lg p-4">
          <div className="relative">
            <div className="w-[220px] h-[200px] absolute inset-0 bg-gradient-to-r rounded-lg opacity-30"></div>{" "}
            {/* Fundo atrás da imagem */}
            <Image
              src={imageUrl}
              alt={model}
              width={imageWidth}
              height={imageHeight}
              className="relative rounded-md z-10 mx-auto" // A imagem ficará sobre o fundo
            />
          </div>
        </div>
        <div className="container">
          {/* Primeira linha de texto */}
          <h2 className="font-bold text-lg text-gray-700 dark:text-white mt-2">
            {model}
          </h2>

          {/* Segunda linha de texto */}
          <p className="text-sm text-gray-600 dark:text-white borde font-bold mt-2">
            {value} <s className="font-normal ml-2">{discount}</s>
          </p>

          {/* Separador */}
          <div className="border-b border-gray-400 justify-center items-center p-1"></div>

          <div className="">
            <p className="text-lg text-[#40ff1e] dark:text-[#56bb6c] font-semibold dark:font-medium my-2">
              Save - {saved}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SectionSmart;

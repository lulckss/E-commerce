"use client";

import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const items = [
  {
    id: "Fruits",
    link: [
      { name: "Apple" },
      { name: "Banana" },
      { name: "Orange" },
      { name: "Grapes" },
    ],
    description: "A selection of fruits.",
  },
  {
    id: "Smartphone",
    link: [
      { name: "iPhone" },
      { name: "Samsung" },
      { name: "Google Pixel" },
      { name: "OnePlus" },
    ],
    description: "A selection of popular smartphones.",
  },
  {
    id: "Categories",
    link: [
      { name: "Electronics" },
      { name: "Fashion" },
      { name: "Home" },
      { name: "Books" },
    ],
    description: "Various shopping categories.",
  },
  {
    id: "Electronics",
    link: [
      { name: "Apple" },
      { name: "Sony" },
      { name: "Samsung" },
      { name: "LG" },
    ],
    description: "Popular electronic brands.",
  },
  {
    id: "Essentials",
    link: [
      { name: "Toiletries" },
      { name: "Groceries" },
      { name: "Cleaning" },
      { name: "Health" },
    ],
    description: "Daily essentials for your needs.",
  },
];

const SectionNav = () => {
  return (
    <div className="border-y dark:border-gray-800 hidden 2xl:flex flex-wrap justify-center ml-28">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center sm:flex md:flex lg:flex xl:flex 2xl:flex"
        >
          <NavigationMenu className="grid gap-2 sm:w-[180px] md:w-[250px] lg:w-[280px] xl:w-[320px] 2xl:w-[350px] lg:grid-cols-[.75fr_1fr]">
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Link envolvendo o ID */}
                <Link href={`#${item.id.toLowerCase()}`} passHref>
                  <NavigationMenuTrigger>
                    {item.id}
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="grid gap-2 p-4 sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px] 2xl:w-[280px] md:grid-cols-2">
                  {item.link.map((linkItem, linkIndex) => (
                    <Link href="#" key={linkIndex} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {linkItem.name}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ))}
    </div>
  );
};

export default SectionNav;

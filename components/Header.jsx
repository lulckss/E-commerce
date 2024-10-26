"use client";

import AsideNav from "./AsideNav";
import Link from "next/link";
import { Input } from "./ui/input";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart, FiMoon, FiSun } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="container mx-auto sm:py-[10px] md:py-[15px] lg:py-[20px] xl:py-[25px] bg-white dark:bg-gray-900 dark:text-white">
      {/* ... rest of your header content */}
      <div className="container mx-auto flex items-center justify-center">
        <AsideNav />
        <Link href="/">
          <h1 className="text-4xl ml-5 font-bold text-accent">AllMart</h1>
        </Link>

        {/* input search */}
        <div className="flex items-center space-x-2 mx-auto">
          <Input
            type="text"
            placeholder="Search..."
            className="hidden xl:flex pl-8 bg-sky-50"
          ></Input>
          <HiMiniMagnifyingGlass className="hidden xl:flex absolute text-accent" />
        </div>
        {/* sign up/ sign in */}

        <Link href="#" className="flex items-center justify-center">
          <GoPerson size={20} className="text-accent mx-2" />
          <div className="flex space-x-2 items-center justify-center text-primary dark:text-white/85 font-bold">
            Sign Up/Sign In
          </div>
        </Link>

        <p className="flex text-zinc-500/25 text-4xl px-3">|</p>

        <Link href="#" className="flex items-center justify-center">
          <FiShoppingCart size={20} className="text-accent mx-2" />
          <div className="flex space-x-2 items-center justify-center text-primary dark:text-white/85 font-bold">
            Cart
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;

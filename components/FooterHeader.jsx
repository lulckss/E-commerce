"use client";

import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSealPercent } from "react-icons/pi";

// FAZER MOBILE DISPLAY

const FooterHeader = () => {
  return (
    <div className="hidden xl:flex lg:flex md:flex py-[5px] text-primary/85 dark:text-white bg-slate-100 dark:bg-slate-950">
      <div className="container mx-auto hidden xl:flex lg:flex md:flex justify-between items-center">
        <h6>Welcome to worldwide Megamart!</h6>

        {/* Seção de informações */}
        <div className="hidden xl:flex lg:flex md:flex items-center gap-1 justify-center">
          <IoLocationOutline variant="outline" size={20} color="#3498db" />
          <p>
            Deliver to <span className="font-bold">123123</span>
          </p>

          <p className="text-zinc-500/25 text-3xl px-3">|</p>

          <TbTruckDelivery size={20} color="#3498db" />
          <p>Track your order</p>

          <p className="text-zinc-500/25 text-3xl px-3">|</p>

          <PiSealPercent size={20} color="#3498db" />
          <p>All offers</p>
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;

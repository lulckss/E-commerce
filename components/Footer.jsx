"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";

const contactInfo = [
  {
    iconClass: <FaWhatsapp size={30} className="mb-6" />,
    label: "WhatsApp",
    contact: "+1 202-918-2132",
  },
  {
    iconClass: <PiPhoneCallLight size={30} className="mb-6" />,
    label: "Call Us",
    contact: "+1 202-918-2132",
  },
];

const appDownloads = [
  {
    src: "/imgs/botaoApple.png",
    alt: "Download on the App Store",
    link: "https://www.apple.com",
  },
  {
    src: "/imgs/botaoAppStore.png",
    alt: "Get it on Google Play",
    link: "https://play.google.com/",
  },
];

const popularCategories = [
  "Staples",
  "Beverages",
  "Personal Care",
  "Home Care",
  "Baby Care",
  "Vegetables & Fruits",
  "Snacks & Foods",
  "Dairy & Bakery",
];

const customerServices = [
  "About Us",
  "Terms & Conditions",
  "FAQ",
  "Privacy Policy",
  "E-waste Policy",
  "Cancellation & Return Policy",
];

const ContactInfoItem = ({ iconClass, label, contact }) => (
  <p className="flex items-center justify-start mb-2 text-left">
    {iconClass}
    <span className="ml-2">
      {label} <br /> {contact}
    </span>
  </p>
);

const AppDownloadItem = ({ src, alt }) => (
  <Image width={150} height={500} src={src} alt={alt} className="h-12" />
);

const List = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2 text-left">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <div id="footer" className="p-10 bg-accent dark:bg-slate-950 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold mb-4">AllMart</h1>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            {contactInfo.map((info, index) => (
              <ContactInfoItem key={index} {...info} />
            ))}
          </div>

          {/* Download App */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Download App</h2>
            <div className="flex space-x-4">
              {appDownloads.map((app, index) => (
                <Link href={app.link} target="_blank" key={index}>
                  <AppDownloadItem {...app} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:flex-row lg:justify-end space-y-10 lg:space-y-0 lg:space-x-20">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Most Popular Categories
            </h2>
            <hr className="border-t-2 border-white mb-2" />
            {/* ADICIONAR LINK SEPARADO PARA MAP */}
            <Link href="#">
              <List items={popularCategories} />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Services</h2>
            <hr className="border-t-2 border-white mb-2" />
            <Link href="#">
              <List items={customerServices} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto border-b border-white/25 dark:border-gray-800 mt-14"></div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p>© 2024 All rights reserved. Reliance Retail Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;

"use client"

import Header from "@/components/Header";
import FooterHeader from "./pages/FooterHeader";
import SectionNav from "@/components/SectionNav";
import SectionCarousel from "@/components/SectionCarousel";
import SectionSmart from "@/components/SectionSmart";
import SectionCategories from "@/components/SectionCategories";
import Brands from "@/components/Brands";
import Essentials from "@/components/Essentials";
import Footer from "@/components/Footer";
import Brands2 from "@/components/Brands2";

import React from "react";

const Home = () => {
  return (
    <>
      <FooterHeader />
      <Header />
      <SectionNav />
      <SectionCarousel />
      <SectionSmart />
      <SectionCategories />
      <Brands2 />
      <Essentials />
      <Footer />
    </>
  );
};

export default Home;

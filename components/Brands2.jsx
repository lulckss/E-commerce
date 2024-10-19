"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Importando estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const products = [
  { id: 1, name: "Product 1", image: "/imgs/Group 50@2x.png" },
  { id: 2, name: "Product 2", image: "/imgs/Group 51.png" },
  { id: 3, name: "Product 3", image: "/imgs/Group 52.png" },
  { id: 4, name: "Product 4", image: "/imgs/Group 52.png" },
  { id: 5, name: "Product 5", image: "/imgs/Group 52.png" },
  { id: 6, name: "Product 6", image: "/imgs/Group 52.png" },
];

const Brands2 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Função para navegar ao slide anterior
  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  // Função para navegar ao próximo slide
  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="container mt-36">
      <section>
        <div className="flex justify-between items-center mb-8 border-b dark:border-gray-800">
          <h2 className="text-2xl text-primary/85 dark:text-white/85 font-semibold border-b-2 border-accent">
            Top <span className="text-accent">Electronics Brands</span>
          </h2>
          <Link href="#" className="flex justify-center items-center font-medium text-base">
            View All
            <ChevronRight className="text-accent" />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={true}
          onSwiper={setSwiperInstance}
          pagination={{
            clickable: true,
            el: ".custom-dots",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Breakpoint para telas a partir de 640px
            },
            768: {
              slidesPerView: 1, // Breakpoint para telas a partir de 768px
            },
            1024: {
              slidesPerView: 2, // Breakpoint para telas a partir de 1024px
            },  
            1280: {
              slidesPerView: 2, // Breakpoint para telas a partir de 1280px
            },
            1536: {
              slidesPerView: 3, // Breakpoint para telas a partir de 1536px
            },
          }}
          className="mySwiper mt-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center items-center container w-[450px] lg:w-[450px] h-full object-cove rounded-xl ">
                <Image width={500} height={500}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados */}
        <button
          onClick={handlePrev}
          className="hidden absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots customizados */}
        <div className="custom-dots flex justify-center mt-10">
          {/* Os dots são gerados automaticamente pelo Swiper */}
        </div>
      </section>
    </div>
  );
};

export default Brands2;

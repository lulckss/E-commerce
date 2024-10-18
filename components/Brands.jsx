import React from "react";

const brands = [
  {
    name: "IPHONE",
    bgColor: "bg-gray-800",
    tagColor: "bg-gray-700",
    imgSrc: "https://placehold.co/50x50",
  },
  {
    name: "REALME",
    bgColor: "bg-yellow-200",
    tagColor: "bg-yellow-400",
    imgSrc: "https://placehold.co/50x50",
  },
  {
    name: "XIAOMI",
    bgColor: "bg-orange-200",
    tagColor: "bg-orange-400",
    imgSrc: "https://placehold.co/50x50",
  },
];

const BrandItem = ({ name, bgColor, tagColor, imgSrc }) => (
  <div className={`w-1/3 p-4 ${bgColor} rounded-lg`}>
    <div className="mb-2">
      <span className={`${tagColor} px-2 py-1 rounded`}>{name}</span>
    </div>
    <div className="flex items-center">
      <img src={imgSrc} alt={name} className="w-16 h-16 mr-4" />
      <div>
        <p className="text-lg font-semibold">UP to 80% OFF</p>
      </div>
    </div>
  </div>
);

const Brands = () => {
  return (
    <div className="container p-8">
      {/* Top Electronics Brands Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-primary font-semibold border-b border-accent">
            Top <span className="text-blue-500">Electronics Brands</span>
          </h2>
          <a href="#" className="text-blue-500">
            View All <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="flex space-x-4">
          {brands.map((brand, index) => (
            <BrandItem key={index} {...brand} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;

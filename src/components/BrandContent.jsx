import React from "react";

const BrandContent = () => {
  return (
    <div className="w-full py-[4rem] flex justify-center items-center">
      <div className="w-[75%] grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5 justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br1.jpg"
            alt="brand-1"
          />

          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 1</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br2.jpg"
            alt="brand-2"
          />
          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 2</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br3.jpg"
            alt="brand-3"
          />
          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 3</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br4-small.png"
            alt="brand-4"
          />
          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 4</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br5-small.png"
            alt="brand-5"
          />
          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 5</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img
            src="https://sb-furnicom.mybigcommerce.com/product_images/uploaded_images/br6-small.png"
            alt="brand-6"
          />
          <h1 className="hover:text-[#00A693] cursor-pointer">Brand 6</h1>
        </div>
      </div>
    </div>
  );
};

export default BrandContent;

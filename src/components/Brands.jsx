import React from "react";

import brand1 from "../assets/navbar-img/brand-1.webp";

const Brands = () => {
  return (
    <div className="w-full h-full py-[2rem] flex justify-center items-center">
      <div className="w-[90%] search:w-[75%] h-full xl:w-[75%] grid grid-cols-3 grid-rows-10 lg:grid-cols-9 lg:grid-rows-4 ">
        <div className=" col-span-3 row-span-4 grid grid-cols-3 grid-rows-3 search:grid-rows-2 lg:grid-rows-1 lg:grid-cols-1 lg:col-span-2 ">
          <div className=" flex justify-center items-center text-center col-span-3 row-span-2 search:row-span-1 lg:row-span-1 lg:col-span-1 bg-[#00A693]">
            <h1 className="text-[1.2rem] lg:text-[.9rem] xl:text-[1rem] border-solid border-y-2 border-white text-white">
              <strong>FEATURED</strong> BRANDS
            </h1>
          </div>
          <div className="w-full h-full row-span-1">
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br1.jpg"
              alt="brand-1"
            />
          </div>
          <div className="w-full h-full row-span-1">
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br2.jpg"
              alt="brand-2"
            />
          </div>
          <div className="w-full h-full row-span-1">
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br3.jpg"
              alt="brand-3"
            />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${brand1})` }}
          className="w-full mdsm:h-[17rem] search:h-[23rem] md:h-[32rem] lg:h-full col-span-3 lg:col-span-5 row-span-4 bg-red-300 bg-center bg-cover bg-no-repeat flex justify-center items-center "
        >
          <div className="w-full search:w-[75%] px-5 py-8 text-white">
            <p className="text-[.75rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem asperiores nisi non nam. Aperiam odit reiciendis
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem asperiores nisi non nam. Aperiam odit reiciendis
            </p>
            <button className=" py-1 px-5 mt-5 text-[.7rem] bg-transparent hover:bg-[#00A693] border-solid border-2 border-white hover:border-[#00A693] transition-all">
              <strong> SHOP NOW </strong>
            </button>
          </div>
        </div>
        <div className="col-span-3 row-span-1 lg:col-span-2 lg:row-span-4 grid grid-rows-1 grid-cols-3 lg:grid-cols-1 ">
          <div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br4.jpg"
              alt="brand-4"
            />
          </div>
          <div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br5.jpg"
              alt="brand-5"
            />
          </div>
          <div>
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br6.jpg"
              alt="brand-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

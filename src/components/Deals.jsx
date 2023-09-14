import React from "react";

import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/index.css";

// import required modules
import { Navigation } from "swiper/modules";

import { useSelector } from "react-redux";

const Deals = () => {
  const { items } = useSelector((c) => c.cart);

  console.log(items.filter((item) => item.isPopular).map((item) => item.name));

  return (
    <div className="w-full h-full py-5 lg:h-[30rem] xl:h-[35rem]  bg-[#DDDDDD] flex justify-center lg:relative items-center ">
      <div className="w-[90%] lg:w-[75%] bg-white flex flex-col lg:absolute top-[-5rem] z-10">
        <div className="w-full flex flex-col search:grid search:grid-cols-6 lg:flex lg:flex-row  ">
          <div className="w-full lg:w-[25%] p-[10%] lg:p-[2%] flex flex-col search:col-span-2  bg-[#00A693] text-white order-2 search:order-1">
            <div>
              <h1 className="text-[1.3rem] text-center font-extrabold ">
                DEALS OF THE DAYS
              </h1>
            </div>
            <div className="py-[2rem]">
              <p className="text-[.8rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quisquam quod inventore placeat quo, adipisci commodi dolorem
                accusantium enim dignissimos excepturi veniam at corporis nulla
                nobis sequi ea et alias!
              </p>
            </div>
            <div className="grid grid-cols-2">
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/200x200/l/d1__06385.original.png"
                alt="living-room"
              />

              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/200x200/f/d2__44368.original.png"
                alt="kitchen"
              />

              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/200x200/e/d3__13655.original.png"
                alt="lighting"
              />

              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/200x200/n/d4__00731.original.png"
                alt="office"
              />
            </div>
          </div>

          <div className="w-full h-full lg:w-[50%] flex justify-center items-start search:col-span-4  order-1 search:order-2">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {items
                .filter((item) => item.onDeals === true)
                .map((deal, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link to="/product" state={{ productData: deal }} key={i}>
                        <div className="w-full md:h-full py-[2.5rem] flex flex-col justify-center items-center cursor-pointer">
                          <div className="w-[50%] md:w-[60%] h-full py-[2rem]  ">
                            <img
                              src={deal.image}
                              alt={deal.name}
                              className="w-full"
                            />
                          </div>
                          <div className="w-full px-[1.5rem] ">
                            <h2 className="font-bold">{deal.name}</h2>
                            <h3 className="text-[.8rem] text-slate-500">
                              {deal.brand}
                            </h3>
                            <h1 className="font-extrabold text-red-500">
                              PHP {deal.price.toLocaleString()}
                            </h1>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>

          <div className="w-full lg:w-[25%] flex flex-col search:col-span-6 bg-white order-3">
            <div className="w-full p-5">
              <h1 className="text-[1.3rem] text-center font-bold">
                POPULAR PRODUCTS
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              {items
                .filter((item) => item.isPopular)
                .map((prod, i) => {
                  return (
                    <Link to="/product" state={{ productData: prod }} key={i}>
                      <div
                        className="w-full p-5 flex items-center border-solid border-b-2 border-t-2 border-r-0"
                        key={i}
                      >
                        <div className="w-[40%] border-solid border-2">
                          <img src={prod.image} alt={prod.product} />
                        </div>
                        <div className="w-[60%] ml-2">
                          <h2 className="font-bold xl:text-[.75rem]">
                            {prod.name}
                          </h2>
                          <strong className="text-red-500 lg:text-[.8rem]">
                            PHP {prod.price.toLocaleString()}
                          </strong>
                          <p className="hidden md:block lg:hidden text-[.8rem]">
                            {prod.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="w-full h-max flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center overflow-hidden">
          <Swiper className=" mySwiper md:hidden w-full flex justify-center items-center">
            <SwiperSlide>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn1.png"
                alt="sofa"
                className="w-full xl:w-[33.33%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn2.png"
                alt="living"
                className="w-full xl:w-[33.33%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn3.png"
                alt="new"
                className="w-full xl:w-[33.33%]"
              />
            </SwiperSlide>
          </Swiper>
          <img
            src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn1.png"
            alt="sofa"
            className="hidden md:w-[33.33%] md:block"
          />
          <img
            src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn2.png"
            alt="living"
            className="hidden md:w-[33.33%]  md:block"
          />
          <img
            src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/bn3.png"
            alt="new"
            className="hidden md:w-[33.33%]  md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Deals;

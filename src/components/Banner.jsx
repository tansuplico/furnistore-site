import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";

const Banner = () => {
  const bannerImages = [
    {
      id: 1,
      image:
        "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/carousel/8/2-1.png?c=2",
      title: "FURNITURE",
      desc: "BEST LIVING ROOM DESIGNS 2023 FALL TREND",
    },
    {
      id: 2,
      image:
        "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/carousel/3/1-1.png?c=2",
      title: "LIVING ROOM",
      desc: "THE BEST LIVING ROOM LIGHTING",
    },
    {
      id: 3,
      image:
        "https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/carousel/9/3-1.png?c=2",
      title: "FURNITURE",
      desc: "2023 INTERIOR DESIGN TRENDS",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {bannerImages.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                style={{ backgroundImage: `url(${img.image})` }}
                className="w-full h-[40vh] mdsm:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[90vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white"
              >
                <motion.h2
                  variants={{
                    visible: { y: 0, opacity: 1 },
                  }}
                  initial={{ opacity: 0.1, y: -300 }}
                  transition={{ duration: 0.7 }}
                  animate="visible"
                  className="text-[.8rem] md:text-[1rem] xl:text-[2rem] font-black mb-2 xl:mb-5"
                >
                  {img.title}
                </motion.h2>
                <motion.h1
                  variants={{
                    visible: { y: 0, opacity: 1 },
                  }}
                  initial={{ opacity: 0.1, y: -300 }}
                  transition={{ duration: 0.5 }}
                  animate="visible"
                  className="text-[.9rem]  md:text-[2rem] xl:text-[3rem] text-center font-extrabold mb-2 xl:mb-5"
                >
                  {img.desc}
                </motion.h1>
                <Link to="/collections">
                  <motion.button
                    variants={{
                      visible: { y: 0, opacity: 1 },
                    }}
                    initial={{ opacity: 0.1, y: -300 }}
                    transition={{ duration: 0.4 }}
                    animate="visible"
                    className="w-[60px] md:w-[100px] xl:w-[150px] text-[.5rem] md:text-[.8rem] xl:text-[1rem] p-2 bg-[#00A693] rounded"
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/index.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { Refresh, Favorites } from "../assets/icons";

import itemsData from "../api/storeData";

const Featured = () => {
  const [slideShown, setSlideShown] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const slideToShow =
        window.innerWidth < 768
          ? 1
          : window.innerWidth < 1024
          ? 2
          : window.innerWidth < 1440
          ? 3
          : 4;

      setSlideShown(slideToShow);
    };

    handleResize();

    // add Event listener for window resize
    window.addEventListener("resize", handleResize);

    // clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full pt-[3rem] lg:pt-[20rem] xl:pt-[18rem] pb-[2rem] flex justify-center items-center">
      <div className="w-[75%] flex flex-col justify-center items-center ">
        <div className="border-solid border-y-2 border-black">
          <h1 className="text-[1.4rem]">
            <strong className="text-[#00A693]"> FEATURED </strong> PRODUCTS
          </h1>
        </div>

        <div className="w-full  mt-10 flex justify-center items-center">
          <Swiper
            slidesPerView={slideShown}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={window.innerWidth < 768 ? false : true}
            modules={[Navigation]}
            className="mySwiper flex py-5 justify-center items-center"
          >
            {itemsData.map((data, i) => {
              return (
                <SwiperSlide
                  className="w-full  flex flex-col justify-center items-center text-center border-solid border-gray border-2 cursor-pointer"
                  key={i}
                >
                  <Link
                    to="/product"
                    state={{ productData: data }}
                    key={i}
                    onClick={handleLinkClick}
                  >
                    <div className="w-full relative">
                      {data.onSale && (
                        <div className="w-[40%] p-1 bg-[#FF4F00] absolute text-white rounded">
                          <h1> SALE -20% </h1>
                        </div>
                      )}
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full h-full p-5 flex flex-col">
                      <strong className="text-[.8rem] text-[#4f4f4f]">
                        {data.name.toUpperCase()}
                      </strong>
                      <h3 className="text-[.8rem] text-[#999] my-2">
                        {" "}
                        {data.brand}{" "}
                      </h3>
                      <strong className="text-[1.2rem] text-red-500">
                        {" "}
                        PHP {data.price.toLocaleString()}{" "}
                      </strong>
                    </div>
                    <div className="w-full h-full flex justify-center items-center border-solid border-gray border-t-2  ">
                      <div className="w-[25%] h-full py-3 flex justify-center items-center hover:bg-[#00A693] transition">
                        <Refresh />
                      </div>
                      <div className="w-[50%] h-full py-3 text-[.85rem] flex justify-center items-center hover:bg-[#00A693] hover:text-white transition">
                        Choose Options
                      </div>
                      <div className="w-[25%] h-full py-3 flex justify-center items-center hover:bg-[#00A693] transition">
                        <Favorites />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-full mt-5 flex justify-center items-center text-white">
          <div className="hidden w-full h-full p-8 lg:p-5 bg-[#00A693] md:flex md:flex-col items-center text-center">
            <div>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/services/services1.png"
                alt=""
              />
            </div>
            <div>
              <strong>FREE SHIPPING</strong>
              <h3>Vestibulum dolor purus porta</h3>
            </div>
          </div>
          <div className="hidden w-full h-full p-5 bg-[#00A693] md:flex md:flex-col items-center text-center">
            <div>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/services/services2.png"
                alt=""
              />
            </div>
            <div>
              <strong>MONEY BACK GUARANTEE</strong>
              <h3>Vestibulum dolor purus porta</h3>
            </div>
          </div>

          <div className="hidden w-full h-full p-5 bg-[#00A693] md:flex md:flex-col items-center text-center">
            <div>
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/services/services3.png"
                alt=""
              />
            </div>
            <div>
              <strong>MONEY BACK GUARANTEE</strong>
              <h3>Vestibulum dolor purus porta</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

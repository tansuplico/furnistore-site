import React from "react";

import hot1 from "../assets/navbar-img/hot-1.jpg";
import hot2 from "../assets/navbar-img/hot-2.png";
import hot3 from "../assets/navbar-img/hot-3.png";
import hot4 from "../assets/navbar-img/hot-4.png";
import hot5 from "../assets/navbar-img/hot-5.png";

const HotCategories = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center bg-[#eee] ">
      <div className="w-[75%] h-full grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 gap-3 ">
        <div
          style={{
            backgroundImage: `url(${hot1})`,
          }}
          className="w-full h-full flex row-span-1 lg:row-span-3  bg-no-repeat bg-cover bg-center cursor-pointer"
        >
          <div className="w-full flex justify-center items-center hover:bg-black opacity-0 hover:opacity-[.75] relative transition overflow-hidden ">
            <div className="w-full h-full text-white flex flex-col text-center justify-center items-center absolute  ">
              <strong className="mb-5 text-[1.2rem] border-solid border-y-2 border-white ">
                KITCHEN
              </strong>
              <ul className="search:text-[.6rem] lg:text-[1rem]">
                <li> Large Coffee Tables</li>
                <li>Small Coffee Tables </li>
                <li>Coffee Tables Set</li>
                <li>Console Tables</li>
                <li>Set Of Tables</li>
                <li>End Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full p-7 flex flex-col justify-center items-center row-span-1 bg-white">
          <h1 className="border-solid border-2 border-black border-x-0 mb-3">
            <strong className="text-[#00A693]"> HOT </strong> CATEGORIES
          </h1>
          <p className="text-[.7rem]">
            Duis euismod eu nibh at pharetra. Vivamus placerat ac metus et
            placerat. Nulla molestie massa id est posuere, maximus hendrerit est
            rhoncus.
          </p>
          <button className="bg-[#00A693] text-white text-[.7rem] py-2 px-4 mt-3">
            VIEW ALL CATEGORIES
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${hot2})`,
          }}
          className="w-full h-full flex row-span-1 lg:row-span-2  bg-no-repeat bg-cover bg-center cursor-pointer"
        >
          <div className="w-full flex justify-center items-center hover:bg-black opacity-0 hover:opacity-[.75] relative transition overflow-hidden ">
            <div className="w-full h-full text-white flex flex-col text-center justify-center items-center absolute  ">
              <strong className="mb-5 text-[1.2rem] border-solid border-y-2 border-white ">
                KITCHEN
              </strong>
              <ul className="search:text-[.6rem] lg:text-[1rem]">
                <li>Large Coffee Tables</li>
                <li>Small Coffee Tables </li>
                <li>Coffee Tables Set</li>
                <li>Console Tables</li>
                <li>Set Of Tables</li>
                <li>End Tables</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${hot4})` }}
          className="w-full h-full flex row-span-1 lg:row-span-3  bg-no-repeat bg-cover bg-center"
        >
          <div className="w-full flex justify-center items-center hover:bg-black opacity-0 hover:opacity-[.75] relative transition overflow-hidden ">
            <div className="w-full h-full text-white flex flex-col text-center justify-center items-center absolute  ">
              <strong className="mb-5 text-[1.2rem] border-solid border-y-2 border-white ">
                BATHROOM
              </strong>
              <ul className="search:text-[.6rem] lg:text-[1rem]">
                <li>Large Coffee Tables</li>
                <li>Small Coffee Tables </li>
                <li>Coffee Tables Set</li>
                <li>Console Tables</li>
                <li>Set Of Tables</li>
                <li>End Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${hot5})` }}
          className="w-full h-full flex row-span-1 lg:row-span-2  bg-no-repeat bg-cover bg-center "
        >
          <div className="w-full flex justify-center items-center hover:bg-black opacity-0 hover:opacity-[.75] relative transition overflow-hidden ">
            <div className="w-full h-full text-white flex flex-col text-center justify-center items-center absolute  ">
              <strong className="mb-5 text-[1.2rem] border-solid border-y-2 border-white ">
                KITCHEN
              </strong>
              <ul className="search:text-[.6rem] lg:text-[1rem]">
                <li>Large Coffee Tables</li>
                <li>Small Coffee Tables </li>
                <li>Coffee Tables Set</li>
                <li>Console Tables</li>
                <li>Set Of Tables</li>
                <li>End Tables</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${hot3})` }}
          className="w-full h-full flex row-span-1 bg-no-repeat bg-cover bg-center "
        >
          <div className="w-full flex justify-center items-center hover:bg-black opacity-0 hover:opacity-[.65] relative transition overflow-hidden ">
            <div className="w-full h-full text-white flex flex-col text-center justify-center items-center absolute  ">
              <strong className="mb-5 text-[1.2rem] border-solid border-y-2 border-white ">
                LIVING ROOM
              </strong>
              <ul className="search:text-[.6rem] lg:text-[1rem]">
                <li>Large Coffee Tables</li>
                <li>Small Coffee Tables </li>
                <li>Coffee Tables Set</li>
                <li>Console Tables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCategories;

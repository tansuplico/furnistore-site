import React, { useRef, useState } from "react";

import { Envelope } from "../assets/icons";

import footerbg from "../assets/navbar-img/bg-footer.jpg";

import location from "../assets/navbar-img/location-footer.png";
import phone from "../assets/navbar-img/phone-footer.png";
import envelope from "../assets/navbar-img/envelope-footer.png";
import visa from "../assets/navbar-img/visa-footer.png";
import amexpress from "../assets/navbar-img/amexpress-footer.png";
import mastercard from "../assets/navbar-img/mastercard-footer.png";
import paypal from "../assets/navbar-img/paypal-footer.png";

const Footer = ({ handleLinkClick }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#ddd]">
      <div className="w-[75%] md:w-[90%] lg:w-[75%] py-7 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full ">
          <strong className="text-[1.2rem]">
            NEED HELP? CALL YOUR AWARD WINNING
          </strong>
          <h3 className="text-[.8rem]">
            SUPPORT TEAM 24/7 AT (91)-261 3023333
          </h3>
        </div>
        <div className="w-full ">
          <div className="w-full h-full p-1 bg-[#00A693] flex">
            <div className="p-2 flex justify-center items-center bg-white">
              <Envelope />
            </div>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full placeholder:text-[gray] placeholder:text-[.7rem] outline-none"
            />
            <button
              className="py-2 px-6 bg-[#343434] hover:bg-black text-white text-[.8rem] transition-all"
              onClick={handleLinkClick}
            >
              <strong>SUBSCRIBE</strong>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${footerbg})` }}
        className="w-full flex flex-col justify-center items-center text-white"
      >
        <div className="w-full md:w-[90%] lg:w-[75%] py-10 md:py-0 flex flex-col md:flex-row justify-center items-center  ">
          <div className="w-full md:w-[25%] mb-5">
            <h1 className="w-max ml-5 md:ml-0 mb-4 font-extrabold border-solid border-b-[3px] border-[#00A693]">
              ABOUT
            </h1>

            <ul className=" ml-5 md:ml-0 md:flex flex-col gap-2">
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                About Us
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Corporate Responsibility
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Investor Relations
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Careers
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Services
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Ideas & How-To's
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[25%] mb-5">
            <h1 className="w-max ml-5 md:ml-0 mb-4 font-extrabold border-solid border-b-[3px] border-[#00A693]">
              INFORMATION
            </h1>

            <ul className="ml-5 md:ml-0 md:flex flex-col gap-2">
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Brand
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Blog
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all "
                onClick={handleLinkClick}
              >
                Pages
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Contact Us
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Terms of Use
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[25%] mb-5">
            <h1 className="w-max ml-5 md:ml-0 mb-4 font-extrabold border-solid border-b-[3px] border-[#00A693]">
              BRANDS
            </h1>

            <ul className="ml-5 md:ml-0 md:flex flex-col gap-2">
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Sagafoam
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Common Good
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                OFS
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Audrey
              </li>
              <li
                className="text-[.8rem] hover:text-[#00A693] transition-all"
                onClick={handleLinkClick}
              >
                Rockwell
              </li>
              <strong className="text-[.8rem] cursor-pointer hover:text-[#00A693] transition-all">
                View All
              </strong>
            </ul>
          </div>

          <div className="w-full md:w-[25%] px-4 py-8 bg-[#00A693]">
            <h1 className="w-max mb-4 font-extrabold border-solid border-b-[3px] border-[#00A693]">
              CONTACT US
            </h1>

            <div className="flex flex-col justify-center gap-3 ">
              <div className="flex items-center">
                <img
                  src={location}
                  alt="location"
                  className="w-[15px] h-[15px]"
                />
                <h2 className="ml-2 text-[.8rem]">
                  Megnor Comp Pvt Limited, Trade Centre, Udhana Darwaja
                </h2>
              </div>

              <div className="flex items-center">
                <img src={phone} alt="location" className="w-[15px] h-[15px]" />
                <h2 className="ml-2 text-[.8rem]"> (91)-261 3023333 </h2>
              </div>

              <div className="flex items-center">
                <img
                  src={envelope}
                  alt="location"
                  className="w-[15px] h-[15px]"
                />
                <h2 className="ml-2 text-[.8rem]"> contact@revo.com </h2>
              </div>

              <div className="w-full grid grid-cols-2 grid-rows-2 items-center">
                <img src={amexpress} alt="amexpress" />
                <img src={visa} alt="visa" />
                <img src={paypal} alt="paypal" />
                <img src={mastercard} alt="mastercard" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 bg-white bg-opacity-[.2] flex justify-center items-center">
          <div className="w-[75%]  flex flex-col gap-3">
            <strong>Download Our App</strong>
            <div className="flex gap-5">
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/app/apstore.png"
                alt="apple-store"
              />
              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/app/googleplay.png"
                alt="google-store"
              />
            </div>
            <span className="text-[.7rem]">
              ©2018 SB Furnicom Demo Store. All Rights Reserved. Designed by
              Revotheme.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import accordionbtn from "../assets/navbar-img/accordion-right.png";
import closesidebar from "../assets/navbar-img/close-sidebar.png";

const ColSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  // Accordion
  const [accordion, setAccordion] = useState([]);

  function toggleAccordion(num) {
    setAccordion((prevAccordion) => {
      if (prevAccordion.includes(num)) {
        return prevAccordion.filter((acc) => acc !== num);
      } else {
        return [...prevAccordion, num];
      }
    });
  }

  return (
    <aside
      className={`fixed top-0 ${
        toggleSidebar ? "left-0" : "left-[-50rem]"
      } w-[80%] search:w-[45%] h-full flex flex-col justify-center items-center  bg-white transition-all duration-200 z-30`}
    >
      <div className="w-full h-full p-3 flex flex-col gap-5 overflow-y-scroll">
        <div
          className="w-full py-2 flex justify-center items-center bg-red-500 mb-2"
          onClick={() => setToggleSidebar(false)}
        >
          <img src={closesidebar} alt="x" className="w-[25px] h-[25px]" />
        </div>

        <div className="w-full bg-white border-solid border-2 border-gray-300">
          <div className="bg-[#444] p-4 text-white">
            <strong>ALL CATEGORIES</strong>
          </div>

          <div className="w-full px-3 pt-3 pb-2 ">
            <div className="w-full flex justify-between items-center ">
              <Link to="/collections">
                <h1> Collections </h1>
              </Link>
              <img
                src={accordionbtn}
                alt="btn"
                className={`w-[20px] h-[20px] cursor-pointer transition-all ${
                  accordion.includes(1) ? "rotate-90" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              />
            </div>

            <div
              className={`w-full mt-2 ${
                accordion.includes(1) ? "h-[8rem]" : "h-auto"
              } overflow-hidden relative transition-all`}
            >
              <ul
                className={`w-full flex flex-col gap-2 absolute text-[.9rem] duration-500 ${
                  accordion.includes(1) ? "top-0" : "-top-[10rem]"
                } `}
              >
                <li>Arts</li>
                <li>Festival</li>
                <li>Furniture</li>
                <li>Home Textile</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 pt-3 pb-2 ">
            <div className="w-full flex justify-between items-center">
              <Link to="/shop">
                <h1> Shop </h1>
              </Link>
              <img
                src={accordionbtn}
                alt="btn"
                className={`w-[20px] h-[20px] cursor-pointer transition-all ${
                  accordion.includes(2) ? "rotate-90" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              />
            </div>
            <div
              className={`w-full mt-2 ${
                accordion.includes(2) ? "h-[8rem]" : "h-auto"
              } overflow-hidden relative transition-all`}
            >
              <ul
                className={`w-full flex flex-col gap-2 absolute text-[.9rem] duration-500 ${
                  accordion.includes(2) ? "top-0" : "-top-[10rem]"
                } `}
              >
                <li>Home Decor</li>
                <li>Home Storage</li>
                <li>Garden Supplies</li>
                <li>Household</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 pt-3 pb-2">
            <div className="w-full flex justify-between items-center">
              <Link to="/today-deals">
                <h1> Today Deals </h1>
              </Link>
              <img
                src={accordionbtn}
                alt="btn"
                className={`w-[20px] h-[20px] cursor-pointer transition-all ${
                  accordion.includes(3) ? "rotate-90" : ""
                }`}
                onClick={() => toggleAccordion(3)}
              />
            </div>
            <div
              className={`w-full mt-2 ${
                accordion.includes(3) ? "h-[8rem]" : "h-auto"
              } overflow-hidden relative transition-all`}
            >
              <ul
                className={`w-full flex flex-col gap-2 absolute text-[.9rem] duration-500 ${
                  accordion.includes(3) ? "top-0" : "-top-[10rem]"
                } `}
              >
                <li>Kitchen</li>
                <li>Furniture</li>
                <li>Lightings</li>
                <li>Office</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 pt-3 pb-2">
            <div className="w-full flex justify-between items-center">
              <Link to="/today-deals">
                <h1> Hot Deals </h1>
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="bg-white border-solid border-2 border-gray-300">
          <div className="bg-[#444] p-4 text-white">
            <strong>CUSTOM CMS BLOCK</strong>
          </div>

          <div className="w-full p-4 flex justify-center items-center">
            <img
              src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/3.jpg"
              alt="project-update"
            />
          </div>

          <div className="w-full p-4 flex flex-col gap-4 ">
            <strong>CUSTOM TITLE</strong>

            <p className="text-[.8rem]">
              Custom CMS block displayed at the left sidebar on the Catalog
              Page. Put your own content here: text, html, images, media...
              whatever you like.
            </p>

            <button className="w-full bg-[#444] hover:bg-[#00A693] text-white text-[.85rem] p-3 transition-all duration-300">
              Read More
            </button>
          </div>
        </div>

        <div className="w-full bg-white p-4 border-solid border-2 border-gray-300">
          <img
            src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/banners/image-left.jpg"
            alt="new-arrival"
            className="hover:opacity-[.85]"
          />
        </div>
      </div>
    </aside>
  );
};

export default ColSidebar;

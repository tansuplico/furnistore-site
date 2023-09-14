import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import accordionbtn from "../assets/navbar-img/accordion-right.png";

import closesidebar from "../assets/navbar-img/close-sidebar.png";

const Menu = ({ toggleMenu, setToggleMenu }) => {
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
        toggleMenu ? "left-0" : "left-[-50rem]"
      } w-[80%] search:w-[45%] h-full flex flex-col justify-center items-center  bg-white transition-all duration-200 z-40`}
    >
      <div className="w-full h-full p-3 flex flex-col gap-5 overflow-y-scroll">
        <div
          className="w-full py-2 flex justify-center items-center bg-red-500 mb-2"
          onClick={() => setToggleMenu(false)}
        >
          <img src={closesidebar} alt="x" className="w-[25px] h-[25px]" />
        </div>

        <div className="w-full ">
          <Link to="/">
            <div className="w-full bg-white border-solid border-b-2 border-gray-300">
              <div
                className={`w-full flex px-3 pt-3 pb-2 justify-between items-center cursor-pointer bg-white text-black hover:bg-[#00A693] hover:text-white transition-all`}
              >
                <h1> Home </h1>
              </div>
            </div>
          </Link>

          <div className="w-full bg-white border-solid border-b-2 border-gray-300">
            <div
              className={`w-full flex px-3 pt-3 pb-2 justify-between items-center cursor-pointer bg-white text-black hover:bg-[#00A693] hover:text-white transition-all`}
            >
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
              className={`w-full ${
                accordion.includes(1)
                  ? "h-[8rem] mt-2 px-3 pt-3 pb-2"
                  : "h-auto"
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

          <div className="w-full bg-white border-solid border-b-2 border-gray-300">
            <div
              className={`w-full flex px-3 pt-3 pb-2 justify-between items-center cursor-pointer bg-white text-black hover:bg-[#00A693] hover:text-white transition-all`}
            >
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
              className={`w-full ${
                accordion.includes(2)
                  ? "h-[8rem] mt-2 px-3 pt-3 pb-2"
                  : "h-auto"
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

          <div className="w-full bg-white border-solid border-b-2 border-gray-300">
            <div
              className={`w-full flex px-3 pt-3 pb-2 justify-between items-center cursor-pointer bg-white text-black hover:bg-[#00A693] hover:text-white transition-all`}
            >
              <Link to="/shop">
                <h1> Brand </h1>
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
              className={`w-full ${
                accordion.includes(3)
                  ? "h-[63rem] mt-2 px-3 pt-3 pb-2"
                  : "h-auto"
              } overflow-hidden relative transition-all`}
            >
              <div
                className={`w-full grid grid-cols-1 gap-5 absolute text-[.9rem] duration-500 ${
                  accordion.includes(3) ? "top-0" : "-top-[10rem]"
                } `}
              >
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

                <div className="w-full h-full row-span-1">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br4.jpg"
                    alt="brand-4"
                  />
                </div>
                <div className="w-full h-full row-span-1">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br5.jpg"
                    alt="brand-5"
                  />
                </div>
                <div className="w-full h-full row-span-1">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/content/images/home1/brand/br6.jpg"
                    alt="brand-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <Link to="/blog-page">
            <div className="w-full bg-white border-solid border-b-2 border-gray-300">
              <div
                className={`w-full flex px-3 pt-3 pb-2 justify-between items-center cursor-pointer bg-white text-black hover:bg-[#00A693] hover:text-white transition-all`}
              >
                <h1> Blog </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Menu;

import React, { useState } from "react";

import { Link } from "react-router-dom";

import banner from "../assets/navbar-img/productDisplay-banner.jpg";
import sidebar from "../assets/navbar-img/sidebar.png";

import burgerMenu from "../assets/navbar-img/burger-menu.png";
import grid from "../assets/navbar-img/grid.png";

import { ColAsidebar, ColSidebar } from "../components";

import { Refresh, Favorites } from "../assets/icons";

import { useSelector } from "react-redux";

const CollectionsDisplay = ({ bannerName, linkName }) => {
  // Sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);

  // Grid
  const [gridState, setGridState] = useState(1);

  const { items } = useSelector((c) => c.cart);

  function changeGrid(grid) {
    setGridState(grid);
  }

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ColSidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      {toggleSidebar && (
        <div
          className="w-full h-[100vh] fixed top-0 bg-black bg-opacity-[.7] z-30"
          onClick={() => setToggleSidebar(false)}
        ></div>
      )}

      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="w-full h-[13rem] bg-center bg-no-repeat bg-cover flex justify-center items-center text-white"
      >
        <div className="flex flex-col justify-center items-center">
          <strong className="text-[2rem]">{bannerName}</strong>
        </div>
      </div>

      <div className="w-full bg-[#eee] flex justify-center items-center ">
        <div className="w-[90%] lg:w-[75%] py-10 flex flex-col lg:flex-row justify-center items-start gap-5 ">
          <ColAsidebar bannerName={bannerName} />
          <div
            className="w-max md:hidden p-2 flex items-center bg-white"
            onClick={() => setToggleSidebar(true)}
          >
            <img src={sidebar} alt="sidebar" className="w-[25px] h-[25px]" />
            <h1>SIDEBAR</h1>
          </div>

          <div className="w-full lg:w-[75%] ">
            <div
              className={`${
                bannerName === "Hot Deals" ? "hidden" : "flex flex-col gap-5"
              } `}
            >
              <strong>COLLECTIONS</strong>

              <img
                src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/1580x1580/f/bottom-1__30432.original.jpg"
                alt="collection"
              />

              <p className="text-[.8rem]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat
              </p>
            </div>

            <div
              className={`${
                bannerName === "Hot Deals"
                  ? "hidden"
                  : "w-full py-2 flex flex-col gap-3 "
              }`}
            >
              <strong className="w-max border-solid border-b-2 border-[#00A693] ">
                SUB CATEGORIES
              </strong>

              <div className="w-full md:w-[70%] grid grid-cols-2 grid-rows-2 md:flex gap-5 justify-start items-center ">
                <div className="w-full md:w-[20%] p-1 flex justify-center items-center bg-white hover:bg-[#eee]">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/k/1__94253.original.jpg"
                    alt="arts-img"
                  />
                </div>
                <div className="w-full md:w-[20%] p-1 flex justify-center items-center bg-white hover:bg-[#eee]">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/n/2__80649.original.jpg"
                    alt="festi-img"
                  />
                </div>
                <div className="w-full md:w-[20%] p-1 flex justify-center items-center bg-white hover:bg-[#eee]">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/f/3__09860.original.jpg"
                    alt="home-img"
                  />
                </div>
                <div className="w-full md:w-[20%] p-1 flex justify-center items-center bg-white hover:bg-[#eee]">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/original/i/untitled-1__07918.original.jpg"
                    alt="furni-img"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="py-5 flex items-center gap-1 ">
                <h1 className="mr-2">View As: </h1>
                <div
                  className="hidden md:block px-3 py-1 bg-[#444] hover:bg-[#00A693] transition-all cursor-pointer text-white"
                  onClick={() => changeGrid(2)}
                >
                  2
                </div>
                <div
                  className="hidden md:block px-3 py-1 bg-[#444] hover:bg-[#00A693] transition-all cursor-pointer text-white"
                  onClick={() => changeGrid(3)}
                >
                  3
                </div>
                <div
                  className="hidden xl:block px-3 py-1 bg-[#444] hover:bg-[#00A693] transition-all cursor-pointer text-white"
                  onClick={() => changeGrid(4)}
                >
                  4
                </div>
                <div
                  className="md:hidden p-2 bg-[#444] hover:bg-[#00A693] transition-all cursor-pointer"
                  onClick={() => changeGrid(5)}
                >
                  <img src={grid} alt="grid" className="w-[16px] h-[16px]" />
                </div>
                <div
                  className="p-2 bg-[#444] hover:bg-[#00A693] transition-all cursor-pointer"
                  onClick={() => changeGrid(1)}
                >
                  <img
                    src={burgerMenu}
                    alt="burger"
                    className="w-[16px] h-[16px]"
                  />
                </div>
              </div>

              <div className={`w-full grid grid-cols-${gridState} gap-4 `}>
                {items.map((data, i) => {
                  return (
                    <Link
                      to={`/${linkName}/product-${data.id}`}
                      onClick={() => handleLinkClick()}
                      state={{ productData: data }}
                      key={i}
                    >
                      <div
                        className={`${
                          gridState === 1
                            ? "w-full bg-white flex justify-center items-center border-solid border-gray border-2 cursor-pointer cols-span-5 rows-span-1 "
                            : "w-full bg-white flex flex-col justify-center items-center text-center border-solid border-gray border-2 cursor-pointer "
                        } `}
                      >
                        <div
                          className={`w-${
                            gridState === 5
                              ? "[45%]"
                              : gridState === 1
                              ? "[40%]"
                              : "full"
                          }
                        md:w-${gridState === 1 ? "[40%]" : "full"} relative`}
                        >
                          {data.onSale && (
                            <div className="w-[40%] p-1 bg-[#FF4F00] absolute text-white rounded">
                              <h1> SALE -20% </h1>
                            </div>
                          )}
                          <img
                            src={data.image}
                            alt={data.name}
                            className="w-full z-2"
                          />
                        </div>
                        <div
                          className={`w-full
                         ${gridState === 5 ? "w-full" : "w-[55%]"} 
                        md:w-${
                          gridState === 1 ? "[70%]" : "full"
                        } h-full flex flex-col`}
                        >
                          <div className="w-full h-full p-2 md:p-5 flex flex-col">
                            <strong className="text-[.8rem] text-[#4f4f4f]">
                              {data.name.toUpperCase()}
                            </strong>
                            <h3 className="text-[.8rem] text-[#999] my-2">
                              {data.brand}
                            </h3>
                            <strong className="text-[1.2rem] text-red-500">
                              PHP {data.price.toLocaleString()}
                            </strong>
                            {gridState === 1 && (
                              <>
                                <strong> Stars </strong>
                                <p className="hidden md:block text-[.8rem] my-1">
                                  {data.desc}
                                </p>
                              </>
                            )}
                          </div>
                          <div
                            className={`${
                              gridState === 5 ? "flex" : "hidden"
                            }  w-full sm:flex justify-center items-center border-solid border-gray border-t-2 `}
                          >
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
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsDisplay;

import React, { forwardRef, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  NavMenu,
  NavCart,
  NavProfile,
  NavDots,
  NavTopAccount,
  NavTopHeart,
  NavTopShare,
  NavTopPhone,
  NavTruck,
} from "../assets/icons";

import { Menu } from "../components";
import logo from "../assets/navbar-img/furnistore-logo.png";
import search from "../assets/navbar-img/search.png";

import { useSelector } from "react-redux";

import { useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = ({ handleLinkClick }) => {
  const { cartItems, items } = useSelector((c) => c.cart);
  const [navCartClicked, setNavCartClicked] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navRef = useRef();

  const totalItems = cartItems
    .map((item) => item.quantity)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);
  const subTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  const shipping = subTotal / (10 * 10);
  const grandTotal = subTotal + shipping;

  const [itemSearched, setItemSearched] = useState("");

  const itemFiltered = items.filter((item) =>
    item.name.toLowerCase().includes(itemSearched.toLowerCase())
  );

  const [showSearched] = useState(true);

  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function itemSearch(search) {
    setItemSearched(search);
  }

  function removeFeatures() {
    setToggleMenu(false);
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 170) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <header
        className={`sticky ${
          show ? "top-0" : "top-[-200rem]"
        } w-full z-30 transition-all duration-500`}
      >
        {/* Nav Top */}
        <nav className="hidden topReveal:flex w-full xl:px-[7.5%] bg-[#EEEEEE] justify-between">
          <div className="w-full py-2 px-10 flex gap-5">
            <div>
              <h1 className="cursor-pointer">PHP</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <NavTopAccount />
              <h1
                className="text-[.85rem] cursor-pointer"
                onClick={handleLinkClick}
              >
                My Account
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <NavTopHeart />
              <h1
                className="text-[.85rem] cursor-pointer"
                onClick={handleLinkClick}
              >
                My Wishlist{" "}
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <NavTopShare />
              <h1
                className="text-[.85rem] cursor-pointer"
                onClick={handleLinkClick}
              >
                Check Out{" "}
              </h1>
            </div>
          </div>

          <div className="w-full pr-5 xl:pr-10 flex justify-end items-center">
            <NavTopPhone />
            <h1 className="text-[.8rem] ml-2 ">
              Call our customer service at:
            </h1>
            <strong className="text-[.8rem]"> (09) - 123 456789</strong>
          </div>
        </nav>

        {/* Nav Center */}
        <nav className="w-full py-[1rem] topReveal:py-0 px-[1.2rem] md:px-[5%] topTruck:px-[1.2rem] xl:px-[10%] bg-[#2D3539]  text-white flex justify-center items-center gap-2 search:gap-5 md:gap-[3.5rem]">
          <div
            className="w-max p-[1.5px] bg-gray-200 bg-opacity-30 rounded topReveal:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <NavMenu />
          </div>

          <img
            src={logo}
            alt="logo"
            className="w-[50%] sm:w-[30%] topReveal:w-[25%]"
          />

          <div className="w-50% search:w-[45%] pl-[.5rem] flex flex-col items-center bg-gray-200 bg-opacity-10 rounded relative">
            <div className="w-full flex pl-[.5rem] items-center">
              <img
                src={search}
                alt="search"
                className="hidden search:block search:w-[20px]"
              />
              <input
                type="text"
                placeholder="Search the store"
                className=" w-full h-full py-[.5rem] search:px-[1rem] bg-transparent placeholder:text-[.85rem] active:ring-0 outline-none"
                onChange={(e) => itemSearch(e.currentTarget.value)}
              />
              <div className="hidden topReveal:block h-full py-[.5rem] px-[1rem] bg-[#00A693]">
                <h1> Search </h1>
              </div>
            </div>
            <div className="w-[15rem] sm:w-full flex flex-col justify-center items-center absolute right-0 top-10">
              {itemSearched.length > 0 &&
                showSearched &&
                itemFiltered.map((item, i) => {
                  return (
                    <Link
                      to="/product"
                      state={{ productData: item }}
                      key={i}
                      onClick={() => removeFeatures()}
                    >
                      <div className="w-full flex justify-center items-center bg-white text-black border-solid border-b-2 border-gray-300 z-20">
                        <div className="w-[30%]">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="w-[70%] flex flex-col justify-center items-start">
                          <h1 className="text-[.8rem]">{item.name}</h1>
                          <strong className="text-[.7rem] text-red-500">
                            PHP {item.price.toLocaleString()}
                          </strong>
                        </div>
                      </div>
                    </Link>
                  );
                })}

              {itemFiltered.length === 0 && (
                <div className="w-full flex justify-center items-center bg-white text-black border-solid border-b-2 border-gray-300 z-20 overflow-hidden">
                  <h1 className="text-[.8rem]">
                    No products result for '{itemSearched}'
                  </h1>
                </div>
              )}
            </div>
          </div>

          <div className="w-[22%] hidden topTruck:flex items-center">
            <NavTruck />
            <div className="pl-2 flex flex-col">
              <h1 className="text-[.85rem] font-bold hover:text-[#00A693] transition cursor-pointer ">
                Enjoy Free Shipping
              </h1>
              <span className="text-[.7rem]"> & No Sales Tax </span>
            </div>
          </div>

          <div className="hidden topReveal:block w-[20%] bg-[#00A693] p-5 pb-2 relative">
            <div
              className="flex flex-col justify-center items-center text-center "
              onClick={() => setNavCartClicked((val) => !val)}
            >
              <NavCart width="w-6" height="h-6" />
              <h1 className="text-[.8rem] font-bold"> MY CART </h1>
              <p className="text-[.8rem]">
                {cartItems.length}-{cartItems.length > 1 ? "items" : "item"} -
                PHP
                {grandTotal.toLocaleString()}
              </p>
            </div>

            <div
              className={`w-[20rem] ${
                navCartClicked ? "opacity-1 visible" : "opacity-0 invisible"
              } flex flex-col bg-white text-black absolute top-[5.6rem] right-0 transition-all z-10`}
            >
              {cartItems.map((item, i) => {
                return (
                  <div className="w-full flex" key={i}>
                    <div className="w-[30%]">
                      <img src={item.image} alt={item.id} />
                    </div>

                    <div className="w-[60%] p-2 flex flex-col justify-center">
                      <h1 className="text-[.8rem]">{item.brand}</h1>
                      <span className="text-[.8rem]">{item.name}</span>
                      <strong className="text-[.9rem] text-[#00A693]">
                        PHP{item.price.toLocaleString()}
                      </strong>
                    </div>

                    <div className="w-[10%] flex flex-col justify-center">
                      <h1>x{item.quantity}</h1>
                    </div>
                  </div>
                );
              })}

              <div className="w-full p-2 flex justify-center items-center gap-5">
                {cartItems.length > 0 && (
                  <Link to="/receipt">
                    <button className="px-4 py-2 text-[.8rem] text-white bg-[#444] hover:bg-black cursor-pointer transition-all ">
                      Check Out Now
                    </button>
                  </Link>
                )}

                <Link
                  to="/cart"
                  onClick={handleLinkClick}
                  className={cartItems.length < 1 ? "w-full" : ""}
                >
                  <button
                    className={`${
                      cartItems.length < 1 && "w-full"
                    } px-4 py-2 text-[.8rem] text-white bg-[#00A396] hover:bg-black cursor-pointer transition-all `}
                  >
                    View Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Nav Bottom */}
        <nav className="w-full  xl:px-[9%] bg-[#444444] text-white flex justify-center items-center topReveal:justify-start">
          <Link
            to="/cart"
            className="w-[25%]  py-2  flex flex-col justify-center items-center topReveal:hidden relative"
          >
            <NavCart width="w-5" height="h-5" />
            <h1 className="text-[.7rem]">CART</h1>

            <div
              className={`${
                totalItems < 1 && "hidden"
              } w-[15px] h-[15px] flex justify-center items-center rounded-full bg-[#00A693]  text-[.5rem] absolute top-1 right-[25%] mdsm:right-[30%] sm:right-[35%] search:right-[40%] `}
            >
              {totalItems}
            </div>
          </Link>
          <div className="w-[25%] py-2 flex flex-col justify-center items-center topReveal:hidden">
            <NavProfile />
            <h1 className="text-[.7rem]">SIGN IN</h1>
          </div>
          <div
            className="w-[25%] py-2 flex flex-col justify-center items-center topReveal:hidden"
            onClick={() => setToggleMenu(true)}
          >
            <NavDots />
            <h1 className="text-[.7rem]">MORE</h1>
          </div>
          <div className="w-[25%]  py-2 flex flex-col justify-center items-center topReveal:hidden">
            <h1 className="font-bold text-[.9rem]">PHP</h1>
          </div>

          <div
            className="hidden w-[70%] topTruck:w-[60%] px-[3rem] topTruck:px-[1rem]  topReveal:flex justify-center items-center "
            ref={navRef}
          >
            <div className="w-[20%] py-2 flex justify-center items-center hover:bg-[#00A693] transition cursor-pointer">
              <Link to="/" onClick={handleLinkClick}>
                <h1>HOME</h1>
              </Link>
            </div>

            <div className="w-[20%] group py-2 flex justify-center items-center relative hover:bg-[#00A693] transition-all cursor-pointer ">
              <Link to="/collections" onClick={handleLinkClick}>
                <h1>COLLECTIONS</h1>
              </Link>
              <div className="w-[50rem] xl:w-[70rem] invisible group-hover:visible opacity-0 group-hover:opacity-[1] bg-white flex justify-center items-center absolute top-10 -left-20  z-10 transition-all duration-300">
                <div className="w-full  text-black grid grid-cols-4 cursor-default">
                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong className="hover:text-[#00A693] transition-all cursor-pointer">
                      ARTS
                    </strong>
                    <div className="w-full">
                      <img
                        src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/k/1__94253.original.jpg"
                        alt="arts"
                        className="hover:opacity-[.90] cursor-pointer"
                      />
                    </div>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          5D DIY Diamond Painting
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          DIY Apparel Sewing & Fabric
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Needle Arts & Craft
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Scrapbook & Stamping
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong className="hover:text-[#00A693] transition-all cursor-pointer">
                      FESTIVAL
                    </strong>
                    <div className="w-full">
                      <img
                        src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/n/2__80649.original.jpg"
                        alt="arts"
                        className="hover:opacity-[.90] cursor-pointer"
                      />
                    </div>

                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Artificial & Dried Flowers
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Ballons
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Event & Party
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Gift Bags & Boxes
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong className="hover:text-[#00A693] transition-all cursor-pointer">
                      FURNITURE
                    </strong>
                    <div className="w-full">
                      <img
                        src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/f/3__09860.original.jpg"
                        alt="arts"
                        className="hover:opacity-[.90] cursor-pointer"
                      />
                    </div>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          5D DIY Diamond Painting
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          DIY Apparel Sewing & Fabric
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Needle Arts & Craft
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Scrapbook & Stamping
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong className="hover:text-[#00A693] transition-all cursor-pointer">
                      HOME TEXTILE
                    </strong>
                    <div className="w-full">
                      <img
                        src="https://cdn11.bigcommerce.com/s-7t2otzytl5/images/stencil/460x300/i/untitled-1__07918.original.jpg"
                        alt="arts"
                        className="hover:opacity-[.90] cursor-pointer"
                      />
                    </div>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          5D DIY Diamond Painting
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          DIY Apparel Sewing & Fabric
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Needle Arts & Craft
                        </li>
                      </Link>
                      <Link to="/collections" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Scrapbook & Stamping
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[20%] group py-2 flex justify-center items-center relative hover:bg-[#00A693] transition cursor-pointer">
              <Link to="/shop" onClick={handleLinkClick}>
                <h1>SHOP</h1>
              </Link>
              <div className="w-[50rem] xl:w-[50rem] invisible group-hover:visible opacity-0 group-hover:opacity-[1] bg-white flex justify-center items-center absolute top-10 left-[-13rem]  z-10 transition-all duration-300">
                <div className="w-full  text-black grid grid-cols-4 cursor-default">
                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong>HOME DECOR</strong>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Figurines & Miniatures
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Painting & Calligraphy
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Wall Clocks
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Wall Stickers
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong> HOME STORAGE </strong>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Drawer Organizers
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Makeup Organizers
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Laundry Baskets
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Storage Boxes & Bins
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong> GARDEN SUPPLIES</strong>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Flower Pots & Planters
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Garden Water Timers
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Repellents
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Watering Kits
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="w-full p-5 flex flex-col gap-3">
                    <strong> HOUSEHOLD </strong>
                    <ul className="text-[.9rem] leading-[2rem]">
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Bathroom Scales
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Dust Covers
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Hand Push Sweepers
                        </li>
                      </Link>
                      <Link to="/shop" onClick={handleLinkClick}>
                        <li className="hover:text-[#00A693] transition-colors cursor-pointer">
                          Umbrellas
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[20%] py-2 flex justify-center items-center hover:bg-[#00A693] transition cursor-pointer">
              <Link to="/brand" onClick={handleLinkClick}>
                <h1>BRAND</h1>
              </Link>
            </div>

            <div className="w-[20%] py-2 flex justify-center items-center hover:bg-[#00A693] transition cursor-pointer">
              <Link to="/blog-page" onClick={handleLinkClick}>
                <h1>BLOG</h1>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

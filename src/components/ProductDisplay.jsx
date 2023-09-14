import React, { useState } from "react";

import banner from "../assets/navbar-img/productDisplay-banner.jpg";
import sidebar from "../assets/navbar-img/sidebar.png";

import up from "../assets/navbar-img/quantity-up.png";
import down from "../assets/navbar-img/quantity-down.png";

import { Asidebar, Sidebar } from "../components";

import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  increaseDisplay,
  decreaseDisplay,
} from "../features/cartSlice";

const ProductDisplay = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { id, name, sku, brand, price, image, desc } =
    location.state.productData;

  const [showReviews, setShowReviews] = useState(false);
  const { items } = useSelector((c) => c.cart);

  const itemQuantity = items.find((item) => item.id === id);

  // Sidebar
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      {toggleSidebar && (
        <div
          className="w-full h-[100vh] fixed top-0 bg-black bg-opacity-[.7]"
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
          <strong className="text-[2rem]">{name}</strong>
        </div>
      </div>

      <div className="w-full bg-[#eee] flex justify-center items-center ">
        <div className="w-[90%] lg:w-[75%] py-10 flex flex-col lg:flex-row justify-center gap-5 ">
          <Asidebar />
          <div
            className="w-max md:hidden p-2 flex items-center bg-white"
            onClick={() => setToggleSidebar(true)}
          >
            <img src={sidebar} alt="sidebar" className="w-[25px] h-[25px]" />
            <h1>SIDEBAR</h1>
          </div>

          <div className="w-full lg:w-[75%]">
            <div className="w-full bg-white rounded py-5 flex flex-col lg:flex-row jc ">
              <div className="w-full lg:w-[45%] flex justify-center items-center ">
                <img src={image} alt={id} />
              </div>
              <div className="flex flex-col p-3 md:p-10 xl:p-0 justify-center items-start gap-3">
                <strong className="text-[1.4rem]"> {name} </strong>
                <div className="text-[.85rem] flex flex-col lg:flex-row justify-center items-start lg:items-center gap-2">
                  <div className="flex justify-center items-center gap-2">
                    <h3>Write a review</h3>
                    <h3>(No reviews yet)</h3>
                  </div>
                </div>
                <strong className="text-red-500 text-[1.7rem]">
                  PHP {price.toLocaleString()}
                </strong>
                <div className="w-full text-[.8rem] lg:text-[1rem] flex justify-between">
                  <span>Brand</span>
                  <span>{brand}</span>
                </div>
                <div className="w-full text-[.8rem] lg:text-[1rem] flex justify-between">
                  <span>SKU</span>
                  <span>{sku}</span>
                </div>

                <h3>Quantity: </h3>
                <div className="w-max  flex justify-center items-center border-solid border-2 border-black border-opacity-[.5]">
                  <div className="w-full px-4 py-2 flex justify-center items-center ">
                    {itemQuantity.quantity}
                  </div>
                  <div className="w-full h-full flex flex-col px-3 ">
                    <div onClick={() => dispatch(increaseDisplay(id))}>
                      <img
                        src={up}
                        alt="up"
                        className="w-[30px] cursor-pointer"
                      />
                    </div>
                    <div onClick={() => dispatch(decreaseDisplay(id))}>
                      <img
                        src={down}
                        alt="down"
                        className="w-[30px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:text-[.65rem] xl:text-[1rem] flex flex-col lg:flex-row gap-2">
                  <button
                    className="px-7 py-2 bg-[#00A693] hover:bg-opacity-[.9] text-white transition-all"
                    onClick={() => dispatch(addItem(id))}
                  >
                    ADD TO CART
                  </button>
                  <button className="px-7 py-2 bg-[#F2F3F4] hover:bg-[black] hover:text-[white] transition-all">
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full bg-white mt-10 flex flex-col">
              <div className="w-full lg:w-auto flex flex-col md:flex-row items-start ">
                <div
                  className={`w-full md:w-auto flex justify-center items-center px-7 py-3 hover:bg-[#00A693] ${
                    !showReviews && "bg-[#00A693] text-white"
                  } hover:text-white transition-all cursor-pointer`}
                  onClick={() => setShowReviews(false)}
                >
                  <strong> DESCRIPTION </strong>
                </div>
                <div
                  className={`w-full md:w-auto flex justify-center items-center px-7 py-3 hover:bg-[#00A693] ${
                    showReviews && "bg-[#00A693] text-white"
                  } hover:text-white transition-all cursor-pointer`}
                  onClick={() => setShowReviews(true)}
                >
                  <strong> SHOW REVIEWS </strong>
                </div>
              </div>

              <div className="w-full h-full p-3 md:p-7">
                {showReviews ? (
                  <strong>0 Reviews</strong>
                ) : (
                  <p className="text-[.8rem]">{desc}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;

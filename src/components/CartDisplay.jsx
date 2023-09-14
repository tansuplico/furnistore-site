import React, { useState } from "react";

import banner from "../assets/navbar-img/productDisplay-banner.jpg";

import plus from "../assets/navbar-img/plus.png";
import minus from "../assets/navbar-img/minus.png";

import remove from "../assets/navbar-img/dark-close.png";
import { useDispatch, useSelector } from "react-redux";

import { removeItem, increase, decrease } from "../features/cartSlice";

import { Link } from "react-router-dom";

const CartDisplay = () => {
  const { cartItems } = useSelector((c) => c.cart);
  const dispatch = useDispatch();
  const subTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  const shipping = subTotal / (10 * 100);
  const grandTotal = subTotal + shipping;
  const finalGrandTotal = grandTotal.toFixed(2);

  console.log(subTotal);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="w-full h-[13rem] bg-center bg-no-repeat bg-cover flex justify-center items-center text-white"
      >
        <div className="flex flex-col justify-center items-center">
          <strong className="text-[2rem]">Your Cart</strong>
        </div>
      </div>
      <div className="w-[90%] lg:w-[75%] py-10 flex justify-center items-start">
        {cartItems.length === 0 ? (
          <div className="w-full flex flex-col justify-center items-start gap-5">
            <strong className="text-[1.5rem]">Your Cart (0 items)</strong>
            <strong className="text-[1.5rem]">Your Cart is empty</strong>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-start ">
            <strong className="text-[1.3rem]">
              Your Cart ({cartItems.length} items){" "}
            </strong>

            <div className="w-full grid grid-cols-10">
              <div className="hidden w-full bg-[#d0d0d0] px-4 py-3 md:grid col-span-10 grid-cols-10">
                <div className="col-span-1 ">
                  <h1>ITEMS</h1>
                </div>

                <div className="flex justify-center items-center  col-span-4"></div>

                <div className="flex justify-center items-center col-span-2">
                  <h1>PRICE</h1>
                </div>

                <div className="flex justify-center items-center col-span-1">
                  <h1>QUANTITY</h1>
                </div>

                <div className="flex justify-end items-center col-span-2">
                  <h1>TOTAL</h1>
                </div>
              </div>

              <div
                className="w-full  px-4 py-3 grid col-span-10 grid-cols-10 "
                key={1}
              >
                {cartItems.map((item, i) => {
                  return (
                    <div
                      className="w-full grid grid-cols-10 col-span-10"
                      key={i}
                    >
                      <div className="w-full flex flex-col justify-center items-center col-span-10 border-solid border-2 border-gray-300 md:border-none md:col-span-10 md:grid md:grid-cols-10 ">
                        <div className="w-full flex justify-between md:col-span-5">
                          <div className="w-[45%] search:w-full md:w-[30%] flex justify-start items-center col-span-1 ">
                            <img src={item.image} alt="" />
                          </div>

                          <div className="w-full text-[.8rem] search:text-[1.2rem] md:text-[1rem] flex flex-col justify-center items-start md:items-center col-span-4">
                            <h1>{item.brand}</h1>
                            <strong>{item.name}</strong>

                            <div className="flex items-center gap-1">
                              <span> EULA: </span> <span> 3rd Jan 2019 </span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-auto p-2 flex justify-center items-center col-span-2 gap-3">
                          <h1 className="md:hidden">Price: </h1>
                          <h1>PHP {item.price.toLocaleString()}</h1>
                        </div>

                        <div className="w-full md:w-auto p-2 flex justify-center items-center col-span-1 gap-3 ">
                          <h1 className="md:hidden"> Quantity </h1>
                          <div
                            className="border-solid border-2 border-gray-300 p-1"
                            onClick={() => dispatch(decrease(item.id))}
                          >
                            <img src={minus} alt="minus" className="w-[17px]" />
                          </div>
                          <strong> {item.quantity} </strong>
                          <div
                            className="border-solid border-2  border-gray-300 p-1"
                            onClick={() => dispatch(increase(item.id))}
                          >
                            <img src={plus} alt="plus" className="w-[17px]" />
                          </div>
                        </div>

                        <div className="p-2 flex justify-end items-center col-span-2 gap-3 ">
                          <h1 className="md:hidden">Total: </h1>

                          <strong>
                            PHP {(item.price * item.quantity).toLocaleString()}
                          </strong>

                          <div
                            className="bg-gray-300 rounded-full p-1 cursor-pointer "
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <img
                              src={remove}
                              alt="remove"
                              className="w-[15px] h-[15px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full  px-4 py-3 grid col-span-10 grid-cols-10">
                <div className="w-full flex flex-col justify-center items-end col-span-5  gap-2">
                  <strong>Subtotal: </strong>
                  <strong>Shipping: </strong>
                  <strong className="text-[1.3rem]">Grand total: </strong>
                </div>

                <div className="w-full flex flex-col justify-center items-end col-span-5  gap-2">
                  <strong>PHP {subTotal.toLocaleString()}</strong>
                  <strong>PHP {shipping.toFixed(2)} </strong>
                  <strong className="text-[1.3rem]">
                    PHP {finalGrandTotal}
                  </strong>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-end items-center gap-3 ">
              <Link to="/receipt">
                <button className="py-2 px-10 flex justify-center items-end bg-[#444] hover:bg-[#00A693] rounded text-white transition-all">
                  Check Out
                </button>
              </Link>

              <span> or use </span>

              <a href="https://www.paypal.com/checkoutnow?token=EC-9JE48602AY153493C&useraction=continue">
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;

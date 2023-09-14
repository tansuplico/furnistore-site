import React, { useState } from "react";

import { Link } from "react-router-dom";

import paypal from "../assets/navbar-img/receipt-paypal.png";
import visa from "../assets/navbar-img/receipt-visa.png";
import mastercard from "../assets/navbar-img/receipt-mastercard.png";
import amex from "../assets/navbar-img/receipt-amex.png";
import { useSelector } from "react-redux";

const Receipt = () => {
  const [formFilled, setFormFilled] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showFirstNameWarning, setShowFirstNameWarning] = useState(false);
  const [showLastNameWarning, setShowLastNameWarning] = useState(false);
  const [showNumberWarning, setShowNumberWarning] = useState(false);
  const [showAddressWarning, setShowAddressWarning] = useState(false);
  const [showAsbWarning, setShowAsbWarning] = useState(false);
  const [showCityWarning, setShowCityWarning] = useState(false);
  const [showCountryWarning, setShowCountryWarning] = useState(false);
  const [showStateOrProvinceWarning, setShowStateOrProvinceWarning] =
    useState(false);
  const [showPostalWarning, setShowPostalWarning] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [asb, setAsb] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [stateOrProvince, setStateOrProvince] = useState("");
  const [postal, setPostal] = useState("");

  const [payment, setPayment] = useState("Paypal");

  const { cartItems } = useSelector((c) => c.cart);

  const subTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  const shipping = subTotal / (10 * 10);

  const grandTotal = subTotal + shipping;

  const totalItems = cartItems
    .map((item) => item.quantity)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);

  function checkInputs() {
    if (
      email.length > 1 &&
      email.includes("@") &&
      firstName.length > 1 &&
      lastName.length > 1 &&
      number.length === 11 &&
      address.length > 1 &&
      asb.length > 1 &&
      city.length > 1 &&
      country.length > 1 &&
      stateOrProvince.length > 1 &&
      postal.length === 4
    ) {
      setFormFilled(true);
      setShowEmailWarning(false);
      setShowFirstNameWarning(false);
      setShowLastNameWarning(false);
      setShowNumberWarning(false);
      setShowAddressWarning(false);
      setShowAsbWarning(false);
      setShowCityWarning(false);
      setShowCountryWarning(false);
      setShowStateOrProvinceWarning(false);
      setShowPostalWarning(false);
    } else {
      setShowEmailWarning(email.length < 1 || !email.includes("@"));
      setShowFirstNameWarning(firstName.length < 1);
      setShowLastNameWarning(lastName.length < 1);
      setShowNumberWarning(number.length !== 11);
      setShowAddressWarning(address.length < 1);
      setShowAsbWarning(asb.length < 1);
      setShowCityWarning(city.length < 1);
      setShowCountryWarning(country.length < 1);
      setShowStateOrProvinceWarning(stateOrProvince.length < 1);
      setShowPostalWarning(postal.length < 1);
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-[90%] lg:w-[75%] flex flex-col lg:flex-row  justify-center items-start gap-5 ">
        <div className="w-full lg:w-[65%] py-10 flex flex-col justify-center items-center gap-3 ">
          {formFilled ? (
            <>
              <div className="w-full ">
                <h1 className="text-[1.4rem] ">Customer</h1>

                <div className="py-5">
                  <h1>
                    Email: <strong> {email}</strong>
                  </h1>
                </div>
              </div>

              <div className="w-full ">
                <h1 className="text-[1.4rem] mb-2">Shipping</h1>

                <div className="py-5 ">
                  <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col  ">
                      <h1>
                        First Name:
                        <strong>{firstName}</strong>
                      </h1>
                    </div>

                    <div className="w-full flex flex-col ">
                      <h1>
                        Last Name: <strong> {lastName} </strong>
                      </h1>
                    </div>
                  </div>

                  <div className="w-full ">
                    <h1>
                      Phone Number: <strong>{number}</strong>
                    </h1>
                  </div>

                  <div className="w-full ">
                    <h1>
                      Address: <strong>{address}</strong>
                    </h1>
                  </div>

                  <div className="w-full ">
                    <h1>
                      Apartment / Suite / Building : <strong>{asb}</strong>
                    </h1>
                  </div>

                  <div className="w-full ">
                    <h1>
                      City: <strong> {city} </strong>
                    </h1>
                  </div>

                  <div className="w-full ">
                    <h1>
                      Country : <strong> {country} </strong>
                    </h1>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col  ">
                      <h1>
                        State / Province : <strong> {stateOrProvince} </strong>
                      </h1>
                    </div>

                    <div className="w-full flex flex-col ">
                      <h1>
                        Postal : <strong> {postal} </strong>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3 lg:gap-0">
                <h1>Payment</h1>

                <div className="w-fuil flex flex-col justify-center items-start border-solid border-2 border-gray-300">
                  <div className="w-full px-3 sm:px-5 flex justify-between items-center border-solid border-b-2 border-gray-300">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="payment"
                        className="w-[20px]"
                        value="Paypal"
                        onChange={(e) => setPayment(e.currentTarget.value)}
                      />{" "}
                      <img
                        src={paypal}
                        alt="paypal"
                        className="w-[4rem] sm:w-[5rem] h-max"
                      />
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <img
                        src={visa}
                        alt="visa"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                      <img
                        src={mastercard}
                        alt="mc"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                      <img
                        src={amex}
                        alt="amex"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:px-5 flex justify-between items-center ">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="payment"
                        className="w-[20px]"
                        value="Credit"
                        onChange={(e) => setPayment(e.currentTarget.value)}
                      />
                      <strong className="text-[.8rem]">Test Gateway</strong>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <img
                        src={visa}
                        alt="visa"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                      <img
                        src={mastercard}
                        alt="mc"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                      <img
                        src={amex}
                        alt="amex"
                        className="w-[1.4rem] sm:w-[3rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
                href={
                  payment === "Credit"
                    ? "https://www.americanexpress.com/en-us/account/login"
                    : "https://www.paypal.com/checkoutnow?token=EC-9JE48602AY153493C&useraction=continue"
                }
                className="w-full"
              >
                <button
                  className="w-full bg-[#444] text-white p-5"
                  onClick={() => setFormFilled(true)}
                >
                  Continue with {payment}
                </button>
              </a>
            </>
          ) : (
            <>
              <div className="w-full ">
                <h1 className="text-[1.4rem] ">Customer</h1>

                <div className="py-5">
                  <div className="text-[.8rem] flex items-center gap-2 ">
                    <label>Email: </label>
                    {showEmailWarning && (
                      <h1 className="text-red-500">
                        Email Address is required
                      </h1>
                    )}
                  </div>
                  <input
                    type="email"
                    className={`w-full p-3 border-solid border-2 border-gray-300 ${
                      showEmailWarning && "border-red-500"
                    }`}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
              </div>

              <div className="w-full ">
                <h1 className="text-[1.4rem] mb-2">Shipping</h1>

                <div className="py-5 ">
                  <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col  ">
                      <div className="text-[.8rem] flex items-center gap-2 ">
                        <label>First Name: </label>
                        {showFirstNameWarning && (
                          <h1 className="text-red-500">
                            First Name is required
                          </h1>
                        )}
                      </div>
                      <input
                        type="text"
                        className={`w-full p-2 border-solid border-2 border-gray-300 ${
                          showFirstNameWarning && "border-red-500"
                        }`}
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                      />
                    </div>

                    <div className="w-full flex flex-col ">
                      <div className="text-[.8rem] flex items-center gap-2 ">
                        <label>Last Name</label>
                        {showLastNameWarning && (
                          <h1 className="text-red-500">
                            Last Name is required
                          </h1>
                        )}
                      </div>
                      <input
                        type="email"
                        className={`w-full p-2 border-solid border-2 border-gray-300 ${
                          showLastNameWarning && "border-red-500"
                        }`}
                        onChange={(e) => setLastName(e.currentTarget.value)}
                      />
                    </div>
                  </div>

                  <div className="w-full ">
                    <div className="text-[.8rem] flex items-center gap-2 ">
                      <label>Phone number</label>
                      {showNumberWarning && (
                        <h1 className="text-red-500">
                          Phone number is required
                        </h1>
                      )}
                    </div>
                    <input
                      type="text"
                      className={`w-full p-2 border-solid border-2 border-gray-300 ${
                        showNumberWarning && "border-red-500"
                      }`}
                      maxLength={11}
                      onChange={(e) => setNumber(e.currentTarget.value)}
                    />
                  </div>

                  <div className="w-full ">
                    <div className="text-[.8rem] flex items-center gap-2 ">
                      <label>Address</label>
                      {showAddressWarning && (
                        <h1 className="text-red-500">Address is required</h1>
                      )}
                    </div>
                    <input
                      type="text"
                      className={`w-full p-2 border-solid border-2 border-gray-300 ${
                        showAddressWarning && "border-red-500"
                      }`}
                      onChange={(e) => setAddress(e.currentTarget.value)}
                    />
                  </div>

                  <div className="w-full ">
                    <div className="text-[.8rem] flex items-center gap-2 ">
                      <label>Apartment / Suite / Building</label>
                      {showAsbWarning && (
                        <h1 className="text-red-500">
                          Apartment / Suite / Building is required
                        </h1>
                      )}
                    </div>
                    <input
                      type="text"
                      className={`w-full p-2 border-solid border-2 border-gray-300 ${
                        showAsbWarning && "border-red-500"
                      }`}
                      onChange={(e) => setAsb(e.currentTarget.value)}
                    />
                  </div>

                  <div className="w-full ">
                    <div className="text-[.8rem] flex items-center gap-2 ">
                      <label className="text-[.8rem]">City</label>
                      {showCityWarning && (
                        <h1 className="text-red-500">City is required</h1>
                      )}
                    </div>
                    <input
                      type="text"
                      className={`w-full p-2 border-solid border-2 border-gray-300 ${
                        showCityWarning && "border-red-500"
                      }`}
                      onChange={(e) => setCity(e.currentTarget.value)}
                    />
                  </div>

                  <div className="w-full ">
                    <div className="text-[.8rem] flex items-center gap-2 ">
                      <label className="text-[.8rem]">Country</label>
                      {showCountryWarning && (
                        <h1 className="text-red-500">Country is required</h1>
                      )}
                    </div>
                    <input
                      type="text"
                      className={`w-full p-2 border-solid border-2 border-gray-300 ${
                        showCountryWarning && "border-red-500"
                      }`}
                      onChange={(e) => setCountry(e.currentTarget.value)}
                    />
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-full flex flex-col">
                      <div className="text-[.8rem] flex items-center gap-2 ">
                        <label> State / Province </label>
                        {showStateOrProvinceWarning && (
                          <h1 className="text-red-500">
                            State / Province is required
                          </h1>
                        )}
                      </div>
                      <input
                        type="email"
                        className={`w-full p-2 border-solid border-2 border-gray-300 ${
                          showStateOrProvinceWarning && "border-red-500"
                        }`}
                        onChange={(e) =>
                          setStateOrProvince(e.currentTarget.value)
                        }
                      />
                    </div>

                    <div className="w-full flex flex-col ">
                      <div className="text-[.8rem] flex items-center gap-2 ">
                        <label>Postal Code</label>
                        {showPostalWarning && (
                          <h1 className="text-red-500">
                            Postal Code is required
                          </h1>
                        )}
                      </div>
                      <input
                        type="email"
                        className={`w-full p-2 border-solid border-2 border-gray-300 ${
                          showPostalWarning && "border-red-500"
                        }`}
                        onChange={(e) => setPostal(e.currentTarget.value)}
                      />
                    </div>
                  </div>
                </div>

                {!formFilled && (
                  <button
                    className="w-full bg-[#444] text-white p-5"
                    onClick={() => checkInputs()}
                    type="submit"
                  >
                    Save Information
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        <div className="w-full lg:w-[35%] mt-10  flex flex-col justify-center items-center  ">
          <div className="w-full  flex flex-col justify-start items-center border-solid border-2 border-gray-300">
            <div className="w-full p-4 pb-2 flex justify-between items-center border-solid border-b-2 border-gray-300 ">
              <h1>Order Summary </h1>
              <Link to="/cart">
                <span className="text-[#00A693]"> Edit Cart </span>
              </Link>
            </div>

            <div className="w-full p-4 flex flex-col justify-start items-start gap-5">
              <h1 className="text-[.8rem] my-2">
                {totalItems} {totalItems > 1 ? "items" : "item"}
              </h1>

              {cartItems.map((item, i) => {
                return (
                  <div
                    className="w-full flex justify-start items-center"
                    key={i}
                  >
                    <div className="w-[20%]">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="w-[50%] text-[.5rem] sm:text-[.7rem] lg:text-[.5rem] xl:text-[.7rem] flex flex-col justify-center items-center">
                      <h1>
                        {item.quantity}x {item.name}
                      </h1>
                      <span>{item.brand}</span>
                    </div>

                    <div className="w-[30%] text-[.7rem] sm:text-[1rem] lg:text-[.7rem] xl:text-[1rem] flex flex-col justify-center items-center">
                      <strong>
                        PHP {(item.price * item.quantity).toLocaleString()}
                      </strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full p-4 flex flex-col gap-3 text-[.8rem]">
              <div className="w-full flex justify-between items-center">
                <h1>Subtotal: </h1>
                <strong> PHP {subTotal} </strong>
              </div>

              <div className="w-full flex justify-between items-center">
                <h1>Shipping: </h1>
                <strong> PHP {shipping.toFixed(2)} </strong>
              </div>

              <div className="w-full flex justify-between items-center">
                <h1>Tax: </h1>
                <strong> PHP 0 </strong>
              </div>
            </div>

            <div className="w-full p-4 flex justify-between items-center">
              <strong>Total (PHP) </strong>
              <strong>PHP {grandTotal.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;

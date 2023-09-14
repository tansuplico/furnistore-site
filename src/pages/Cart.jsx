import React from "react";
import { Footer, Navbar, CartDisplay } from "../components";

const Cart = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <CartDisplay />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default Cart;

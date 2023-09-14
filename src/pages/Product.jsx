import React from "react";
import { Navbar, Footer } from "../components";

import { ProductDisplay } from "../components";

export default function Product() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <>
      <Navbar handleLinkClick={handleLinkClick} />
      <ProductDisplay />
      <Footer handleLinkClick={handleLinkClick} />
    </>
  );
}

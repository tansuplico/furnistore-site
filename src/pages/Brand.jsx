import React from "react";
import { Footer, Navbar, BrandContent } from "../components";

const Brand = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <BrandContent />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default Brand;

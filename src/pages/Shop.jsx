import React from "react";
import { Footer, Navbar, CollectionsDisplay } from "../components";

const Shop = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <CollectionsDisplay bannerName="Shop" linkName="shop" />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default Shop;

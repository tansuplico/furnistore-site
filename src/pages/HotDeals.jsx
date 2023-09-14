import React from "react";
import { Footer, Navbar, CollectionsDisplay } from "../components";

const HotDeals = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <CollectionsDisplay bannerName="Hot Deals" linkName="hot-deals" />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default HotDeals;

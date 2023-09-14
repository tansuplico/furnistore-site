import React from "react";
import { Footer, Navbar, CollectionsDisplay } from "../components";

const Collections = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <CollectionsDisplay bannerName="Collections" linkName="collections" />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default Collections;

import React from "react";
import { Footer, Navbar, CollectionsDisplay } from "../components";

const TodayDeals = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <CollectionsDisplay bannerName="Today Deals" linkName="today-deals" />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default TodayDeals;

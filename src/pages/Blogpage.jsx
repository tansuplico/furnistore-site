import React from "react";
import { Footer, Navbar, BlogContent } from "../components";

const Blogpage = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <div>
      <Navbar handleLinkClick={handleLinkClick} />
      <BlogContent />
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default Blogpage;

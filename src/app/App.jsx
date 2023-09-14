import "../styles/App.css";
import React from "react";
import { useRef, useEffect, useState } from "react";

import {
  Navbar,
  Banner,
  Deals,
  Featured,
  New,
  Feedback,
  HotCategories,
  Blog,
  Brands,
  Footer,
} from "../components";

function App() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <>
      <Navbar handleLinkClick={handleLinkClick} />
      <Banner />
      <Deals />
      <Featured />
      <New />
      <Feedback />
      <HotCategories />
      <Blog />
      <Brands />
      <Footer handleLinkClick={handleLinkClick} />
    </>
  );
}

export default App;

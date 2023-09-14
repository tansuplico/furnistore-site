import React from "react";
import { Navbar, Footer } from "../components";

import { ReceiptDisplay } from "../components";

export default function Receipt() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setShowSearched(false);
  };
  return (
    <>
      <Navbar handleLinkClick={handleLinkClick} />
      <ReceiptDisplay />
      <Footer handleLinkClick={handleLinkClick} />
    </>
  );
}

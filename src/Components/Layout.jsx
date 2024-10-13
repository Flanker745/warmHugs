import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const [searchQuery, setSearchQuery] = useState(""); // Add state for search query

  return (
    <>
    <Header setSearchQuery={setSearchQuery}  />
      <Outlet context={{ searchQuery }} /> {/* Pass searchQuery to Outlet */}
      <Footer />
    </>
  );
}

export default Layout;

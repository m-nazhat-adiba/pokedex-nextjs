import React from "react";
import NavBar from "../navigation/NavBar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

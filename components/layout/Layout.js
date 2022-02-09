import React from "react";
import Header from "./Header";
import LeftNavbar from "./LeftNavbar";

const Layout = (props) => {
  return (
    <>
      <LeftNavbar />
      <Header />

      <main>{props.children}</main>
    </>
  );
};

export default Layout;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {

  return (
  <div>
    <Header />
    <Sidebar />
    <ul>
      <li>
        <Link to="/commission">Commission</Link>
      </li>
    </ul>
    <main>
      {/* Your main content goes here */}
    </main>
  </div>
  );
};

export default Layout;

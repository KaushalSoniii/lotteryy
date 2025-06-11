import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <ul>
        <li>
          <Link to="/commission">Commission</Link>
        </li>
      </ul>
      <main>{children}</main>
    </>
  );
};

export default Layout;

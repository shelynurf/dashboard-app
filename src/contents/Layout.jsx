import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserRouter from "../config/UserRouter";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Content from "./Content";

const Layout = () => {
  const expand = useSelector((state) => state.expander.exp);
  return (
    <div>
      <div className="dashboard">
        <div style={{ display: "flex" }}>
          {expand && (
            <div>
              <Sidebar />
            </div>
          )}

          <div style={{ width: "100%" }}>
            <Navbar />
            <UserRouter />
            {/* <Content/> */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;

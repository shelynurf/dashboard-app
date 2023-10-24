import React from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../config/Token";

const Sidebar = () => {
  const navigate = useNavigate();
  console.log("sidebar render")

  return (
    <aside className="sidebar">
      <div>
        <div className="list-menu-sidebar" onClick={() => navigate("/")}>
          <p style={{ margin: "0" }}>Home</p>
        </div>
        <div
          className="list-menu-sidebar"
          onClick={() => navigate("/about-us")}
        >
          <p style={{ margin: "0" }}>About</p>
        </div>
        <div className="list-menu-sidebar" onClick={() => navigate("/contact")}>
          <p style={{ margin: "0" }}>Contact</p>
        </div>
        {Token === "isAdmin" && (
          <div
            className="list-menu-sidebar"
            onClick={() => navigate("/setting")}
          >
            <p style={{ margin: "0" }}>Setting</p>
          </div>
        )}

      </div>
    </aside>
  );
};

export default Sidebar;

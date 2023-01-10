import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import { IconContext } from "react-icons";

{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE NAVBAR CONTENT) ------*/}
{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE NAVBAR CONTENT) ------*/}
{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE NAVBAR CONTENT) ------*/}

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <Link to="#">
          <div className="navbar">
            <div className="menu-bars" onClick={showSidebar}>
              <FaIcons.FaBars />
            </div>
          </div>
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-x">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
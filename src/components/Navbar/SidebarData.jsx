import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Team Profile",
    path: "/teamprofile",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Industry Data",
    path: "/industrydata",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "IT Work",
    path: "/itwork",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "IT Technologies",
    path: "/ittechnologies",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Project Idea",
    path: "/projectidea",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
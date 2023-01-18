import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi"

{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}
{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}
{/*------ DON'T CHANGE THIS PAGE, IT WILL BREAK THE NAVBAR LINKS ------*/}

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
    icon: <AiIcons.AiOutlineProfile />,
    cName: "nav-text",
  },
  {
    title: "Industry Data",
    path: "/industrydata",
    icon: <BsIcons.BsClipboardData />,
    cName: "nav-text",
  },
  {
    title: "IT Work",
    path: "/itwork",
    icon: <MdIcons.MdWorkOutline />,
    cName: "nav-text",
  },
  {
    title: "IT Technologies",
    path: "/ittechnologies",
    icon: <FaIcons.FaRobot />,
    cName: "nav-text",
  },
  {
    title: "Project Idea",
    path: "/projectidea",
    icon: <GoIcons.GoCircuitBoard />,
    cName: "nav-text",
  },
  {
    title: "Group Reflection",
    path: "/groupreflection",
    icon: <HiIcons.HiUserGroup />,
    cName: "nav-text",
  },
];
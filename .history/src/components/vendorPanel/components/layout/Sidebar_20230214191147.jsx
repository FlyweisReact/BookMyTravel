/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BiLogOutCircle ,BiCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import {FaProductHunt , FaUserCircle} from 'react-icons/fa'
import {GrUserManager} from 'react-icons/gr'

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: <GrUserManager className="text-xl mr-3" />,
      link: "/ven",
      name: "Vendors",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/tour",
      name: "Tours",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/product",
      name: "Packages",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/transaction",
      name: "Transactions",
    },
    {
      icon: <FaUserCircle className="text-xl mr-3" />,
      link: "/users",
      name: "Customers",
    },
    {
      icon: <BsFillCartFill className="text-xl mr-3" />,
      link: "/order",
      name: "Bookings",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/complaint",
      name: "Enquiry",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/complaint",
      name: "Blogs",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/msg",
      name: "Notification",
    },
   
    {
      icon: <BiCategory className="text-xl mr-3" />,
      link: "/category",
      name: "Categories",
    },
    
    {
      icon: <BiCategory className="text-xl mr-3" />,
      link: "/category",
      name: "Privacy policy",
    },
    
    {
      icon: <BiCategory className="text-xl mr-3" />,
      link: "/category",
      name: "Customer Support",
    },    
  ];

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/vendorLogin");
  };

  return (
    <>
      <div className="p-4 h-auto"   style={{
          backgroundColor: "#263544",
        }}>
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
        <span
            className="font-bold text-[rgb(241,146,46)]"
            style={{ fontSize: "2rem", textAlign: "center", color: "#fff" }}
          >
            Admin Panel
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="" style={{textDecoration : 'none'}}>
                <span className="flex my-3 items-center cursor-pointer    tracking-wider p-2 rounded-sm"  style={{ color: "#aac0bb"  , textDecoration : 'none'}}>
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer   tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#aac0bb" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

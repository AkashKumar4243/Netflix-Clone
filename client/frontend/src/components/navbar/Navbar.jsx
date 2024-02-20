import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../static/images/logo.png";
import profile_blue from "../../static/images/default-blue.png";
import { IoNotifications, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const TOP_OFFSET = 66;

const Navbar = () => {
  // create rotation of arrow

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={showBackground ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="Netflix logo" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New Collection</span>
          <span>Popular</span>
        </div>
        <div className="right">
          <IoSearch className="icon" />
          <span>KID</span>
          <IoNotifications className="icon" />
          <img src={profile_blue} alt="Default profile pic" />
          <div className="profile">
            <MdKeyboardArrowDown className="icon" />
            <div className="option">
              <span>Settings</span>
              <span>Logo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

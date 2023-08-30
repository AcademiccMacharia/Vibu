import React from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { PiNotificationLight } from "react-icons/pi";
import profile from "../../assets/profile-img.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="search">
        <FaSearch className="search-icon" size={16}/>
        <input
          type="text"
          placeholder="Search for artists, albums, playlists..."
        />
      </div>
      <div className="nav-right">
        <button className="profile">
          My profile <RiArrowRightSLine className="right-arrow" />
        </button>
        <div className="nav-right-img">
          <PiNotificationLight size={24}/>
          <img src={profile} alt="profile"/>
        </div>
      </div>
    </div>
  );
};

export default Header;

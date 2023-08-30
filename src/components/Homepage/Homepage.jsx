import React from "react";
import profile from "../../assets/profile-img.jpg";
import Header from "../Header/Header";
import "./homepage.css";

import Sidebar from "../Sidebar/Sidebar";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Sidebar />
      <div className="homepage-container">
        <div className="top-artists">
          <div className="top-artists-header">
            <div className="top-artists-left">
            <h4>Top Artists</h4>
            <p>-</p>
            <p>Top 50</p>
            </div>
            <div className="top-artists-right">
            <IoIosArrowDropleft size={30}/>
            <IoIosArrowDropright  className="icons" size={30}/>
            </div>
          </div>
        </div>
        <div className="player-container">
        <div className="now-playing"></div>
        <div className="most-played"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

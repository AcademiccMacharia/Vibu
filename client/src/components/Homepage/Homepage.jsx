import React from "react";
import robbery2 from "../../assets/robbery2.webp";
import robbery from "../../assets/robbery.webp";
import malone from "../../assets/post-malone.jpg";
import savage from "../../assets/savage.webp";
import Header from "../Header/Header";
import SpotifyPlayerDemo from "../Homepage/SpotifyPlayerDemo";
import { CgLoadbarSound } from "react-icons/cg";
import { BsPlay } from "react-icons/bs";
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
              <IoIosArrowDropleft size={30} />
              <IoIosArrowDropright className="icons" size={30} />
            </div>
          </div>
          <div className="artists-cards">
            <div className="artist-card">
              <img src={robbery} alt="profile" />
              <div className="artist-card-text">
                <h3>Robbery</h3>
                <p>Juice Wrld</p>
              </div>
            </div>
            <div className="artist-card">
              <img src={robbery2} alt="profile" />
              <div className="artist-card-text">
                <h3>Robbery</h3>
                <p>Juice Wrld</p>
              </div>
            </div>
            <div className="artist-card">
              <img src={malone} alt="profile" />
              <div className="artist-card-text">
                <h3>Stoney</h3>
                <p>Post Malone</p>
              </div>
            </div>
            <div className="artist-card">
              <img src={robbery2} alt="profile" />
              <div className="artist-card-text">
                <h3>Robbery</h3>
                <p>Juice Wrld</p>
              </div>
            </div>
            <div className="artist-card">
              <img src={savage} alt="profile" />
              <div className="artist-card-text">
                <h3>Bank Account</h3>
                <p>21 Savage</p>
              </div>
            </div>
          </div>
        </div>
        <div className="player-container">
          <h3>Most Played</h3>
          <div className="most-played-cards">
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>01</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>02</p>
                <img src={savage} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>03</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>04</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>05</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>06</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
            <div className="most-played-card">
              <div className="most-played-card-left">
                <p>07</p>
                <img src={malone} alt="malone" />
                <BsPlay size={24} />
                <h4>Rockstar</h4>
              </div>
              <p>Post Malone</p>
              <div className="most-played-card-right">
                <span>4:31</span>
                <CgLoadbarSound size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="spot-player">
          <SpotifyPlayerDemo />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

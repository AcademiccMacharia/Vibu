import React from "react";
import "./landing.css";
import earphone from "../../assets/earbud.svg";
import musicy from "../../assets/mello.svg";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.svg";
import playlist from '../../assets/playlist.svg';
import { BsArrowUpRight } from "react-icons/bs";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <section>
        <div className="overlay"></div>
        <div className="landing-header">
          <div className="landing-header-left">
            <img src={logo} alt="logo" />
          </div>
          <div className="landing-header-right">
            <ul className="landing-links">
              <li>Home</li>
              <li>About</li>
              <li>Feature</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
        <div className="landing-hero">
          <div className="landing-hero-left">
            <h1>
              <span>Good</span> <span>music,</span> <span>good</span>{" "}
              <span>mood</span>
            </h1>
            <img src={earphone} size={18} color="white" alt="earphone" />
          </div>
          <div className="landing-hero-right">
            <p>
              Listen to the music you want from musicians around the world.
              Boost your mood with music. Experience the decibels like your ear
              deservers to feel. A treat to your ears
            </p>
            <button>
              <Link to="/login" className="links">
                Explore Now <BsArrowUpRight />
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className="about">
        <div className="about-header">
          <h2>About</h2>
          <p>What is Vibu?</p>
        </div>
        <div className="about-body">
          <div className="about-body-left">
            <img src={arrow} alt="arrow" />
            <p>
              Vibu is a music platform that links you to your Spotify account
              and lets you enjoy a seamless, beautiful music experience. From
              your best artists to your favorite playlist for unwinding, Vibu
              has got you covered.
            </p>
            <p style={{ color: "#d3880f" }}>
              "Vibu helps you find the perfect song for your mood."
            </p>
          </div>
          <div className="about-body-right">
            <img src={musicy} alt="musicy" />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="feature-header">
          <h2>Features</h2>
          <p>What we offer</p>
        </div>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={playlist} alt="playlist" />
            <h3>Playlist</h3>
            <p>Create your own playlist and share it with your friends.</p>
          </div>
          <div className="feature-card">
            <img src={playlist} alt="music" />
            <h3>Music</h3>
            <p>Listen to your favorite music from your favorite artists.</p>
          </div>
          <div className="feature-card">
            <img src={playlist} alt="mood" />
            <h3>Mood</h3>
            <p>Find the perfect song for your mood.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

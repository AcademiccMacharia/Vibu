import React from 'react';
import './sidebar.css';
import { SiFeedly } from "react-icons/si";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { RiMic2Line } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className='sidebar'>
          <div className="top-left">
            <div className="top-left-fields">
              <SiFeedly className="homepage-icons" size={24} />
              <p>Feed</p>
            </div>
            <div className="top-left-fields">
              <MdOutlineLibraryMusic className="homepage-icons" size={24} />
              <p>Playlists</p>
            </div>
            <div className="top-left-fields">
              <RiMic2Line className="homepage-icons" size={24} />
              <p>Artists</p>
            </div>
          </div>
          <div className="your-music">
            <h5>YOUR MUSIC</h5>
            <div className="top-center-fields">
              <MdOutlineLibraryMusic className="homepage-icons" size={24} />
              <p>Liked Tracks</p>
            </div>
            <div className="top-center-fields">
              <MdOutlineLibraryMusic className="homepage-icons" size={24} />
              <p>Listen later</p>
            </div>
            <div className="top-center-fields">
              <MdOutlineLibraryMusic className="homepage-icons" size={24} />
              <p>Suggestions</p>
            </div>
            <div className="top-center-fields">
              <MdOutlineLibraryMusic className="homepage-icons" size={24} />
              <p>Podcasts</p>
            </div>
          </div>
          <div className="your-playlists">
            <h5>YOUR PLAYLISTS</h5>
            <div className="top-center-fields">
              <p>London Grime</p>
            </div>
            <div className="top-center-fields">
              <p>Blueberry Vibes</p>
            </div>
            <div className="top-center-fields">
              <p>Chill House</p>
            </div>
            <div className="create-playlist">
              <AiOutlinePlusSquare size={24} />
              <h4>CREATE NEW</h4>
            </div>
          </div>
        </div>
  )
}

export default Sidebar
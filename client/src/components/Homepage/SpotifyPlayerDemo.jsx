import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const SpotifyPlayerDemo = ({accessToken}) => {
  console.log(accessToken)
  const playerStyles = {
    bgColor: '#d3880f',
    color: 'black',
  };
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'center',
  };


  return (
    <div className='spotify-player'>
    <SpotifyPlayer
      token={accessToken}
      styles={playerStyles}
      className="spoti"
    />
  </div>
  );
};

export default SpotifyPlayerDemo;

import React, { useState } from 'react';
import { Howl } from 'howler';
import './player.css'; // You should create this CSS file for styling

const songs = [
  {
    title: 'Song 1',
    src: 'path_to_song_1.mp3', // Replace with the actual path
  },
  {
    title: 'Song 2',
    src: 'path_to_song_2.mp3', // Replace with the actual path
  },
  // Add more songs as needed
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Howl({ src: [songs[currentSongIndex].src] }));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    audio.unload();
    audio.src(songs[newIndex].src);
    audio.play();
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <div className="music-info">
        <h3>{songs[currentSongIndex].title}</h3>
        <p>Artist Name</p>
      </div>
      <div className="music-controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={playNext}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;

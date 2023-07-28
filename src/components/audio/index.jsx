import React, { useState, useEffect } from "react";
import soundFile from "/audio.mp3";
import barbie from "/barbie.mp3";
import "./audio.css";
function Sonido({ isDarkMode }) {
  const [audio] = useState(new Audio(barbie));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  audio.loop = true;

  const playSound = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseSound = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(false);
  };

  return (
    <div className="audio-container">
      <div className="audio-controls">
        {isPlaying ? (
          <span className="audioton" onClick={pauseSound}>
            <img src="/pause.png" alt="" />
          </span>
        ) : (
          <span className="audioton" onClick={playSound}>
            <img src="/play.png" alt="" />
          </span>
        )}
        <span className="audioton" onClick={stopSound}>
          <img src="/stop.png" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Sonido;

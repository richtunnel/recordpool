import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

type Controls = {
  isPlaying?: any;
  onPlayPauseClick?: any;
};

const AudioControls: React.FC<Controls> = ({ isPlaying, onPlayPauseClick }) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button type="button" className="pause" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
        <FaPause />
      </button>
    ) : (
      <button type="button" className="play" onClick={() => onPlayPauseClick(true)} aria-label="Play">
        <FaPlayCircle />
      </button>
    )}
  </div>
);

export default AudioControls;

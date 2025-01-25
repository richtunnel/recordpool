import React, { useEffect } from "react";

type Backdrop = {
  activeColor?: any;
  trackIndex?: any;
  isPlaying?: any;
};

const Backdrop: React.FC<Backdrop> = ({ activeColor, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default Backdrop;

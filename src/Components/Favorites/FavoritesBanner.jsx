import { useRef, useState } from 'react';
import BannerFavorit from '../../assets/videos/you look lonely.mp4';

export default function FavoritesBanner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    const video = videoRef.current;
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && video.muted) {
        video.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <div className="favorites__banner" style={{ position: 'relative' }}>
      <div className="gradient__overlay"></div>
      <video ref={videoRef} autoPlay muted={isMuted} loop>
        <source src={BannerFavorit} type="video/mp4" />
      </video>
      <div className="volume-control">
        <button onClick={toggleMute} className="mute-button">
          {
            isMuted 
            ? <img width="24" height="24" src="https://img.icons8.com/forma-regular-filled/24/FFFFFF/mute--v2.png" alt="mute--v2"/>
            : <img width="24" height="24" src="https://img.icons8.com/forma-regular-filled/24/FFFFFF/mute--v1.png" alt="mute--v1"/>
          }
        </button>
        <input type="range" className="range-volume" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
      </div>
    </div>
  );
}
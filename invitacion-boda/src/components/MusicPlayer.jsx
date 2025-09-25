import React, { useRef, useState, useEffect } from 'react';

const MusicPlayer = React.forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = ref;

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const updateState = () => {
      setIsPlaying(!audio.paused);
      setIsMuted(audio.muted);
    };

    audio.addEventListener('play', updateState);
    audio.addEventListener('pause', updateState);
    audio.addEventListener('volumechange', updateState);

    // Auto-play attempt on first user interaction
    const tryAutoPlay = () => {
        audio.play().catch(() => {});
    };
    document.addEventListener('click', tryAutoPlay, { once: true });


    return () => {
      audio.removeEventListener('play', updateState);
      audio.removeEventListener('pause', updateState);
      audio.removeEventListener('volumechange', updateState);
      document.removeEventListener('click', tryAutoPlay);
    };
  }, [audioRef]);

  return (
    <div className={`player ${isPlaying ? 'playing' : ''}`} role="region" aria-label="Reproductor de música">
      <div className="disc" aria-hidden="true"></div>
      <button className="icon-btn" onClick={togglePlay} aria-label="Reproducir / Pausar" title="Reproducir / Pausar">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: isPlaying ? 'none' : 'block' }}>
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: isPlaying ? 'block' : 'none' }}>
          <path d="M6 5h4v14H6zm8 0h4v14h-4z"/>
        </svg>
      </button>
      <button className="icon-btn" onClick={toggleMute} aria-label="Silenciar / Activar" title="Silenciar / Activar">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: isMuted ? 'none' : 'block' }}>
          <path d="M4 10v4h4l5 4V6l-5 4H4zm12.5 2a4.5 4.5 0 0 0-2.3-3.9v7.8a4.5 4.5 0 0 0 2.3-3.9z"/>
        </svg>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: isMuted ? 'block' : 'none' }}>
          <path d="M16.5 12a4.5 4.5 0 0 1-2.3 3.9V8.1A4.5 4.5 0 0 1 16.5 12zM4 10v4h4l5 4V6l-5 4H4zm12.6 6.2 1.4 1.4L21.6 18l-1.8-1.8L21.6 14l-1.4-1.4-1.8 1.8-1.8-1.8L15.2 14l1.8 1.8-1.8 1.8z"/>
        </svg>
      </button>
    </div>
  );
});

export default MusicPlayer;
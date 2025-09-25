import React, { useRef } from 'react';
import './App.css';

import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Historia from './components/Historia';
import Lugares from './components/Lugares';
import Itinerario from './components/Itinerario';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

function App() {
  const audioRef = useRef(null);

  const handlePlaySong = () => {
    if (audioRef.current) {
        if(audioRef.current.paused) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
        }
    }
  };

  return (
    <>
      <Hero />
      <MusicPlayer ref={audioRef} />
      <main>
        <Historia onPlaySong={handlePlaySong} />
        <Lugares />
        <Itinerario />
        <Rsvp />
      </main>
      <Footer />
      <audio ref={audioRef} src="/imagenes/fondo.mp3" preload="auto" loop></audio>
    </>
  );
}

export default App;
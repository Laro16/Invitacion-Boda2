// ... (imports y código anterior)
function App() {
  const audioRef = useRef(null);

  const handlePlaySong = () => {
    if (audioRef.current) {
        if(audio.current.paused) {
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
      {/* ESTA ES LA LÍNEA CORREGIDA */}
      <audio ref={audioRef} src="/musica/fondo.mp3" preload="auto" loop></audio>
    </>
  );
}

export default App;

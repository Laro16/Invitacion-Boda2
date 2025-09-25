import React, { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

const slidesData = [
  {
    img: '/imagenes/historia-1.jpg',
    alt: 'Cuando nos conocimos',
    date: '02 de Septiembre, 2025',
    caption: 'Cuando nos conocimos. Una mirada bastó para empezar la aventura.',
  },
  {
    img: '/imagenes/historia-2.jpg',
    alt: 'Primera cita',
    date: '16 de Octubre, 2025',
    caption: 'Nuestra primera cita. Entre risas, café y mil planes por delante.',
  },
  {
    img: '/imagenes/historia-3.jpg',
    alt: 'Primer viaje',
    date: '08 de Enero, 2026',
    caption: 'El primer viaje. Descubrimos que el mejor destino es estar juntos.',
  },
  {
    img: '/imagenes/historia-4.jpg',
    alt: 'La propuesta',
    date: '12 de Febrero, 2027',
    caption: '¡Dijo que sí! El comienzo de una nueva etapa para siempre.',
  },
];

const Historia = ({ onPlaySong }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const revealRef = useReveal();
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <section id="historia" className="wrap reveal sectioned" ref={revealRef}>
      <h2 className="title">Nuestra Historia</h2>
      <p className="subtitle">Un viaje a través de los momentos que nos trajeron hasta aquí. Desliza para revivir nuestros recuerdos más queridos.</p>

      <div className="center-actions">
        <button className="btn primary btn-script" onClick={onPlaySong} aria-label="Reproducir nuestra canción">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Reproducir Nuestra Canción
        </button>
      </div>

      <div className="slider">
        <div className="slides-container">
          <ul className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slidesData.map((slide, index) => (
              <li key={index} className={`slide ${index === currentIndex ? 'is-active' : ''}`}>
                <img src={slide.img} alt={slide.alt} loading="lazy" decoding="async" />
                <div className="overlay">
                  <b>{slide.date}</b>
                  <p style={{ margin: '4px 0 0' }}>{slide.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="nav-btn prev" onClick={goToPrev} aria-label="Anterior">⟵</button>
        <button className="nav-btn next" onClick={goToNext} aria-label="Siguiente">⟶</button>
        <div className="dots">
          {slidesData.map((_, index) => (
            <button
              key={index}
              aria-current={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la foto ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Historia;
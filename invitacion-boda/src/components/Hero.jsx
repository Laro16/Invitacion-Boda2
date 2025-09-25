import React from 'react';
import Countdown from './Countdown';
import { useReveal } from '../hooks/useReveal';

const Hero = () => {
  const revealRef = useReveal();

  const handleScrollToHistory = () => {
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCalendar = () => {
    const start = new Date('2025-12-06T13:30:00');
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
    const pad = (n) => String(n).padStart(2, '0');
    const fmt = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Creative Studio//Boda//ES',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@boda`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      'SUMMARY:Boda de Isabel & Alejandro',
      'LOCATION:Iglesia Retalhuleu; Recepción: Salón Las Morenas',
      'DESCRIPTION:Acompáñanos en nuestro gran día 💕',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Boda-Isabel-Alejandro.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  };

  return (
    <header className="hero" id="hero">
      <div className="wrap reveal visible" ref={revealRef}>
        <span className="badge">NUESTRA BODA</span>
        <h1>Jaqui y Luis</h1>
        <p className="sub">6 de Diciembre de 2025 · 1:30 pm</p>

        <Countdown />

        <div className="cta-row">
          <button className="btn secondary" onClick={handleScrollToHistory} aria-label="Ir a Nuestra Historia">
            Nuestra Historia
          </button>
          <button className="btn secondary" onClick={handleAddToCalendar} title="Agregar al calendario" aria-label="Añadir al calendario">
            Añadir al Calendario
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;

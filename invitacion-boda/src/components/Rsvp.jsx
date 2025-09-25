import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '44649407'; // Cambia esto a tu número de WhatsApp

const Rsvp = () => {
  const [name, setName] = useState('');
  const [companions, setCompanions] = useState('0');
  const revealRef = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor, escribe tu nombre.');
      return;
    }

    let compText = '';
    if (companions === '-1') {
      compText = 'Lamentablemente no podré asistir.';
    } else if (companions === '0') {
      compText = 'Confirmo mi asistencia (sin acompañantes).';
    } else {
      compText = `Confirmo mi asistencia con ${companions} acompañante${companions === '1' ? '' : 's'}.`;
    }

    const message = `¡Hola! Soy ${name}. ${compText}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rsvp" className="wrap reveal sectioned" ref={revealRef}>
      <h2 className="title">Confirmar Asistencia</h2>
      <p className="subtitle">Tu presencia es nuestro mayor regalo. Por favor, confirma tu asistencia antes del 6 de Noviembre de 2025.</p>

      <form className="rsvp-card" onSubmit={handleSubmit}>
        <div className="field">
          <span>Nombre Completo</span>
          <input
            className="input"
            type="text"
            placeholder="Escribe tu nombre y apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <span>Acompañantes</span>
          <select
            className="select"
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
          >
            <option value="0">Asistiré sin acompañantes</option>
            <option value="1">Asistiré con 1 acompañante</option>
            <option value="2">Asistiré con 2 acompañantes</option>
            <option value="3">Asistiré con 3 acompañantes</option>
            <option value="4">Asistiré con 4 acompañantes</option>
            <option value="5">Asistiré con 5 acompañantes</option>
            <option value="-1">Lamentablemente no podré asistir</option>
          </select>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button type="submit" className="btn primary btn-script" aria-label="Confirmar por WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5a10 10 0 0 0-16.2 11.3L3 21l6.4-1.3A10 10 0 0 0 20.5 3.5Zm-1.1 13a8 8 0 0 1-11.8 1.5l-.3-.2-3 .6.6-2.9-.2-.3A8 8 0 1 1 19.4 16.5ZM8.9 7.9c.2-.5.4-.5.7-.5h.6c.2 0 .5 0 .7.5s.9 1.5.9 1.6.1.4 0 .6-.2.4-.4.6-.4.5-.2.9c.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9s.5 0 .7-.2.8-.9 1-1.2.4-.2.6-.1.6.3 1.4.7 1.2.6 1.4.9.1.9-.2 1.5c-.3.6-1.2 1.1-1.6 1.1s-.9.2-3-.8a13.6 13.6 0 0 1-3.8-2.4 12.2 12.2 0 0 1-2.2-2.6c-.8-1.2-1.1-2.1-1.2-2.4-.2-.4 0-.8.1-1s.5-1.2.6-1.4Z"/></svg>
            Confirmar por WhatsApp
          </button>
          <p className="helper">O si prefieres, puedes llamar al <a href="tel:44649407">44 64 94 07</a>.</p>
        </div>
      </form>
    </section>
  );
};

export default Rsvp;
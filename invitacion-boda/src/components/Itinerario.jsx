import React from 'react';
import { useReveal } from '../hooks/useReveal';

const TimelineItem = ({ time, title, place, emoji }) => {
  const revealRef = useReveal();
  return (
    <li className="tl-item reveal" ref={revealRef}>
      <div className="tl-time">{time}</div>
      <div className="tl-card card">
        <div className="body">
          <b>{title}</b>
          <div className="place">{place} {emoji}</div>
        </div>
      </div>
      <span className="tl-dot" aria-hidden="true"></span>
    </li>
  );
};

const Itinerario = () => {
  const revealRef = useReveal();
  return (
    <section id="itinerario" className="wrap reveal sectioned" ref={revealRef}>
      <h2 className="title">Itinerario</h2>
      <p className="subtitle">Planeamos cada momento con mucho cariño para que disfrutes este día con nosotros.</p>
      <ul className="timeline">
        <TimelineItem time="6:00 pm" title="Ceremonia Religiosa" place="Iglesia Retalhuleu" />
        <TimelineItem time="8:00 pm" title="Recepción y Cena" place="Salón Las Morenas" />
        <TimelineItem time="10:30 pm" title="Corte del Pastel" place="¡El momento más dulce de la noche!" />
        <TimelineItem time="12:00 am" title="Despedida y Agradecimientos" place="Gracias por ser parte de nuestra historia." emoji="💕"/>
      </ul>
    </section>
  );
};

export default Itinerario;
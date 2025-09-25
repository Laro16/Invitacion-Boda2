import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Card = ({ imgSrc, imgAlt, title, location, details, mapLink }) => {
  const revealRef = useReveal();
  return (
    <article className="card reveal" ref={revealRef}>
      <img src={imgSrc} alt={imgAlt} loading="lazy" decoding="async" />
      <div className="body">
        <h3>{title}</h3>
        <p className="helper">{location}<br />{details}</p>
        <div className="center-actions">
          <a className="btn primary" href={mapLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver ubicación de ${location}`}>
            Ver Ubicación
          </a>
        </div>
      </div>
    </article>
  );
};

const Lugares = () => {
  const revealRef = useReveal();
  return (
    <section id="lugares" className="wrap reveal sectioned" ref={revealRef}>
      <h2 className="title">La Celebración</h2>
      <p className="subtitle">Estos son los lugares donde celebraremos nuestro amor. Toca en cada uno para ver la ubicación en el mapa.</p>
      <div className="grid two">
        <Card
          imgSrc="/imagenes/ceremonia.jpg"
          imgAlt="Lugar de la ceremonia"
          title="Ceremonia"
          location="Iglesia Retalhuleu"
          details="Llegar 15 minutos antes. Hay estacionamiento frente a la entrada."
          mapLink="https://maps.google.com/?q=Iglesia+Retalhuleu"
        />
        <Card
          imgSrc="/imagenes/recepcion.jpg"
          imgAlt="Lugar de la recepción"
          title="Recepción"
          location="Salón Las Morenas"
          details="Acompáñanos a la cena, el brindis y el baile para celebrar."
          mapLink="https://maps.google.com/?q=Salón+Las+Morenas"
        />
      </div>
    </section>
  );
};


export default Lugares;

import React, { useState, useEffect } from 'react';

const eventDate = new Date('2025-12-06T13:30:00');

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown" aria-live="polite">
      <div className="time-box">
        <span className="num">{format(timeLeft.days || 0)}</span>
        <span className="label">Días</span>
      </div>
      <div className="time-box">
        <span className="num">{format(timeLeft.hours || 0)}</span>
        <span className="label">Horas</span>
      </div>
      <div className="time-box">
        <span className="num">{format(timeLeft.minutes || 0)}</span>
        <span className="label">Minutos</span>
      </div>
      <div className="time-box">
        <span className="num">{format(timeLeft.seconds || 0)}</span>
        <span className="label">Segundos</span>
      </div>
    </div>
  );
};

export default Countdown;
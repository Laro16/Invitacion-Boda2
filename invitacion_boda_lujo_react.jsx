import React from "react";
import { Heart, Sparkles, Rings, Flower2, MapPin, Clock3, CalendarDays } from "lucide-react";

export default function WeddingInvitation() {
  // Cambia aquí los textos principales
  const couple = {
    groom: "[Nombre del novio]",
    bride: "[Nombre de la novia]",
    date: "[día, mes, año]",
    time: "[hora]",
    place: "[nombre del lugar]",
    address: "[dirección completa]",
    reception: "[detalle opcional]",
  };

  // Coloca tus imágenes en /public/images/ y usa estos nombres:
  // /images/boda-fondo.jpg -> fondo suave o textura elegante
  // /images/novios.jpg -> foto principal de la pareja (opcional)
  // /images/flor-izquierda.png -> detalle floral decorativo (opcional)
  // /images/flor-derecha.png -> detalle floral decorativo (opcional)
  const assets = {
    background: "/images/boda-fondo.jpg",
    couple: "/images/novios.jpg",
    floralLeft: "/images/flor-izquierda.png",
    floralRight: "/images/flor-derecha.png",
  };

  const hasCoupleImage = true; // cambia a false si no usarás foto central

  return (
    <div className="min-h-screen w-full bg-[#f7f3ee] flex items-center justify-center p-4 md:p-8">
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/60 bg-white/40 shadow-[0_30px_80px_rgba(121,95,61,0.18)] backdrop-blur-xl"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.88)), url(${assets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,184,140,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,184,140,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.0))]" />

        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
          {/* Panel izquierdo */}
          <div className="relative p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between min-h-[780px]">
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#8c6b49]">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.35em]">
                <Sparkles className="h-4 w-4" />
                Invitación de boda
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.3em]">
                <Rings className="h-4 w-4" />
                Save the date
              </div>
            </div>

            <div className="pt-16 sm:pt-20 lg:pt-12 text-center lg:text-left">
              <p className="text-[#a78356] tracking-[0.45em] uppercase text-[11px] sm:text-xs mb-4">
                Con la bendición de Dios y nuestros padres
              </p>

              <div className="mx-auto lg:mx-0 w-fit">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#c9a46a] to-transparent mx-auto lg:mx-0 mb-6" />
                <h1 className="font-[cursive] text-5xl sm:text-6xl md:text-7xl leading-none text-[#6d5438] drop-shadow-[0_2px_8px_rgba(255,255,255,0.75)]">
                  {couple.groom}
                </h1>
                <div className="my-4 flex items-center justify-center lg:justify-start gap-3 text-[#b08a5a]">
                  <span className="h-px w-10 bg-[#d9c0a0]" />
                  <Heart className="h-4 w-4 fill-[#d9a7b2] text-[#d9a7b2]" />
                  <span className="h-px w-10 bg-[#d9c0a0]" />
                </div>
                <h2 className="font-[cursive] text-5xl sm:text-6xl md:text-7xl leading-none text-[#6d5438]">
                  {couple.bride}
                </h2>
              </div>

              <p className="mt-8 text-[#6f5a46] text-[15px] sm:text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                Tenemos el honor de invitarte a celebrar nuestro matrimonio,
                un día lleno de amor, gratitud y bendiciones, en compañía de las personas más especiales para nosotros.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                <InfoCard icon={<CalendarDays className="h-5 w-5" />} label="Fecha" value={couple.date} />
                <InfoCard icon={<Clock3 className="h-5 w-5" />} label="Hora" value={couple.time} />
                <InfoCard icon={<MapPin className="h-5 w-5" />} label="Lugar" value={couple.place} />
                <InfoCard icon={<Flower2 className="h-5 w-5" />} label="Dirección" value={couple.address} />
              </div>

              <div className="mt-8 mx-auto lg:mx-0 max-w-2xl rounded-[26px] border border-[#e9dccb] bg-white/70 px-5 py-5 shadow-[0_12px_30px_rgba(111,90,70,0.08)]">
                <p className="text-[#6f5a46] text-sm sm:text-[15px] leading-7">
                  <span className="font-semibold text-[#8c6b49]">Recepción:</span> {couple.reception}
                </p>
              </div>
            </div>

            <div className="pt-10 text-center lg:text-left">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d9c0a0] to-transparent mb-5" />
              <p className="text-[#7a6349] italic text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                Será un honor contar con tu presencia.
              </p>
              <p className="mt-4 text-[#9a8162] tracking-[0.35em] uppercase text-[10px] sm:text-[11px]">
                Dress code: formal elegante
              </p>
            </div>
          </div>

          {/* Panel derecho */}
          <div className="relative p-6 sm:p-10 md:p-12 lg:p-14 flex items-center justify-center">
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[rgba(217,184,140,0.16)] to-transparent pointer-events-none" />
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-4 sm:-left-8 text-[#d9a7b2]/70">
                <Sparkles className="h-10 w-10" />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 text-[#c9a46a]/70">
                <Sparkles className="h-10 w-10" />
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/75 shadow-[0_20px_50px_rgba(121,95,61,0.15)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_38%),radial-gradient(circle_at_bottom,rgba(217,184,140,0.13),transparent_35%)]" />

                <div className="relative p-5 sm:p-6">
                  <div className="rounded-[26px] border border-[#e7d8c5] bg-[#fffaf6] p-4 sm:p-5">
                    <div className="flex items-center justify-center gap-3 text-[#b08a5a] uppercase tracking-[0.35em] text-[10px] sm:text-[11px] mb-4">
                      <span className="h-px w-8 bg-[#d9c0a0]" />
                      Wedding Day
                      <span className="h-px w-8 bg-[#d9c0a0]" />
                    </div>

                    {hasCoupleImage ? (
                      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-[#eadfce] bg-[#f9f3ec] shadow-inner">
                        <img
                          src={assets.couple}
                          alt="Pareja"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#6d5438]/20 via-transparent to-transparent" />
                        <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/35 px-3 py-1 text-[11px] tracking-[0.28em] text-white backdrop-blur-md">
                          Amor eterno
                        </div>
                      </div>
                    ) : (
                      <div className="relative mx-auto flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#eadfce] bg-gradient-to-b from-[#fff9f3] to-[#f2e6d7] p-6">
                        <div className="text-center">
                          <Rings className="mx-auto h-14 w-14 text-[#c9a46a]" />
                          <p className="mt-4 text-[#6f5a46] text-sm leading-7">
                            Coloca aquí una foto de los novios o una imagen romántica.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                      <MiniPill title="Amor" subtitle="por siempre" />
                      <MiniPill title="Fe" subtitle="y bendición" />
                      <MiniPill title="Unión" subtitle="en familia" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <DecorCard title="Detalles" text="Flores suaves, líneas finas y brillo sutil." />
                    <DecorCard title="Estilo" text="Moderno, elegante y premium." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ornaments */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-8 left-8 h-28 w-28 rounded-full border border-[#d9c0a0]/30" />
          <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full border border-[#d9c0a0]/20" />
          <div className="absolute top-1/2 left-0 h-px w-28 bg-gradient-to-r from-[#d9c0a0]/40 to-transparent" />
          <div className="absolute top-1/3 right-0 h-px w-24 bg-gradient-to-l from-[#d9c0a0]/35 to-transparent" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

        .font-\[cursive\] {
          font-family: 'Great Vibes', cursive;
        }

        body {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-[22px] border border-[#eadfce] bg-white/75 px-4 py-4 shadow-[0_10px_20px_rgba(111,90,70,0.06)]">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-[#b08a5a]">{icon}</div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a8162]">{label}</p>
          <p className="mt-1 text-[#5f4c3d] text-[15px] sm:text-base leading-6 break-words">{value}</p>
        </div>
      </div>
    </div>
  );
}

function MiniPill({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-[#eadfce] bg-white/80 px-3 py-3">
      <p className="text-[#8c6b49] text-sm font-semibold">{title}</p>
      <p className="text-[#9a8162] text-[11px] uppercase tracking-[0.2em] mt-1">{subtitle}</p>
    </div>
  );
}

function DecorCard({ title, text }) {
  return (
    <div className="rounded-[22px] border border-[#eadfce] bg-white/70 p-4">
      <p className="text-[#8c6b49] text-sm font-semibold uppercase tracking-[0.22em]">{title}</p>
      <p className="mt-2 text-[#6f5a46] text-sm leading-6">{text}</p>
    </div>
  );
}

import { useState, useMemo } from 'react';

type AgendaEvent = {
  time: string;
  name: string;
  description: string;
  place: string;
  type: 'Comunidad' | 'Institucional' | 'Académico' | 'Emprendimiento';
  button?: { label: string; href: string };
  start: Date;
  end: Date;
};

type AgendaDay = {
  key: string;
  label: string;
  dateLabel: string;
  events: AgendaEvent[];
};

const days: AgendaDay[] = [
  {
    key: 'lun',
    label: 'Lun 19',
    dateLabel: 'Lunes 19 de octubre',
    events: [
      {
        time: '9:00 a.m.',
        name: 'Carnaval Uniautónomo',
        description: 'La caravana que abre el Fest.',
        place: 'Salida: La Villa, diagonal a Campanario CC · Llegada: sede principal',
        type: 'Comunidad',
        start: new Date('2026-10-19T09:00:00-05:00'),
        end: new Date('2026-10-19T12:00:00-05:00'),
      },
      {
        time: '4:00 p.m.',
        name: 'Cumpleaños del fundador Bruno Mantilla Pinto',
        description: '102 años que nos inspiran. Serenata y cupcakes.',
        place: 'Sede principal',
        type: 'Institucional',
        start: new Date('2026-10-19T16:00:00-05:00'),
        end: new Date('2026-10-19T17:30:00-05:00'),
      },
      {
        time: '5:00 p.m.',
        name: 'Premios Bruno Mantilla',
        description: 'Reconocimiento al ADN Uniautónomo.',
        place: 'Auditorio La Quimera',
        type: 'Institucional',
        start: new Date('2026-10-19T17:00:00-05:00'),
        end: new Date('2026-10-19T19:00:00-05:00'),
      },
    ],
  },
  {
    key: 'mar',
    label: 'Mar 20',
    dateLabel: 'Martes 20 de octubre',
    events: [
      {
        time: '9:00 a.m. a 4:00 p.m.',
        name: 'Desafío Uniautónomo',
        description: 'Actividades lúdicas y deportivas, y el Hackatón. Exclusivo para la comunidad uniautónoma.',
        place: 'Sede Campestre El Aljibe',
        type: 'Comunidad',
        button: { label: 'Inscribirme al Hackatón', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeAdbcxQUxFcYafIcMI2Hm0qIRkac7cDTABX54hJ-Wg63Os4w/viewform' },
        start: new Date('2026-10-20T09:00:00-05:00'),
        end: new Date('2026-10-20T16:00:00-05:00'),
      },
    ],
  },
  {
    key: 'mie',
    label: 'Mié 21',
    dateLabel: 'Miércoles 21 de octubre',
    events: [
      {
        time: '8:00 a.m. a 12:00 p.m.',
        name: 'Academia de Ingenierías',
        description: 'Conferencias y talleres de ingeniería.',
        place: 'Sede principal',
        type: 'Académico',
        start: new Date('2026-10-21T08:00:00-05:00'),
        end: new Date('2026-10-21T12:00:00-05:00'),
      },
      {
        time: '6:00 p.m.',
        name: 'Carrera 5K',
        description: 'Corre con la U por Popayán.',
        place: 'Salida: sede principal · Meta: Parque de la Salud',
        type: 'Comunidad',
        button: { label: 'Próximamente', href: '#' },
        start: new Date('2026-10-21T18:00:00-05:00'),
        end: new Date('2026-10-21T20:00:00-05:00'),
      },
    ],
  },
  {
    key: 'jue',
    label: 'Jue 22',
    dateLabel: 'Jueves 22 de octubre',
    events: [
      {
        time: '8:00 a.m.',
        name: 'Feria de Emprendimiento',
        description: 'Gastronomía, accesorios, salud, moda y belleza. Exclusivo para la comunidad uniautónoma.',
        place: 'Sede principal',
        type: 'Emprendimiento',
        button: { label: 'Quiero un stand', href: 'https://uniautonomafest.uniautonoma.edu.co/eventos/?evento=FeriaEmprendimiento&desde=inscribir-feria' },
        start: new Date('2026-10-22T08:00:00-05:00'),
        end: new Date('2026-10-22T17:00:00-05:00'),
      },
      {
        time: '3:00 p.m. a 7:00 p.m.',
        name: 'Bingo',
        description: 'Bono de viaje, TV, celular, portátil, bici y muchos más.',
        place: 'Sede principal',
        type: 'Comunidad',
        start: new Date('2026-10-22T15:00:00-05:00'),
        end: new Date('2026-10-22T19:00:00-05:00'),
      },
    ],
  },
  {
    key: 'vie',
    label: 'Vie 23',
    dateLabel: 'Viernes 23 de octubre',
    events: [
      {
        time: '8:00 a.m.',
        name: 'Academia de Derecho',
        description: 'Conferencias y foros jurídicos.',
        place: 'Auditorio La Quimera',
        type: 'Académico',
        start: new Date('2026-10-23T08:00:00-05:00'),
        end: new Date('2026-10-23T12:00:00-05:00'),
      },
      {
        time: '11:00 a.m. y 3:00 p.m.',
        name: 'Cocineritos',
        description: 'Participación especial en el Congreso Gastronómico de Popayán. También el sábado 24 a la misma hora.',
        place: 'Parque Caldas',
        type: 'Comunidad',
        start: new Date('2026-10-23T11:00:00-05:00'),
        end: new Date('2026-10-23T15:00:00-05:00'),
      },
      {
        time: '9:00 p.m. a 3:00 a.m.',
        name: 'Fiesta Blanca',
        description: 'El cierre. Todos de blanco, todos de sangre azul.',
        place: 'Club Campestre',
        type: 'Comunidad',
        start: new Date('2026-10-23T21:00:00-05:00'),
        end: new Date('2026-10-24T03:00:00-05:00'),
      },
    ],
  },
];

const allEvents = days.flatMap((d) => d.events);

const typeColors: Record<string, string> = {
  Comunidad: 'bg-[#1E60911A] text-[#1E6091] border-[#1E609130]',
  Institucional: 'bg-[#1E60911A] text-[#1E6091] border-[#1E609130]',
  Académico: 'bg-[#1E3A8A1A] text-[#1E3A8A] border-[#1E3A8A30]',
  Emprendimiento: 'bg-[#D4AF371A] text-[#B8942C] border-[#D4AF3730]',
};

export default function Home() {
  const [activeDay, setActiveDay] = useState(days[0].key);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const imgSrc = (n: number) => `/images/festival/img${n}.${n === 7 || n === 8 ? 'jpeg' : 'png'}`;

  const nowBogota = useMemo(() => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' })), []);
  const nextEvent = useMemo(() => allEvents.find((e) => e.end >= nowBogota) || allEvents[allEvents.length - 1], [nowBogota]);
  const festEnded = nowBogota > allEvents[allEvents.length - 1].end;

  const activeDayData = days.find((d) => d.key === activeDay)!;

  // Contador regresivo estado
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useMemo(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nowBogotaLocal = new Date(now.toLocaleString('en-US', { timeZone: 'America/Bogota' }));
      const startDate = new Date('2026-10-19T09:00:00-05:00');

      if (nowBogotaLocal < startDate) {
        const difference = startDate.getTime() - nowBogotaLocal.getTime();
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#1E6091]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-[#1E6091]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-[#1E6091]/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(10,37,64,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#F8F9FA]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#eff6ff]/60 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A2540]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'linear-gradient(rgba(10,37,64,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Columna Izquierda */}
            <div className="space-y-6 animate-fade-in-up">
              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eff6ff] text-[#0A2540] border border-blue-200 text-sm font-medium">
                <span className="text-xs">✨</span>
                19 al 23 de octubre • Popayán, Cauca
              </div>

              {/* Marca de agua / Título Secundario */}
              <div className="relative -z-0 mb-2">
                <h2 className="font-serif text-6xl md:text-8xl font-bold text-[#0A2540]/15 tracking-tighter italic leading-none select-none">
                  Uniautónoma Fest 2026
                </h2>
              </div>

              {/* Título Principal */}
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#0A2540] mb-4 leading-[1.1] tracking-tight">
                La semana que todos aman
              </h1>

              {/* Descripción */}
              <p className="text-slate-600 font-medium text-lg md:text-xl max-w-xl leading-relaxed">
                Cinco días para la comunidad uniautónoma y para quien viene de afuera.
                Carnaval, premios, hackatón, carrera 5K, feria, bingo y fiesta blanca.
              </p>

              {/* Contador Regresivo - Glassmorphism */}
              <div className="bg-[#0A2540]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-blue-900/20 rounded-2xl p-6 md:p-8 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 md:gap-6 text-center">
                  {[
                    { value: timeLeft.days, label: 'Días' },
                    { value: timeLeft.hours, label: 'Horas' },
                    { value: timeLeft.minutes, label: 'Min' },
                    { value: timeLeft.seconds, label: 'Seg' },
                  ].map((unit, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-white font-display text-3xl md:text-5xl font-bold tabular-nums">{String(unit.value).padStart(2, '0')}</span>
                      <span className="text-blue-200 text-xs md:text-sm uppercase tracking-widest mt-1 font-medium">{unit.label}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              </div>

              {/* Botones de Acción (CTAs) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up stagger-1">
                <a
                  href="#kits"
                  className="bg-[#D4AF37] text-slate-900 font-bold hover:bg-[#c29f31] transition-all duration-300 shadow-lg shadow-amber-500/20 rounded-xl px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap group"
                >
                  <span>Conseguir Kit</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#programacion"
                  className="border-2 border-[#0A2540] text-[#0A2540] font-semibold hover:bg-[#0A2540] hover:text-white transition-all duration-300 rounded-xl px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap group"
                >
                  <span>Ver programación</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Columna Derecha (Imagen Interactiva) */}
            <div className="relative animate-fade-in stagger-2" aria-hidden="true">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-3xl blur-[60px] animate-pulse" />
                <div className="absolute inset-0 bg-[#0A2540]/20 rounded-3xl blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />
                
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/20 bg-[#0A2540]/10 shadow-2xl shadow-blue-900/20 group">
                  <img
                    src={imgSrc(14)}
                    alt="Uniautónoma Fest 2026 - Momento del festival"
                    onClick={() => setLightbox(imgSrc(14))}
                    className="w-full h-full object-cover opacity-90 cursor-pointer group-hover:opacity-100 transition-opacity duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -inset-2 border border-[#D4AF37]/30 rounded-3xl group-hover:border-[#D4AF37]/60 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Ahora en la semana */}
      <section className="relative bg-creamDark py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E60911A] to-transparent" aria-hidden="true" />
        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src={imgSrc(14)}
                alt="Momento del festival"
                onClick={() => setLightbox(imgSrc(14))}
                className="w-full h-64 md:h-80 object-cover rounded-2xl border border-line shadow-card cursor-pointer hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="animate-fade-in-up stagger-1">
              <p className="text-[#1E6091] font-display text-sm uppercase tracking-widest mb-3">Ahora en la semana</p>
              <h2 className="section-title text-left mb-6">Próximo evento</h2>
              {festEnded ? (
                <div className="card gradient-border">
                  <div className="text-center py-4">
                    <svg className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-serif text-2xl font-bold text-ink mb-2">El Fest ya cerró</p>
                    <p className="text-soft">Gracias por acompañar la semana. Nos vemos en la próxima.</p>
                  </div>
                </div>
              ) : (
                <div className="card gradient-border group">
                  <div className="flex items-center gap-3 text-[#1E6091] text-sm font-medium mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#1E6091] animate-pulse" />
                    <span>{nextEvent.time} · {nextEvent.place}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3 group-hover:text-[#1E6091] transition-colors">{nextEvent.name}</h3>
                  <p className="text-soft leading-relaxed">{nextEvent.description}</p>
                  <span className={`inline-block mt-4 ${typeColors[nextEvent.type]} chip`}>{nextEvent.type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Programación */}
      <section id="programacion" className="relative bg-cream py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E60911A] to-transparent" aria-hidden="true" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-[#1E6091] font-display text-sm uppercase tracking-widest mb-3">Programación</p>
            <h2 className="section-title mb-4">Cinco días. Toda la U.</h2>
            <p className="section-subtitle">Carnaval, premios, hackatón, carrera 5K, feria, bingo y fiesta blanca.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto snap-x pb-6 mb-10 scrollbar-hide animate-fade-in-up stagger-1">
            {days.map((d) => (
              <button
                key={d.key}
                onClick={() => setActiveDay(d.key)}
                className={`min-h-[48px] px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap snap-start transition-all duration-300 ease-smooth
                           relative overflow-hidden ${
                  activeDay === d.key
                    ? 'bg-[#0A2540] text-white shadow-card-dark'
                    : 'bg-white text-ink border border-line hover:border-[#1E6091]/50 hover:shadow-elevation-2'
                }`}
              >
                <span className="relative z-10">{d.label}</span>
                {activeDay === d.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#1E6091] to-[#0A2540] animate-shimmer" />
                )}
              </button>
            ))}
          </div>

          <p className="text-center text-soft mb-10 animate-fade-in-up stagger-2">{activeDayData.dateLabel}</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeDayData.events.map((ev, idx) => (
              <article
                key={idx}
                className="card gradient-border group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={imgSrc(15 + (idx % 6))}
                  alt={`Imagen de ${ev.name}`}
                  onClick={() => setLightbox(imgSrc(15 + (idx % 6)))}
                  className="w-full h-44 object-cover rounded-xl border border-line mb-5 cursor-pointer group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="time-pill">{ev.time}</span>
                  <span className={`chip ${typeColors[ev.type]}`}>{ev.type}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-2 group-hover:text-[#1E6091] transition-colors">{ev.name}</h3>
                <p className="text-soft text-sm mb-3 leading-relaxed">{ev.description}</p>
                <p className="text-sm text-ink/70 flex items-center gap-1 mb-4">
                  <svg className="w-4 h-4 text-softLight" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {ev.place}
                </p>
                {ev.button && (
                  <div className="mt-2 pt-4 border-t border-line">
                    {ev.button.href === '#' ? (
                      <span className="btn-ghost w-full justify-center bg-[#6C757D10] text-[#6C757D] cursor-not-allowed">
                        {ev.button.label}
                      </span>
                    ) : (
                      <a
                        href={ev.button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center group"
                      >
                        {ev.button.label}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="relative bg-[#0A2540] py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-[#D4AF37] font-display text-sm uppercase tracking-widest mb-3">Kits Oficiales</p>
            <h2 className="section-title-dark mb-4">Consigue tu kit</h2>
            <p className="section-subtitle-dark">Tallas S, M, L y XL. Entrega en la sede principal.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Kit Sangre Azul',
                audience: 'Para estudiantes, docentes, administrativos y egresados',
                image: 18,
                items: [
                  'Camiseta oficial 2026',
                  'Medalla de la 5K',
                  '2 boletas de Bingo',
                  'Manilla de la Fiesta Blanca',
                  'Participación en la rifa de la moto',
                ],
                price: '$75.000 COP',
              },
              {
                title: 'Kit Corredor',
                audience: 'Para externos',
                image: 19,
                items: [
                  'Camiseta oficial 2026',
                  'Medalla de la 5K',
                  'Cupo en la Carrera 5K',
                  'No participa en la rifa',
                ],
                price: '$80.000 COP',
              },
              {
                title: 'Arma tu kit',
                audience: 'Solo uniautónomos',
                image: 20,
                items: [
                  'Carrera 5K — desde $60.000',
                  'Fiesta Blanca — $20.000',
                  'Tabla de Bingo (2) — $10.000',
                  'Combo completo — $90.000',
                ],
                price: 'Desde $60.000 COP',
              },
            ].map((kit, idx) => (
              <div
                key={kit.title}
                className="card-dark gradient-border-dark flex flex-col group animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <img
                  src={imgSrc(kit.image)}
                  alt={kit.title}
                  onClick={() => setLightbox(imgSrc(kit.image))}
                  className="w-full h-40 object-cover rounded-xl border border-lineDark mb-5 cursor-pointer group-hover:scale-[1.02] transition-transform duration-500"
                />
                <p className="text-whiteMuted text-sm mb-2">{kit.audience}</p>
                <h3 className="font-serif text-2xl font-bold text-white mb-5">{kit.title}</h3>
                <ul className="text-whiteMuted text-sm space-y-3 mb-6 flex-1">
                  {kit.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                      <svg className="w-5 h-5 text-[#1E6091]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-5">{kit.price}</p>
                  <a
                    href="https://uniautonomafest.uniautonoma.edu.co/#kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4AF37] text-slate-900 font-bold hover:bg-[#c29f31] transition-all duration-300 shadow-lg shadow-amber-500/20 rounded-xl px-8 py-4 flex items-center justify-center gap-2 w-full group"
                  >
                    Conseguir kit
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrera 5K */}
      <section id="carrera" className="relative bg-creamDark py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E60911A] to-transparent" aria-hidden="true" />
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src={imgSrc(16)}
                alt="Carrera 5K Uniautónoma Fest"
                onClick={() => setLightbox(imgSrc(16))}
                className="w-full h-72 md:h-96 object-cover rounded-2xl border border-line shadow-card cursor-pointer hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="animate-fade-in-up stagger-1">
              <p className="text-[#1E6091] font-display text-sm uppercase tracking-widest mb-3">Carrera 5K</p>
              <h2 className="section-title text-left mb-4">Corre con la U por Popayán</h2>
              <p className="text-soft text-lg mb-8">Miércoles 21 de octubre, 6:00 p.m. Salida desde la sede principal hasta el Parque de la Salud.</p>

              <div className="card gradient-border mb-6">
                <p className="text-soft mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#1E6091]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Salida: sede principal · Meta: Parque de la Salud
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/place/Corporaci%C3%B3n+Universitaria+Aut%C3%B3noma+del+Cauca/@2.4406539,-76.6042339,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto justify-center"
                  >
                    Salida · Sede principal
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Parque+de+la+Salud/@2.4551328,-76.5920287,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#1E6091] text-[#1E6091] px-6 py-3 rounded-pill font-semibold text-sm transition-all duration-300 ease-smooth hover:bg-[#1E6091]/10 hover:border-[#1E6091] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(30,96,145,.2)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6091] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2540] min-h-[44px] flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Meta · Parque de la Salud
                  </a>
                </div>
              </div>

              <div className="card bg-[#1E60911A] border-[#1E609130]">
                <div className="flex items-center gap-3 text-[#1E6091] text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#1E6091] animate-pulse" />
                  <span>Inscripciones: Próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#081C33]/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <img
            src={lightbox}
            alt="Imagen ampliada del festival"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-glow-strong border border-lineDark"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 text-4xl font-light hover:text-[#1E6091] transition-colors w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Cerrar imagen"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
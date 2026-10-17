import { useState, useEffect } from 'react';

interface CountdownProps {
  startDate: Date;
  endDate: Date;
}

export default function Countdown({ startDate, endDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStatus, setEventStatus] = useState<'upcoming' | 'ongoing' | 'ended'>('upcoming');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nowBogota = new Date(now.toLocaleString('en-US', { timeZone: 'America/Bogota' }));

      if (nowBogota < startDate) {
        const difference = startDate.getTime() - nowBogota.getTime();
        setEventStatus('upcoming');
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else if (nowBogota >= startDate && nowBogota <= endDate) {
        setEventStatus('ongoing');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setEventStatus('ended');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    setIsVisible(true);
    return () => clearInterval(timer);
  }, [startDate, endDate]);

  const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div
      className="flex flex-col items-center min-w-[72px] md:min-w-[96px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div className="bg-gradient-to-b from-nightDeep via-nightMid to-nightDeep rounded-xl px-4 py-3 md:px-6 md:py-4
                         border border-lineDark shadow-card-dark flex items-center justify-center min-w-[64px] md:min-w-[80px]
                         overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cobalt/10 via-transparent to-cobalt/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums
                           animate-count-up"
            style={{ animationDelay: `${delay}ms` }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cobalt/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-xs md:text-sm text-whiteMuted uppercase tracking-widest mt-3 font-medium font-display">
        {label}
      </span>
    </div>
  );

  const Separator = ({ delay }: { delay: number }) => (
    <div className="flex items-center justify-center h-full px-2" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative w-1 h-1 rounded-full bg-cobalt/60 animate-pulse-glow" />
    </div>
  );

  if (eventStatus === 'ended') {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-nightMid/80 backdrop-blur-xl border border-lineDark">
          <svg className="w-6 h-6 text-cobalt" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg md:text-xl font-semibold text-white">El festival ha finalizado</p>
        </div>
        <p className="text-whiteMuted mt-4 text-sm">Gracias por participar en Uniautónoma Fest 2026</p>
      </div>
    );
  }

  if (eventStatus === 'ongoing') {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-cobaltSoft border border-cobalt/30 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
          <p className="text-lg md:text-xl font-semibold text-cobalt">¡El festival está en curso!</p>
        </div>
        <p className="text-whiteMuted mt-4 text-sm">Del 19 al 23 de octubre de 2026 · Popayán, Cauca</p>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div className="flex justify-center gap-4 md:gap-6 lg:gap-8" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center min-w-[72px] md:min-w-[96px] animate-pulse">
            <div className="bg-nightMid/50 rounded-xl px-4 py-3 md:px-6 md:py-4 border border-lineDark min-w-[64px] md:min-w-[80px]" />
            <span className="text-xs md:text-sm text-whiteMuted uppercase tracking-widest mt-3 font-display" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap" role="timer" aria-label="Cuenta regresiva para el inicio del festival">
      <TimeUnit value={timeLeft.days} label="Días" delay={0} />
      <Separator delay={100} />
      <TimeUnit value={timeLeft.hours} label="Horas" delay={200} />
      <Separator delay={300} />
      <TimeUnit value={timeLeft.minutes} label="Min" delay={400} />
      <Separator delay={500} />
      <TimeUnit value={timeLeft.seconds} label="Seg" delay={600} />
    </div>
  );
}
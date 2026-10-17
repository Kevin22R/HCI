export default function Help() {
  const faqs = [
    {
      question: '¿Cómo consulto la programación del festival?',
      answer: 'En "Programación" puedes cambiar de día con las pestañas y ver las tarjetas de cada actividad.',
    },
    {
      question: '¿Cómo identifico el horario y el lugar de una actividad?',
      answer: 'Cada tarjeta muestra la hora en pastilla, el nombre, la descripción y el lugar.',
    },
    {
      question: '¿Cómo consigo un kit?',
      answer: 'En "Kits" compara los tres kits y usa el botón "Conseguir kit", que te lleva al sitio oficial.',
    },
    {
      question: '¿Qué pasa con la Carrera 5K?',
      answer: 'El botón de inscripción está marcado como "Próximamente" hasta que se publique el enlace oficial.',
    },
    {
      question: '¿Dónde está el aviso legal?',
      answer: 'En el pie de página, al final de la página.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-cobalt font-display text-sm uppercase tracking-widest mb-3">Ayuda</p>
          <h1 className="section-title mb-4">Preguntas frecuentes</h1>
          <p className="section-subtitle">Instrucciones breves para usar la plataforma</p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <details key={index} className="card gradient-border group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <summary className="cursor-pointer font-semibold text-ink flex items-center justify-between list-none">
                {faq.question}
                <span className="text-cobalt ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-soft mt-4 leading-relaxed animate-fade-in">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="card gradient-border animate-fade-in-up stagger-1">
          <h2 className="font-serif text-xl font-bold text-ink mb-4">Pasos rápidos</h2>
          <ol className="list-decimal list-inside space-y-3 text-soft">
            <li>Consulta la programación y elige un día.</li>
            <li>Revisa el horario y el lugar de la actividad.</li>
            <li>Compara los kits y elige el tuyo.</li>
            <li>Usa los enlaces oficiales para inscribirte o comprar.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
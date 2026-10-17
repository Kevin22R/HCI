export default function Footer() {
  return (
    <footer className="bg-nightDeep relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cobalt/40 to-transparent" aria-hidden="true" />
      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              Uniautónoma Fest 2026
            </h3>
            <p className="text-whiteMuted text-sm md:text-base leading-relaxed max-w-md">
              Cinco días para la comunidad uniautónoma y para quien viene de afuera.
              Carnaval, premios, hackatón, carrera 5K, feria, bingo y fiesta blanca.
            </p>
            <p className="text-whiteMuted/80 text-sm mt-6">
              19 al 23 de octubre de 2026 · Popayán, Cauca, Colombia
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">Redes oficiales</h4>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a
                  href="https://www.instagram.com/uniautonomadelcauca/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-whiteMuted hover:text-cobalt transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/uniautonomadc/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-whiteMuted hover:text-cobalt transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-whiteMuted/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.548.573c-2.887-.003-5.448 1.255-6.447 4.586-1.063-3.552-4.338-3.805-7.136-1.68-3.552 2.083-2.977 6.409-1.12 8.789 1.269 1.61 2.272 3.736 3.288 5.459l-.488 3.562c-.353 1.603-.61 3.123-.61 4.717 0 3.057 2.275 5.518 5.518 5.518 1.895 0 3.724-.83 4.871-2.272l.456-.333c.963 1.728 2.55 3.293 5.746 3.293 3.732 0 6.602-3.009 5.746-6.896-.567-2.564-2.622-5.15-5.746-5.687.353-2.127.353-3.761.353-4.975 0-2.861-1.255-5.518-3.517-7.583-2.452-2.272-5.847-2.083-8.678-1.628" />
                </svg>
                <span>TikTok: Próximamente</span>
              </li>
              <li className="flex items-center gap-3 text-whiteMuted/60">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.46A12.57 12.57 0 0 1 12 0C5.37 0 .01 5.37.01 12c0 2.3.59 4.47 1.7 6.36V17H6v4h4v-4h3l1-4h-3V12c0-2.32 1.42-4.27 3.5-4.27 1.02 0 1.9.08 2.16.12v2.3h-1.5c-1.15 0-1.38.54-1.38 1.33V15h2.5l-.36 4H15v10c4.18-1.83 7-5.97 7-10.6v-.24c0-.37-.01-.74-.02-1.1" />
                </svg>
                <span>WhatsApp: Próximamente</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">Contacto</h4>
            <ul className="space-y-3 text-sm text-whiteMuted" role="list">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cobalt/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:fest@uniautonoma.edu.co" className="hover:text-cobalt transition-colors">fest@uniautonoma.edu.co</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cobalt/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 2.257a1 1 0 00-.502 1.21l1.498 4.493a1 1 0 01-.948.684H5a2 2 0 01-2-2V5z" />
                </svg>
                <a href="tel:+5728200000" className="hover:text-cobalt transition-colors">+57 (2) 820 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-whiteMuted/70 leading-relaxed max-w-4xl">
            Aplican términos y condiciones. La programación está sujeta a cambios.
            Está prohibido el consumo de bebidas alcohólicas, sustancias psicoactivas,
            vaper o cigarrillo electrónico dentro de las instalaciones y durante
            los eventos de Uniautónoma del Cauca.
          </p>
          <p className="text-xs text-whiteMuted/50 mt-4 text-center">
            © 2026 Uniautónoma Fest. Corporación Universitaria Autónoma del Cauca.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenido */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Control Total de tus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Cultivos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Software de telemetría y automatización para el agro. 
              Monitorea temperatura, humedad, VPD y controla tu invernadero desde cualquier lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#demo" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold text-center shadow-lg shadow-cyan-500/50"
              >
                Solicitar Demo Gratis
              </a>
              <a 
                href="#features" 
                className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all font-semibold text-center"
              >
                Ver Funcionalidades
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                <div className="text-sm text-slate-400">Monitoreo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Automatizado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">Cloud</div>
                <div className="text-sm text-slate-400">En la Nube</div>
              </div>
            </div>
          </div>

          {/* Preview del dashboard */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 shadow-2xl overflow-hidden">
              <img 
                src="/linneo_mockup.png" 
                alt="Linneo Dashboard - Control de cultivos" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Efecto de brillo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Onda decorativa */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#0f172a"/>
        </svg>
      </div>
    </section>
  );
}

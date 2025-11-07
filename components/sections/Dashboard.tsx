import { Thermometer, LineChart, Target, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contenido */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Dashboard Intuitivo y Completo
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Accede a toda la información de tus cultivos desde una interfaz moderna y fácil de usar.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Mediciones en Tiempo Real</h3>
                  <p className="text-slate-400">
                    Temperatura, humedad y VPD actualizados constantemente con medidores visuales circulares.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Gráficos Históricos</h3>
                  <p className="text-slate-400">
                    Visualiza tendencias por día, semana, mes o año para tomar mejores decisiones.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Control de Salas</h3>
                  <p className="text-slate-400">
                    Gestiona múltiples salas y cultivos desde un solo lugar con facilidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Control de Actuadores</h3>
                  <p className="text-slate-400">
                    Activa o desactiva luces, ventiladores, humidificadores y más con un click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen del dashboard */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl overflow-hidden">
              <img 
                src="/salas-cultivo.png" 
                alt="Linneo Dashboard - Vista de salas y gráficos" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <img 
                src="/dashboard-camaras.png" 
                alt="Linneo Dashboard - Cámaras de seguridad" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Efecto de brillo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

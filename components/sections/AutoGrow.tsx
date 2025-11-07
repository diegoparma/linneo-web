import { Settings, Sliders, Calendar, RefreshCw, CheckCircle } from 'lucide-react';

export default function AutoGrow() {
  return (
    <section id="auto-grow" className="py-24 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Auto-Grow: Automatización Total
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Crea planes inteligentes que controlan automáticamente todos los aspectos de tu cultivo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Planes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Gestión de Planes</h3>
            <div className="space-y-6">
              {/* Plan 1 */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Mantener humedad</h4>
                      <p className="text-sm text-slate-400">Flora • Easy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm font-medium">Activo</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">humidity</span>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Foliar en plan</h4>
                      <p className="text-sm text-slate-400">Flora • Pro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm font-medium">Activo</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">fan 4</span>
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">LED-light-11</span>
                </div>
              </div>

              {/* Plan 3 */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Mantener fanes y luz</h4>
                      <p className="text-sm text-slate-400">Flora • Pro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm font-medium">Activo</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">LED-light-11</span>
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">fan 4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Características */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Características de Auto-Grow</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Planes Personalizables</h4>
                  <p className="text-slate-400">
                    Crea planes Easy o Pro según tu nivel de experiencia y necesidades específicas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sliders className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Control de Actuadores</h4>
                  <p className="text-slate-400">
                    Asocia múltiples actuadores (luces, fans, humidificadores) a cada plan automático.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Programación Horaria</h4>
                  <p className="text-slate-400">
                    Define horarios específicos para cada acción, optimizando el ciclo de tu cultivo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Múltiples Salas</h4>
                  <p className="text-slate-400">
                    Gestiona planes diferentes para cada sala o cultivo de forma independiente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Estado en Tiempo Real</h4>
                  <p className="text-slate-400">
                    Visualiza qué planes están activos y qué actuadores están funcionando en cada momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Automatiza tu cultivo hoy mismo
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Ahorra tiempo y optimiza resultados con planes automáticos inteligentes
          </p>
          <a 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold shadow-lg shadow-cyan-500/50"
          >
            Probar Auto-Grow Gratis
          </a>
        </div>
      </div>
    </section>
  );
}

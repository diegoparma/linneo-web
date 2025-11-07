import { BarChart3, Bot, Thermometer, Video, Users, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard en Tiempo Real',
      description: 'Visualiza todos los parámetros de tu cultivo: temperatura, humedad, VPD y más.'
    },
    {
      icon: Bot,
      title: 'Automatización Inteligente',
      description: 'Planes automáticos que controlan luces, ventilación y riego según tus necesidades.'
    },
    {
      icon: Thermometer,
      title: 'Sensores Precisos',
      description: 'Configura alertas personalizadas por cada sensor para mantener el control total.'
    },
    {
      icon: Video,
      title: 'Cámaras IP Integradas',
      description: 'Monitorea visualmente tu cultivo desde cualquier lugar las 24 horas.'
    },
    {
      icon: Users,
      title: 'Gestión de Usuarios',
      description: 'Control de acceso y registro completo de todas las acciones del sistema.'
    },
    {
      icon: TrendingUp,
      title: 'Historial y Reportes',
      description: 'Análisis de datos históricos para optimizar tus cultivos continuamente.'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Funcionalidades Completas
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Todo lo que necesitas para controlar y optimizar tus cultivos en una sola plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

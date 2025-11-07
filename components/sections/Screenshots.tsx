'use client';

import { useState } from 'react';

export default function Screenshots() {
  const screenshots = [
    {
      title: 'Dashboard Principal',
      description: 'Vista completa del estado de tu cultivo con medidores en tiempo real',
      image: '/dashboard-main.png'
    },
    {
      title: 'Configuración de Sensores',
      description: 'Personaliza alertas y rangos para cada sensor instalado',
      image: '/configuracion-sensores.png'
    },
    {
      title: 'Planes Auto-Grow',
      description: 'Gestiona automatizaciones inteligentes para tu cultivo',
      image: '/planes-autogrow.png'
    },
    {
      title: 'Atajos Rápidos',
      description: 'Acceso rápido a tus atajosconfigurados más frecuentes',
      image: '/atajos.png'
    },
    {
      title: 'Control de Actuadores',
      description: 'Gestiona luces, ventiladores, humidificadores y más',
      image: '/actuadores.png'
    },
    {
      title: 'Gestión de Salas',
      description: 'Monitorea múltiples salas de cultivo simultáneamente',
      image: '/salas-cultivo.png'
    },
    {
      title: 'Registro de Actividad',
      description: 'Historial completo de todas las acciones en el sistema',
      image: '/registros-usuarios.png'
    },
    {
      title: 'Perfil de Usuario',
      description: 'Administra tu cuenta y preferencias personales',
      image: '/perfil-usuario.png'
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="screenshots" className="py-24 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explora la Plataforma
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Interfaz moderna e intuitiva diseñada para facilitar el control total de tus cultivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(screenshot.image)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-cyan-400"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Vista ampliada"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}

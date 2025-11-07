'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solicita una Demo
            </h2>
            <p className="text-xl md:text-2xl text-slate-400">
              Descubre cómo Linneo puede transformar tu operación agrícola
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-300 mb-2 font-medium">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="+54 9 261 302 6217"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-slate-300 mb-2 font-medium">
                    Empresa / Cultivo
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Mi Cultivo SRL"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold shadow-lg shadow-cyan-500/50"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  ¿Por qué elegir Linneo?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Fácil Implementación</h4>
                      <p className="text-slate-400">Setup rápido y soporte técnico incluido</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Escalable</h4>
                      <p className="text-slate-400">Desde un invernadero hasta operaciones industriales</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ahorro de Recursos</h4>
                      <p className="text-slate-400">Optimiza agua, energía y tiempo de trabajo</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Soporte Local</h4>
                      <p className="text-slate-400">Equipo en Argentina disponible para ayudarte</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4">Información de Contacto</h4>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📧</span>
                    <span>info@linneo.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📱</span>
                    <span>+54 9 261 302 6217</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
                    <span>Maipú, Mendoza, Argentina</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-2">🎁 Oferta de Lanzamiento</h4>
                <p className="text-slate-300 text-sm">
                  Los primeros 50 clientes reciben 3 meses gratis de monitoreo premium y soporte prioritario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

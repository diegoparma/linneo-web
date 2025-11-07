import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Linneo</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Software de control de cultivos y telemetría para el agro. 
              Monitorea, controla y optimiza tus cultivos con tecnología de punta.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#auto-grow" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Auto-Grow
                </Link>
              </li>
              <li>
                <Link href="#sensores" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Sensores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#demo" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Solicitar Demo
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="mailto:info@linneo.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  info@linneo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-10 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Linneo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

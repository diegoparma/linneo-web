'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 md:px-12 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold text-white">Linneo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#dashboard" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Dashboard
            </Link>
            <Link href="#auto-grow" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Auto-Grow
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contacto
            </Link>
            <Link 
              href="#demo" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Solicitar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="#features" className="block text-slate-300 hover:text-cyan-400 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#dashboard" className="block text-slate-300 hover:text-cyan-400 transition-colors">
              Dashboard
            </Link>
            <Link href="#auto-grow" className="block text-slate-300 hover:text-cyan-400 transition-colors">
              Auto-Grow
            </Link>
            <Link href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors">
              Contacto
            </Link>
            <Link 
              href="#demo" 
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
            >
              Solicitar Demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

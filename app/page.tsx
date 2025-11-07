import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Dashboard from '@/components/sections/Dashboard';
import Screenshots from '@/components/sections/Screenshots';
import AutoGrow from '@/components/sections/AutoGrow';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Screenshots />
        <AutoGrow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

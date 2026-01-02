import { ArrowUpRight, Landmark, Car, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* HERO SECTION: SKALA ELEGAN & PROPOSIONAL */}
      <section className="relative pt-20 md:pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-8 md:mb-10">
            <Zap className="w-3.5 h-3.5 text-black fill-gold" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black">2026 Intelligence Protocol</span>
          </div>
          
          {/* JUDUL UTAMA: Diturunkan dari 7xl ke 5xl/6xl untuk kesan Elit */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black mb-8 md:mb-10 leading-[1.1] md:leading-[1] uppercase transition-all">
            PRECISION <br />
            <span className="text-gold italic">REDEFINED.</span>
          </h1>
          
          {/* DESKRIPSI: Skala text-sm/base agar lebih bersih & profesional */}
          <p className="text-sm md:text-base lg:text-lg text-black max-w-xl mx-auto leading-relaxed font-bold mb-10 md:mb-14 opacity-80">
            Experience the pinnacle of programmatic calculation. We deliver absolute accuracy for high-stakes financial modeling and elite digital insights.
          </p>

          <div className="flex justify-center">
            <Link href="/finance" className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full transition-all hover:bg-gold hover:text-black shadow-lg">
              <span className="text-xs md:text-sm font-black uppercase tracking-widest">Explore Index</span>
              <ArrowUpRight className="w-4 h-4 text-gold transition-colors group-hover:text-black" />
            </Link>
          </div>
        </div>
        
        {/* Watermark diperkecil skalanya */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.01] select-none z-0">
          LIFECALC
        </div>
      </section>

      {/* DIRECTORY: SKALA GRID YANG LEBIH PROPOSIONAL */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-black/10">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            {/* Judul Section: Turun ke 3xl/4xl agar tidak mendominasi berlebihan */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase text-black leading-tight">
              Market <br /><span className="text-gold">Intelligence.</span>
            </h2>
            <p className="text-sm font-bold text-black max-w-xs leading-relaxed opacity-70">
              Our programmatic engine covers 2,000+ localized financial models for the automotive sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* CARDS: Ukuran font di dalam kartu diperkecil agar rapi */}
            <Link href="/finance" className="group p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] transition-all hover:shadow-[10px_10px_0px_0px_rgba(197,160,89,1)]">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 md:mb-8">
                <Car className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-3 uppercase text-black">Automotive Finance</h3>
              <p className="text-sm md:text-base text-black leading-relaxed mb-8 font-bold opacity-70">
                Professional-grade amortization schedules and localized interest rate variations for premium acquisitions.
              </p>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gold flex items-center gap-2">
                Access Reports <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="/about" className="group p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center mb-6 md:mb-8">
                <Landmark className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter mb-3 uppercase text-black">Institutional Vision</h3>
              <p className="text-sm md:text-base text-black leading-relaxed mb-8 font-bold opacity-70">
                Redefining calculation integrity through the verified LifeCalc programmatic SEO infrastructure.
              </p>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
                Learn Protocol <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION: REFINED FOR LAPTOP */}
      <section className="bg-black py-20 md:py-28 px-6 rounded-[2.5rem] md:rounded-[4rem] mx-4 md:mx-6 mb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-12 md:mb-16 leading-tight uppercase">
            AUTHORITY IN <br /><span className="text-gold">NUMBERS.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 text-left">
            <div className="space-y-3 md:space-y-4">
              <div className="w-10 h-0.5 bg-gold"></div>
              <h4 className="text-gold text-xs font-black uppercase tracking-widest">Precision Standard</h4>
              <p className="text-white text-sm md:text-base leading-relaxed font-bold italic opacity-80">
                Our calculation protocols are refined for the 2026 global economic standard, ensuring absolute data clarity.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="w-10 h-0.5 bg-gold"></div>
              <h4 className="text-gold text-xs font-black uppercase tracking-widest">Digital Integrity</h4>
              <p className="text-white text-sm md:text-base leading-relaxed font-bold italic opacity-80">
                Zero-retention policy on all financial curiosity data. Security is integrated into our programmatic core.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
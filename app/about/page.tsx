import { Landmark, Target, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* HERO SECTION: SKALA ELEGAN & RAPI */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-10 border-b-2 border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <div className="w-8 h-1 md:w-10 md:h-1.5 bg-gold"></div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black">
              Institutional Identity
            </span>
          </div>
          
          {/* JUDUL: Diturunkan ke 5xl/6xl untuk kesan Elit */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black mb-8 md:mb-10 uppercase leading-[1.1] md:leading-[0.9]">
            OUR VISION. <br /><span className="text-gold italic">REDEFINING INTEGRITY.</span>
          </h1>
          
          {/* DESKRIPSI: Skala text-sm/base agar lebih profesional */}
          <p className="text-sm md:text-base lg:text-lg text-black max-w-2xl leading-relaxed font-bold opacity-70">
            Setting the 2026 global standard for programmatic financial intelligence and calculation transparency.
          </p>
        </div>
      </section>

      {/* MISSION SECTION: BORDER TIPIS & RUANG LEGA */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-black uppercase mb-6 md:mb-8">
              The Protocol
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base text-black leading-relaxed font-bold opacity-70">
                LifeCalc was founded on a single core principle: <strong>Absolute Accuracy.</strong> In an era of fragmented data, we provide the definitive source for financial modeling.
              </p>
              <p className="text-sm md:text-base text-black leading-relaxed font-bold opacity-70">
                Our programmatic infrastructure is designed to serve over 2,000 localized markets, ensuring that every calculation is verified against real-time economic shifts.
              </p>
            </div>
          </div>
          
          {/* CARD LEGACY: BORDER-2 */}
          <div className="p-8 md:p-10 bg-black rounded-[2rem] md:rounded-[2.5rem] text-white border-2 border-gold shadow-xl relative overflow-hidden">
            <Target className="w-10 h-10 text-gold mb-6" />
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase">Our Legacy</h3>
            <p className="text-sm md:text-base text-white leading-relaxed font-bold italic opacity-80">
              "We don't just calculate numbers; we verify the future of digital financial authority."
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES: SKALA RAPI */}
      <section className="bg-white border-y-2 border-black/10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black tracking-tighter text-black uppercase mb-12 md:mb-20">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
            <div className="space-y-3">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-2" />
              <h4 className="text-base md:text-lg font-black text-black uppercase">User Authority</h4>
              <p className="text-[11px] md:text-xs font-bold text-black leading-relaxed opacity-70">
                Empowering individuals with professional-grade financial tools previously reserved for elite institutions.
              </p>
            </div>
            <div className="space-y-3">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-2" />
              <h4 className="text-base md:text-lg font-black text-black uppercase">Data Integrity</h4>
              <p className="text-[11px] md:text-xs font-bold text-black leading-relaxed opacity-70">
                Rigorous verification protocols for every data point within our 2,000+ localized models.
              </p>
            </div>
            <div className="space-y-3">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-2" />
              <h4 className="text-base md:text-lg font-black text-black uppercase">2026 Standard</h4>
              <p className="text-[11px] md:text-xs font-bold text-black leading-relaxed opacity-70">
                Leading the programmatic SEO landscape with high-quality, verified financial content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION: BORDER-2 */}
      <section className="py-16 md:py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto p-8 md:p-12 bg-white border-2 border-black rounded-[2rem] md:rounded-[2.5rem] shadow-[10px_10px_0px_0px_rgba(197,160,89,1)]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-black uppercase mb-6">
            Ready to Start?
          </h2>
          <p className="text-base md:text-lg text-black font-bold mb-8 md:mb-10 opacity-70">
            Experience the precision of the LifeCalc intelligence protocol today.
          </p>
          <Link href="/finance" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-xs md:text-sm font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-lg">
            Explore Finance Index <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
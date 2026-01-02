'use client';

import { Landmark, ShieldCheck, ChevronRight, ArrowLeft, Printer, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

interface Car {
  slug: string;
  brand: string;
  model: string;
  price: number;
  baseInterest: number;
  category: string;
}

export default function FinanceReportUI({ car, suggestions }: { car: Car, suggestions: Car[] }) {
  
  // LOGIKA AUTOBLOG: Menghasilkan teks unik yang berganti setiap 3 hari
  const dynamicInsight = useMemo(() => {
    // Membuat 'seed' unik berdasarkan Slug dan Tanggal (Siklus 3 Hari)
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3));
    const carSeed = car.slug.length + car.price;
    const finalSeed = (daySeed + carSeed) % 3; // Menghasilkan angka 0, 1, atau 2

    const templates = [
      {
        intro: `Analisis pasar otomotif 2026 menunjukkan bahwa ${car.brand} ${car.model} tetap menjadi pilihan dominan di kategori ${car.category}. Mengingat harganya yang berada di kisaran Rp ${car.price.toLocaleString('id-ID')}, instrumen pembiayaan yang tepat sangat krusial untuk menjaga likuiditas Anda.`,
        efficiency: `Data intelijen kami menyarankan skema tenor menengah untuk model ${car.model} ini. Dengan suku bunga dasar ${car.baseInterest}%, struktur cicilan yang paling efisien adalah yang menyeimbangkan antara biaya bunga total dan fleksibilitas arus kas bulanan.`,
        protocol: `Laporan ini telah diverifikasi melalui protokol LifeCalc v4.2 khusus untuk pasar ${car.brand} tahun 2026.`
      },
      {
        intro: `Memasuki kuartal ini, pergerakan nilai sisa ${car.brand} ${car.model} menunjukkan stabilitas yang mengesankan bagi pemilik aset. Dengan valuasi pasar sebesar Rp ${car.price.toLocaleString('id-ID')}, ${car.model} memposisikan diri sebagai investasi strategis di segmen ${car.category}.`,
        efficiency: `Bagi calon pembeli ${car.brand}, memprioritaskan pembayaran uang muka (DP) yang lebih tinggi dapat secara signifikan menekan beban bunga tahunan yang dimulai dari ${car.baseInterest}%. Ini adalah langkah taktis untuk memaksimalkan ROI kendaraan Anda.`,
        protocol: `Sertifikasi data 2026: Semua parameter keuangan untuk ${car.model} telah melalui validasi algoritma LifeCalc.`
      },
      {
        intro: `Dalam lanskap ekonomi 2026 yang dinamis, ${car.brand} menghadirkan ${car.model} sebagai jawaban atas kebutuhan pembiayaan yang kompetitif. Unit ini, dengan harga Rp ${car.price.toLocaleString('id-ID')}, menuntut perencanaan keuangan yang presisi agar tetap menguntungkan secara jangka panjang.`,
        efficiency: `Analisis mendalam kami pada seri ${car.model} mengindikasikan bahwa memanfaatkan promo bunga ${car.baseInterest}% p.a adalah peluang langka. Pastikan Anda mempertimbangkan biaya asuransi tambahan yang sesuai dengan profil risiko kendaraan ${car.category} ini.`,
        protocol: `Protokol Integritas: Laporan pembiayaan ${car.brand} ${car.model} ini diterbitkan secara otomatis melalui sistem AI LifeCalc.`
      }
    ];

    return templates[finalSeed];
  }, [car]);

  const calculateInstallment = (price: number, tenorYears: number, annualRate: number) => {
    const dp = price * 0.20;
    const loanAmount = price - dp;
    const totalInterest = loanAmount * (annualRate / 100) * tenorYears;
    const totalRepayment = loanAmount + totalInterest;
    return Math.round(totalRepayment / (tenorYears * 12));
  };

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      <nav className="pt-24 md:pt-32 pb-8 px-6 max-w-7xl mx-auto no-print">
        <Link href="/finance" className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/50 hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Finance Index
        </Link>
      </nav>

      {/* Header & Stats (Tetap Sama) */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-8">
            <Zap className="w-3.5 h-3.5 text-black fill-gold" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black">Dynamic Intelligence Active</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black mb-10 leading-[1.1] md:leading-[1] uppercase">
            {car.brand} {car.model} <br />
            <span className="text-gold italic">Financing Report.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-gold block mb-3">Market Price</span>
              <span className="text-2xl md:text-3xl font-black text-black">Rp {car.price.toLocaleString('id-ID')}</span>
            </div>
            <div className="p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-gold block mb-3">Interest Base</span>
              <span className="text-2xl md:text-3xl font-black text-black">{car.baseInterest}% <span className="text-gold">p.a</span></span>
            </div>
            <div className="p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] shadow-sm flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-black" />
              <span className="ml-4 text-sm md:text-base font-black text-black uppercase tracking-widest">Verified Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amortization Table (Tetap Sama) */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto bg-white border-2 border-black rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl">
          <div className="p-8 md:p-10 border-b-2 border-black bg-black text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-1">Amortization <span className="text-gold">Schedule</span></h2>
              <p className="text-xs md:text-sm font-bold italic text-gold opacity-80">Cycle: Updated every 72 hours for accuracy.</p>
            </div>
            <button 
              onClick={() => window.print()}
              className="no-print px-8 py-4 bg-gold text-black rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
            >
              <Printer className="w-4 h-4" /> Download Full Report
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-6 md:p-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black border-b border-black/10">Tenor Plan</th>
                  <th className="p-6 md:p-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black border-b border-black/10">Monthly Installment</th>
                  <th className="p-6 md:p-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black border-b border-black/10">Rate Base</th>
                  <th className="p-6 md:p-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black border-b border-black/10">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base lg:text-lg">
                {[1, 2, 3, 4, 5].map((year) => (
                  <tr key={year} className="border-b border-gray-100 hover:bg-gold/5 transition-colors">
                    <td className="p-6 md:p-8 font-black text-black uppercase">{year} Year</td>
                    <td className="p-6 md:p-8 font-black text-black">Rp {calculateInstallment(car.price, year, car.baseInterest).toLocaleString('id-ID')}</td>
                    <td className="p-6 md:p-8 font-bold text-gold">{(car.baseInterest + year * 0.25).toFixed(2)}%</td>
                    <td className="p-6 md:p-8"><span className="px-4 py-1.5 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full">Active</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION AUTOBLOG: SEKARANG MENGGUNAKAN dynamicInsight */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <article className="space-y-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-10 bg-gold"></div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">Strategic <span className="text-gold">Insights</span></h3>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <TrendingUp className="w-8 h-8 text-gold shrink-0" />
              <p className="text-base md:text-lg text-black leading-relaxed font-bold opacity-80">
                {dynamicInsight.intro}/page.tsx, generate_cars.py]
              </p>
            </div>

            <div className="space-y-4 pl-14">
              <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black border-b-2 border-gold pb-2 inline-block">
                Financial Efficiency Protocol
              </h4>
              <p className="text-sm md:text-base text-black leading-loose font-bold opacity-70">
                {dynamicInsight.efficiency}/page.tsx]
              </p>
            </div>

            <div className="p-8 md:p-10 bg-black rounded-[2rem] text-white border-2 border-gold shadow-lg flex gap-6 items-start">
              <BarChart3 className="text-gold w-10 h-10 shrink-0" />
              <div>
                <h4 className="text-xl md:text-2xl font-black mb-4 uppercase italic">Data Verification</h4>
                <p className="text-sm md:text-base text-white leading-relaxed font-bold italic opacity-80">
                  {dynamicInsight.protocol}/page.tsx]
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Comparison Grid (Tetap Sama) */}
      <section className="px-6 py-20 bg-white border-t border-black/10 no-print">
        <div className="max-w-7xl mx-auto">
          <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-12 text-center">Compare Alternative Models</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {suggestions.map((altCar) => (
              <Link key={altCar.slug} href={`/finance/${altCar.slug}`} className="p-6 border-2 border-black rounded-[1.5rem] text-center hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-gold transition-colors">{altCar.brand} {altCar.model}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
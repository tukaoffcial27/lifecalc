'use client'; // Wajib untuk fitur pencarian interaktif

import { useState } from 'react';
import { ChevronRight, Landmark, Car, ShieldCheck, Search, X } from 'lucide-react';
import Link from 'next/link';
// Menggunakan path relatif agar sinkronisasi data stabil
import carsData from '../../data/cars.json'; 

interface CarItem {
  slug: string;
  brand: string;
  model: string;
  price: number;
  baseInterest: number;
  category: string;
}

const cars = carsData as CarItem[];

export default function FinanceDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  // LOGIKA PENCARIAN: Memfilter 10.000 data secara cerdas
  const filteredCars = cars.filter(car => 
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mengambil brand unik dari hasil pencarian
  const brands = Array.from(new Set(filteredCars.map(car => car.brand)));

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      {/* HERO SECTION: SKALA ELIT */}
      <section className="pt-20 md:pt-32 pb-16 px-6 md:px-10 border-b-2 border-black/10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8 md:mb-10">
            <div className="w-8 h-1 bg-gold"></div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black">
              Financial Intelligence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black mb-8 uppercase leading-[0.9]">
            AUTO LOAN <br /><span className="text-gold italic">INDEX.</span>
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-black max-w-xl leading-relaxed font-bold opacity-70 mx-auto md:mx-0">
            Access {cars.length.toLocaleString()} verified automotive reports. Programmatic precision for the 2026 economic landscape.
          </p>
        </div>
      </section>

      {/* STATS BAR: REAL-TIME COUNTER */}
      <section className="bg-white border-b border-black/5 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-4xl font-black text-black">{filteredCars.length.toLocaleString()}</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-gold">Results Found</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-4xl font-black text-black">100%</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-gold">Accuracy</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-4xl font-black text-black">2026</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-gold">Verified</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-4xl font-black text-black">Elite</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-gold">Access</span>
          </div>
        </div>
      </section>

      {/* SEARCH PROTOCOL: SKALA PROFESIONAL */}
      <section className="sticky top-20 z-40 bg-[#FCFBFA]/80 backdrop-blur-md py-6 px-6 border-b border-black/5">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gold">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text"
            placeholder="SEARCH BRAND OR MODEL (E.G. LEXUS RX)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-14 py-5 bg-white border-2 border-black rounded-full font-black text-sm uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-gold transition-all shadow-lg"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-black hover:text-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </section>

      {/* DIRECTORY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {brands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {brands.map((brandName) => {
              const brandCars = filteredCars.filter(c => c.brand === brandName);

              return (
                <div key={brandName} className="p-8 md:p-10 bg-white border-2 border-black rounded-[2rem] hover:shadow-[10px_10px_0px_0px_rgba(197,160,89,1)] transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-[9px] font-black text-white bg-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                      {brandCars.length} Models Found
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-8 text-black uppercase">{brandName}</h3>
                  
                  <div className="space-y-4 mb-10">
                    {/* Menampilkan 5 hasil teratas untuk tiap brand agar tidak terlalu panjang */}
                    {brandCars.slice(0, 5).map((car) => (
                      <Link 
                        key={car.slug} 
                        href={`/finance/${car.slug}`}
                        className="flex justify-between items-center text-sm md:text-base font-bold text-black hover:text-gold transition-colors py-3 border-b border-gray-100 group/item"
                      >
                        <span>{car.model}</span>
                        <ChevronRight className="w-4 h-4 text-gold transition-transform group-hover/item:translate-x-1" />
                      </Link>
                    ))}
                  </div>

                  <Link 
                    href={`/finance/category/${brandName.toLowerCase()}`}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-black border-b-2 border-gold hover:border-black transition-all pb-1.5"
                  >
                    View Intelligence Report <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black uppercase text-black/20 tracking-tighter">No Intelligence Found for "{searchTerm}"</h3>
          </div>
        )}
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center border-t border-black/5">
        <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-8" />
        <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-relaxed opacity-70">
          Search results are synchronized with the 10,000+ localized report database. 2026 lifecalc protocol.
        </p>
      </section>
    </div>
  );
}
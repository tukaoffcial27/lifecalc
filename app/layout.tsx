import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Menu, X, Landmark, ShieldCheck, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LifeCalc | Precision Finance Intelligence',
  description: 'Elite financial modeling and calculation suite.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6834526241041119"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} bg-[#FCFBFA] text-black font-medium antialiased`}>
        
        {/* 1. HEADER: SKALA DIPERHALUS UNTUK KESAN ELEGAN */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/20 shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                <Landmark className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:text-black transition-colors" />
              </div>
              {/* Logo diturunkan ke text-xl/2xl agar tidak terlalu dominan */}
              <span className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase">
                LIFECALC
              </span>
            </Link>

            {/* NAVIGASI DESKTOP: Ukuran teks diturunkan ke text-sm agar lebih profesional */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/finance" className="text-sm font-black uppercase tracking-widest text-black hover:text-gold transition-colors">Finance</Link>
              <Link href="/about" className="text-sm font-black uppercase tracking-widest text-black hover:text-gold transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-widest text-black hover:text-gold transition-colors">Contact</Link>
              <Link href="/finance" className="px-6 py-3 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-md">Get Started</Link>
            </div>

            <label htmlFor="nav-toggle" className="md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-7 h-7 text-black" />
            </label>
          </nav>
        </header>

        {/* 2. LOGIKA MENU SANDWICH (Data tetap utuh) */}
        <input type="checkbox" id="nav-toggle" className="peer hidden" />
        <label htmlFor="nav-toggle" className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-0 pointer-events-none peer-checked:opacity-100 transition-opacity duration-300 md:hidden"></label>
        
        <div className="fixed top-0 right-0 w-[75%] md:w-80 h-full bg-[#C5A059] z-[100] translate-x-full peer-checked:translate-x-0 transition-transform duration-500 ease-in-out md:hidden shadow-[-25px_0_50px_rgba(0,0,0,0.5)] border-l-2 border-black/20">
          <div className="flex flex-col h-full bg-[#C5A059] p-8">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-black/20">
              <div className="flex items-center gap-2">
                <Landmark className="w-6 h-6 text-black" />
                <span className="text-xl font-black text-black tracking-tighter uppercase">LIFECALC</span>
              </div>
              <label htmlFor="nav-toggle" className="cursor-pointer p-2 hover:bg-black/10 rounded-lg">
                <X className="w-7 h-7 text-black" />
              </label>
            </div>

            <div className="flex flex-col gap-6 mb-auto">
              <Link href="/finance" className="group flex items-center gap-4">
                <span className="text-[10px] font-black text-black/40">01</span>
                <span className="text-base font-black text-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">FINANCE</span>
              </Link>
              <Link href="/about" className="group flex items-center gap-4">
                <span className="text-[10px] font-black text-black/40">02</span>
                <span className="text-base font-black text-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">ABOUT</span>
              </Link>
              <Link href="/contact" className="group flex items-center gap-4">
                <span className="text-[10px] font-black text-black/40">03</span>
                <span className="text-lg font-black text-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">CONTACT</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-black/20">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-6">Secure Protocol 2026</p>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center text-black">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="pt-16 md:pt-20 min-h-screen">
          {children}
        </main>

        {/* 4. FOOTER: SKALA LEBIH RAPI DAN PROFESIONAL */}
        <footer className="bg-white border-t border-gold/10 pt-12 md:pt-16 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <span className="text-2xl font-black tracking-tighter text-black uppercase block mb-4">LIFECALC</span>
                <p className="text-sm md:text-base text-black font-bold leading-relaxed max-w-sm opacity-80">
                  Elite programmatic SEO infrastructure for the 2026 financial landscape. Precision modeling through verified intelligence protocols.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8 col-span-1 md:col-span-2">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-6">Intelligence</h4>
                  <div className="flex flex-col gap-4">
                    <Link href="/finance" className="text-sm font-black text-black hover:text-gold transition-colors">Auto Finance Index</Link>
                    <Link href="/about" className="text-sm font-black text-black hover:text-gold transition-colors">Our Vision</Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-6">Legal Protocol</h4>
                  <div className="flex flex-col gap-4">
                    <Link href="/privacy" className="text-sm font-black text-black hover:text-gold transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm font-black text-black hover:text-gold transition-colors">Terms of Service</Link>
                    <Link href="/contact" className="text-sm font-black text-black hover:text-gold transition-colors">Contact Intelligence</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-black text-black uppercase tracking-[0.3em]">
                © 2026 LIFECALC
              </p>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-black" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black">SECURE PROTOCOL</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
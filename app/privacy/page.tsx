export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A1A1A] mb-12 uppercase">
          PRIVACY <span className="font-extralight italic text-gold">PROTOCOL.</span>
        </h1>
        
        <div className="space-y-12 text-sm text-gray-500 leading-loose">
          <section>
            <h2 className="text-[#1A1A1A] font-black uppercase tracking-widest mb-4">1. Data Governance</h2>
            <p>At LifeCalc.app, we operate under a strict zero-retention policy. Your financial calculations, health metrics, and curiosity data are processed in real-time and never stored on our permanent servers.</p>
          </section>

          <section>
            <h2 className="text-[#1A1A1A] font-black uppercase tracking-widest mb-4">2. Advertising & Cookies</h2>
            <p>To sustain our high-precision infrastructure, we utilize Google AdSense as our primary advertising partner. As a verified publisher (pub-6834526241041119), we adhere to the DART cookie protocol to serve relevant, high-value advertisements.</p>
          </section>

          <section className="p-8 bg-white border border-gold/10 rounded-[2rem] italic">
            <h2 className="text-[#1A1A1A] not-italic font-black uppercase tracking-widest mb-4 text-[10px]">Verification Note</h2>
            "All programmatic operations are audited via Google Search Console (PwyP3Pwr) to ensure compliance with the 2026 Digital Privacy Standards."
          </section>

          <section>
            <h2 className="text-[#1A1A1A] font-black uppercase tracking-widest mb-4">3. Third-Party Compliance</h2>
            [cite_start]<p>Our commitment to transparency is reflected in our public <strong>ads.txt</strong> file, ensuring that every ad impression on lifecalc.app is authorized and authentic[cite: 2].</p>
          </section>
        </div>
      </article>
    </div>
  );
}
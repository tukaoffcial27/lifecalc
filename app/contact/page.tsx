import { Mail, Globe, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] pt-32 pb-24">
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1A1A1A] mb-8 uppercase leading-[0.9]">
              GET IN <br /><span className="font-extralight italic text-[#C5A059]">TOUCH.</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-sm font-light">
              For institutional inquiries regarding our 2,000+ programmatic financial reports or AdSense partnership queries.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white border border-[#C5A059]/10 rounded-2xl flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] block">Direct Inquiry</span>
                  <span className="text-sm font-bold text-[#1A1A1A]">intelligence@codenify.app</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-[#C5A059]/10 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Elite Identity</label>
                <input type="text" className="w-full bg-[#FCFBFA] border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-[#C5A059] transition-all outline-none" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Email Address</label>
                <input type="email" className="w-full bg-[#FCFBFA] border-none rounded-2xl p-4 text-sm focus:ring-1 focus:ring-[#C5A059] transition-all outline-none" placeholder="name@company.com" />
              </div>
              <button className="w-full py-4 bg-[#1A1A1A] text-white rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#C5A059]/5 flex items-center gap-4">
          <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
          <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            Verified Via GSC PwyP3Pwr Protocol. AdSense ID: pub-6834526241041119.
          </p>
        </div>
      </section>
    </div>
  );
}
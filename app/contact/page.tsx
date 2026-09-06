import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us — ZENJI',
  description: 'Get in touch with the ZENJI team. We\'re here to help.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden border-b border-zinc-900">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(3rem,14vw,12rem)] font-black tracking-widest text-white/[0.03] leading-none">CONTACT</span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">REACH OUT</p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">CONTACT US</h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-400 tracking-widest">
          We reply within 24–48 hours. No bots. Real humans.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-8">GET IN TOUCH</p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="text-2xl mt-1">📧</span>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1">Email</p>
                <a href="mailto:support@zenji.shop" className="text-sm font-bold text-white hover:text-red-400 transition-colors">
                  support@zenji.shop
                </a>
                <p className="text-xs font-mono text-zinc-500 mt-1">For order queries, returns, sizing help</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl mt-1">⚡</span>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1">Collabs & Press</p>
                <a href="mailto:collab@zenji.shop" className="text-sm font-bold text-white hover:text-red-400 transition-colors">
                  collab@zenji.shop
                </a>
                <p className="text-xs font-mono text-zinc-500 mt-1">Artists, creators, press inquiries</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl mt-1">🕐</span>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-1">Response Time</p>
                <p className="text-sm font-bold text-white">24–48 hours</p>
                <p className="text-xs font-mono text-zinc-500 mt-1">Mon–Fri, 9am–5pm AEST</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-900 pt-8">
            <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mb-4">Follow the Lore</p>
            <div className="flex gap-3">
              {[
                { name: 'TikTok', href: 'https://tiktok.com', id: 'contact-tiktok' },
                { name: 'Instagram', href: 'https://instagram.com', id: 'contact-instagram' },
                { name: 'Facebook', href: 'https://facebook.com', id: 'contact-facebook' },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  id={s.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-700 hover:border-red-500 text-xs font-bold uppercase tracking-widest text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-8">SEND A MESSAGE</p>
          <form className="space-y-4">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Order Number (optional)</label>
              <input
                id="contact-order"
                type="text"
                placeholder="ZNJ-XXXXX"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Subject</label>
              <select
                id="contact-subject"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="">SELECT TOPIC</option>
                <option>Order Query</option>
                <option>Return / Exchange</option>
                <option>Sizing Help</option>
                <option>Shipping Issue</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="YOUR MESSAGE..."
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              id="contact-submit"
              className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Help Centre — ZENJI',
  description: 'ZENJI Help Centre. Find answers, track orders, and get support.',
};

const QUICK_LINKS = [
  { icon: '📦', title: 'Track My Order', desc: 'Check the status of your delivery', href: '/faq#shipping' },
  { icon: '↩️', title: 'Start a Return', desc: 'Initiate a return or exchange', href: '/return-policy' },
  { icon: '📏', title: 'Size Guide', desc: 'Find your perfect oversized fit', href: '/faq#sizing' },
  { icon: '🔔', title: 'Join the Waitlist', desc: 'Get early drop access', href: '/drop' },
  { icon: '⚡', title: 'Collaboration', desc: 'Work with ZENJI', href: '/collaboration' },
  { icon: '💬', title: 'Contact Support', desc: 'Talk to a human', href: '/contact' },
];

const POPULAR = [
  { q: 'How do I track my order?', href: '/faq' },
  { q: 'What is your return policy?', href: '/return-policy' },
  { q: 'Do you restock sold-out items?', href: '/faq' },
  { q: 'What sizes do you carry?', href: '/faq' },
  { q: 'How long does shipping take?', href: '/faq' },
  { q: 'Can I cancel my order?', href: '/faq' },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden border-b border-zinc-900">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(3rem,14vw,12rem)] font-black tracking-widest text-white/[0.03] leading-none">HELP</span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">SUPPORT CENTRE</p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">HELP CENTRE</h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-400 tracking-widest max-w-lg mx-auto">
          Find answers fast. No chatbots. Real help.
        </p>
      </div>

      {/* Quick links grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-8">QUICK ACCESS</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {QUICK_LINKS.map(link => (
            <Link
              key={link.title}
              href={link.href}
              id={`help-${link.title.toLowerCase().replace(/\s/g, '-')}`}
              className="border border-zinc-800 p-6 hover:border-red-600 transition-colors group"
            >
              <span className="text-3xl mb-3 block">{link.icon}</span>
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-1 group-hover:text-red-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-[10px] font-mono text-zinc-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Questions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 border-t border-zinc-900">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-8">POPULAR QUESTIONS</p>
        <div className="space-y-px">
          {POPULAR.map(item => (
            <Link
              key={item.q}
              href={item.href}
              className="flex items-center justify-between px-5 py-4 border border-zinc-800 hover:border-red-600 transition-colors group"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-red-400 transition-colors">
                {item.q}
              </span>
              <span className="text-zinc-500 group-hover:text-red-500 transition-colors ml-4">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="py-16 text-center px-4 border-t border-zinc-900 bg-zinc-950">
        <p className="text-[9px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3">DIDN&apos;T FIND WHAT YOU NEED?</p>
        <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6">CONTACT SUPPORT</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            id="help-contact-btn"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            SEND A MESSAGE →
          </Link>
          <a
            href="mailto:support@zenji.shop"
            id="help-email-btn"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            EMAIL SUPPORT
          </a>
        </div>
        <p className="mt-4 text-[10px] font-mono text-zinc-600">We reply within 24–48 hours, Mon–Fri</p>
      </div>
    </main>
  );
}

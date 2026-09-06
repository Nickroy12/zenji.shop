import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Story — ZENJI',
  description: 'How ZENJI was born from anime, obsession, and the streets.',
};

const TIMELINE = [
  {
    year: '2023',
    event: 'THE ORIGIN',
    desc: 'ZENJI was born in a small bedroom, late night anime marathons and a single idea: anime deserves a place on the streets.',
  },
  {
    year: '2024',
    event: 'FIRST DROP',
    desc: 'Seven designs. Sold out in 72 hours. The ZENJI community began to form — otaku, gamers, and streetwear heads united.',
  },
  {
    year: '2025',
    event: 'THE ARC EXPANDS',
    desc: 'We launched our first collaboration, entered international shipping, and hit 10,000 followers who lived the lore with us.',
  },
  {
    year: '2026',
    event: 'AWAKENING',
    desc: 'The next chapter begins. New silhouettes, new art, new energy. The arc continues. No restocks. No regrets.',
  },
];

const VALUES = [
  { icon: '⛩️', title: 'ANIME FIRST', desc: 'Every design is rooted in story, arc, and character — not just aesthetics.' },
  { icon: '🔥', title: 'LIMITED ALWAYS', desc: 'We never restock. Each drop is a moment in time. Own it or miss it.' },
  { icon: '🧵', title: 'QUALITY OBSESSED', desc: '240gsm heavyweight cotton, garment washed, oversized fits built to last.' },
  { icon: '🌏', title: 'COMMUNITY DRIVEN', desc: 'Built by fans, for fans. Every drop is shaped by the community who wears it.' },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/image/image.jpg" alt="ZENJI Story" fill className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">THE ARC BEGINS</p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">OUR STORY</h1>
          <p className="mt-4 text-sm font-mono text-zinc-400 tracking-widest max-w-lg mx-auto">
            Born from anime. Built on the streets. Worn by those who survived.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-8">WHO WE ARE</p>
        <blockquote className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
          &ldquo;ZENJI IS NOT JUST A BRAND.
          <span className="text-red-500"> IT IS AN ARC.</span>
          <br />EVERY DROP IS A NEW CHAPTER.&rdquo;
        </blockquote>
        <p className="mt-8 text-sm font-mono text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We create anime-inspired streetwear for the ones who see themselves in the protagonist. 
          The warriors, the cursed ones, the free souls. ZENJI exists for those who wear their arc.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-900">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-12 text-center">THE TIMELINE</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 hidden sm:block" />
          <div className="space-y-12">
            {TIMELINE.map((item) => (
              <div key={item.year} className="sm:pl-10 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-red-600 rounded-full -translate-x-0.5 hidden sm:block" />
                <p className="text-[10px] font-mono tracking-[0.3em] text-red-500 uppercase mb-1">{item.year}</p>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">{item.event}</h3>
                <p className="text-sm font-mono text-zinc-400 leading-relaxed max-w-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3 text-center">WHAT WE STAND FOR</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white text-center mb-12">OUR VALUES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="border border-zinc-800 p-8 hover:border-red-600 transition-colors">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">{v.title}</h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 text-center px-4 border-t border-zinc-900">
        <p className="text-[9px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-4">Join the arc</p>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">WEAR YOUR CHAPTER</h2>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 px-10 py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
        >
          SHOP NOW →
        </Link>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Collaboration — ZENJI',
  description: 'Collab with ZENJI. Artists, brands, content creators — let\'s build the next arc together.',
};

export default function CollaborationPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <div className="py-24 px-4 text-center relative overflow-hidden border-b border-zinc-900">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(3rem,15vw,12rem)] font-black tracking-widest text-white/[0.03] leading-none">COLLAB</span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">
          BUILD WITH US
        </p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">
          COLLABORATION
        </h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-400 tracking-widest max-w-lg mx-auto">
          Artists. Brands. Creators. Legends. Let&apos;s write the next arc together.
        </p>
      </div>

      {/* What We Look For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-12 text-center">WHAT WE LOOK FOR</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '🎨', title: 'ARTISTS', desc: 'Illustrators, concept artists, and anime-inspired creatives who want their art worn on the streets.' },
            { icon: '📹', title: 'CONTENT CREATORS', desc: 'TikTok, Instagram, YouTube — if you live the culture, let\'s create together and drop limited collabs.' },
            { icon: '🏷️', title: 'BRANDS', desc: 'Street culture, gaming, music, tattoo studios. If your brand shares the arc, we\'re listening.' },
          ].map(item => (
            <div key={item.title} className="border border-zinc-800 p-8 hover:border-red-600 transition-colors group">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Collabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-4">PAST ARCS</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">COLLABS IN THE ARCHIVE</h2>
          <p className="text-sm font-mono text-zinc-500 leading-relaxed mb-10">
            Every collaboration is archived. Every piece a collector&apos;s item. Our past drops with artists and creators live on as legends.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {['ARTIST_01', 'STUDIO_ARC', 'CREATOR_XYZ'].map((name) => (
              <div key={name} className="border border-zinc-800 py-10 px-4 text-center">
                <div className="w-12 h-12 bg-zinc-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <p className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">{name}</p>
                <p className="text-[8px] font-mono text-zinc-700 mt-1">SOLD OUT</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3 text-center">GET IN TOUCH</p>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-8 text-center">PITCH YOUR ARC</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Name</label>
              <input
                type="text"
                id="collab-name"
                placeholder="YOUR NAME"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Email</label>
              <input
                type="email"
                id="collab-email"
                placeholder="YOUR EMAIL"
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Type</label>
            <select
              id="collab-type"
              className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-red-600 transition-colors"
            >
              <option value="">SELECT TYPE</option>
              <option value="artist">Artist</option>
              <option value="creator">Content Creator</option>
              <option value="brand">Brand</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Your Pitch</label>
            <textarea
              id="collab-pitch"
              rows={5}
              placeholder="TELL US YOUR ARC..."
              className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            id="collab-submit"
            className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            SUBMIT YOUR ARC →
          </button>
        </form>
      </section>
    </main>
  );
}

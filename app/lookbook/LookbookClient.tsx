'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LookbookShot {
  src: string;
  title: string;
  subtitle: string;
  slug: string;
  col: string;
}

const LOOKBOOK_SHOTS: LookbookShot[] = [
  { src: '/image/image.jpg',     title: 'BLUE FLAME TEE',       subtitle: 'Cyber Blue / Oversized',   slug: 'blue-flame-tee',       col: 'col-span-1 row-span-2' },
  { src: '/image/image (1).jpg', title: 'BUSHIDO TEE',           subtitle: 'Sand Beige / Garment Washed', slug: 'bushido-tee',         col: 'col-span-1 row-span-1' },
  { src: '/image/image (2).jpg', title: 'DEMON BLOOD TEE',       subtitle: 'Crimson Pink / Oversized', slug: 'demon-blood-tee',       col: 'col-span-1 row-span-1' },
  { src: '/image/image (3).jpg', title: 'DOMAIN EXPANSION TEE',  subtitle: 'Royal Purple / Oversized', slug: 'domain-expansion-tee',  col: 'col-span-1 row-span-1' },
  { src: '/image/image (4).jpg', title: 'FREE SOUL TEE',         subtitle: 'Oatmeal White / Clean',    slug: 'free-soul-tee',         col: 'col-span-1 row-span-1' },
  { src: '/image/image (5).jpg', title: 'SOUL REAPER TEE',       subtitle: 'Phantom Black / Luxury',   slug: 'soul-reaper-tee',       col: 'col-span-1 row-span-2' },
  { src: '/image/image (6).jpg', title: 'CURSED MARK TEE',       subtitle: 'Blood Red / Acid Wash',    slug: 'cursed-mark-tee',       col: 'col-span-1 row-span-1' },
];

export default function LookbookClient() {
  return (
    <>
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden">
        <div
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span className="text-[clamp(4rem,18vw,14rem)] font-black tracking-widest text-white/[0.03] leading-none">
            LOOKBOOK
          </span>
        </div>

        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">
          THE_ORIGIN_DROP // SS26
        </p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">
          LOOKBOOK
        </h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-500 tracking-widest">
          Wear the arc. Anime-inspired. Street-born.
        </p>
      </div>

      {/* Bento Grid Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-2">
          {LOOKBOOK_SHOTS.map((shot, idx) => (
            <div
              key={shot.slug}
              className={`relative overflow-hidden group ${shot.col}`}
            >
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay — pure CSS via group */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] font-mono tracking-[0.3em] text-red-400 uppercase mb-1">
                  THE_ORIGIN_DROP
                </p>
                <h3 className="text-lg font-black uppercase tracking-tight text-white leading-tight mb-1">
                  {shot.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-4">{shot.subtitle}</p>
                <Link
                  href={`/drop/${shot.slug}`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/50 px-4 py-2 hover:bg-white hover:text-black transition-colors w-fit"
                >
                  SHOP THIS LOOK →
                </Link>
              </div>

              {/* Index badge */}
              <div className="absolute top-3 right-3 text-[9px] font-mono text-white/40 tracking-widest">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-zinc-900 bg-black py-16 text-center px-4">
        <p className="text-[9px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-4">
          Ready to cop?
        </p>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-6">
          SHOP THE FULL COLLECTION
        </h2>
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 px-10 py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
        >
          VIEW ALL DROPS →
        </Link>
      </div>
    </>
  );
}

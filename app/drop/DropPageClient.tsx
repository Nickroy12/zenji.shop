'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductItem } from '@/components/ui/ProductCard';
import ProductCard from '@/components/ui/ProductCard';

interface DropPageClientProps {
  previewProducts: ProductItem[];
}

// ── Countdown target: 01 Oct 2026 00:00:00 UTC+6 ──
const DROP_TARGET = new Date('2026-10-01T00:00:00+06:00').getTime();

function useCountdown(target: number) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

// ── Marquee ticker items ──
const TICKER_ITEMS = [
  'EXPLORE AUSTRALIA WIDE ON ORDERS OVER A$100',
  'NEW DROP: ARC 7 — THE NEW WAITLIST IS LIVE',
  'LIMITED STOCK — THE ORIGIN DROP COLLECTION LIVE',
  'FREE SHIPPING AUSTRALIA WIDE ON NO MIN',
];

export default function DropPageClient({ previewProducts }: DropPageClientProps) {
  const { days, hours, minutes, seconds } = useCountdown(DROP_TARGET);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const waitlistRef = useRef<HTMLElement>(null);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
      setEmail('');
    }
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      {/* ══════════════════════════════════════════════
          1. MARQUEE TICKER
      ══════════════════════════════════════════════ */}
      <div className="w-full bg-red-600 overflow-hidden py-2 relative z-40">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-white text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-white/60 inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. HERO — dark image background
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/drop_back.jpg"
          alt="Drop Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
            AWAKENING // IS LIVE
          </p>

          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-2xl">
            AWAKENING
          </h1>
          <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.9] tracking-tight text-red-600 drop-shadow-2xl italic">
            IS LIVE.
          </h2>

          <p className="mt-8 text-sm font-mono text-zinc-300 tracking-widest">
            The next chapter begins. Are you ready?
          </p>
          <p className="mt-2 text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
            DROP DATE: 01 OCT 2026
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. COUNTDOWN — white section with lined bg
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 relative overflow-hidden">
        {/* Subtle horizontal lines pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, #e4e4e7 28px, #e4e4e7 29px)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-[0.3em] text-red-500 uppercase mb-8">
            AWAKENING // IS LIVE
          </p>

          {/* Countdown boxes */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
            {[
              { value: days, label: 'DAYS' },
              { value: hours, label: 'HOURS' },
              { value: minutes, label: 'MINUTES' },
              { value: seconds, label: 'SECONDS' },
            ].map((unit, idx) => (
              <React.Fragment key={unit.label}>
                <div className="flex flex-col items-center">
                  <div className="w-[60px] sm:w-[80px] h-[70px] sm:h-[90px] border-2 border-black/20 bg-white shadow-sm flex items-center justify-center">
                    <span className="text-3xl sm:text-5xl font-black tabular-nums text-black leading-none">
                      {unit.label === 'DAYS' ? days : pad(unit.value)}
                    </span>
                  </div>
                  <span className="mt-2 text-[8px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                    {unit.label}
                  </span>
                </div>
                {idx < 3 && (
                  <span className="text-3xl sm:text-5xl font-black text-black/30 mb-6">:</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-black mb-1">
            THE DROP IS COMING
          </h3>
          <p className="text-[11px] font-mono text-zinc-500 tracking-widest mb-8">
            01 OCTOBER 2026 — ZENJI.SHOP
          </p>

          <button
            onClick={() => waitlistRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200"
          >
            THE WAIT IS OVER — ENTER THE ARCHIVE
            <span>→</span>
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. WAITLIST
      ══════════════════════════════════════════════ */}
      <section
        ref={waitlistRef}
        className="bg-white border-t border-zinc-100 py-20 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-4">
            GET EARLY ACCESS
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-4">
            JOIN THE WAITLIST.
          </h2>
          <p className="text-sm text-zinc-500 font-mono leading-relaxed mb-10 max-w-md mx-auto">
            Be first to drop everything. Waitlist wins access. Cop the discount the waitlist only knows.
          </p>

          {joined ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <span className="text-4xl">⚡</span>
              <p className="text-lg font-black uppercase tracking-widest text-black">You&apos;re on the list.</p>
              <p className="text-xs font-mono text-zinc-500">Watch your inbox. The arc is coming.</p>
            </div>
          ) : (
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-0 border border-black/20 overflow-hidden max-w-lg mx-auto">
              <input
                type="email"
                id="waitlist-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="YOUR EMAIL"
                className="flex-1 px-5 py-4 text-xs font-mono text-black placeholder-zinc-400 bg-white outline-none tracking-widest"
              />
              <button
                type="submit"
                id="waitlist-submit"
                className="px-6 py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap flex items-center gap-2"
              >
                JOIN THE WAITLIST →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. WHILE YOU WAIT — product preview
      ══════════════════════════════════════════════ */}
      <section className="bg-white border-t border-zinc-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-1">
              THE_ORIGIN_DROP // IN STOCK WAITLIST
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              WHILE YOU WAIT.
            </h2>
            <p className="mt-1 text-sm text-zinc-500 font-mono">
              Shop the origin drop, our current collection.
            </p>
          </div>

          {/* Product grid — 4 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {previewProducts.map((p, idx) => (
              <ProductCard key={p.id ?? idx} item={p} />
            ))}
          </div>

          {/* CTA link */}
          <div className="mt-8">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors duration-200 border-b border-black hover:border-red-600 pb-0.5"
            >
              VIEW FULL COLLECTION →
            </Link>
          </div>
        </div>
      </section>

      {/* .animate-marquee keyframe is defined in globals.css */}
    </>
  );
}

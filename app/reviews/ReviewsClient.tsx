'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

const REVIEWS = [
  {
    id: 1,
    name: 'Kai M.',
    location: 'Sydney, AU',
    rating: 5,
    product: 'Blue Flame Tee',
    date: 'Aug 2026',
    review: 'This tee is absolutely fire. The weight of the fabric is premium — thick, not flimsy. The garment wash gives it such a lived-in feel. I wore it to a con and got stopped like 20 times.',
    verified: true,
    image: '/image/image.jpg',
  },
  {
    id: 2,
    name: 'Yuki T.',
    location: 'Melbourne, AU',
    rating: 5,
    product: 'Soul Reaper Tee',
    date: 'Jul 2026',
    review: 'ZENJI doesn\'t miss. The oversized fit is perfect, not too baggy, not too tight. The phantom black colorway is exactly what I wanted. Arrived super fast too.',
    verified: true,
    image: '/image/image (5).jpg',
  },
  {
    id: 3,
    name: 'Aryan K.',
    location: 'Brisbane, AU',
    rating: 5,
    product: 'Domain Expansion Tee',
    date: 'Jul 2026',
    review: 'If you know, you know. This tee goes hard. The purple is vibrant without being loud. Quality is insane for the price. Already ordered another.',
    verified: true,
    image: '/image/image (3).jpg',
  },
  {
    id: 4,
    name: 'Priya S.',
    location: 'Perth, AU',
    rating: 4,
    product: 'Free Soul Tee',
    date: 'Jun 2026',
    review: 'Love the minimal vibe of this one. Fits perfectly oversized. Went a size up like recommended and it\'s the perfect look. Clean and versatile.',
    verified: true,
    image: '/image/image (4).jpg',
  },
  {
    id: 5,
    name: 'Lucas W.',
    location: 'Adelaide, AU',
    rating: 5,
    product: 'Demon Blood Tee',
    date: 'Jun 2026',
    review: 'The crimson pink is such a unique colorway. Not something you see anywhere else. The graphic is detailed and the print hasn\'t cracked after multiple washes.',
    verified: true,
    image: '/image/image (2).jpg',
  },
  {
    id: 6,
    name: 'Mia J.',
    location: 'Auckland, NZ',
    rating: 5,
    product: 'Cursed Mark Tee',
    date: 'May 2026',
    review: 'The acid wash finish on the blood red is unreal. No two are the same which makes it feel limited. This is a collector piece. ZENJI is next level.',
    verified: true,
    image: '/image/image (6).jpg',
  },
];

const STARS = (count: number) => Array.from({ length: 5 }, (_, i) => (
  <span key={i} className={i < count ? 'text-red-500' : 'text-zinc-700'}>★</span>
));

const AVG_RATING = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);

export default function ReviewsClient() {
  const [form, setForm] = useState({ name: '', product: '', rating: 5, review: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.review) setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden border-b border-zinc-900">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(3rem,14vw,12rem)] font-black tracking-widest text-white/[0.03] leading-none">REVIEWS</span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">THE COMMUNITY SPEAKS</p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">REVIEWS</h1>

        {/* Rating Summary */}
        <div className="relative z-10 mt-8 inline-flex flex-col items-center gap-1">
          <div className="text-5xl font-black text-white">{AVG_RATING}</div>
          <div className="flex gap-0.5 text-2xl">{STARS(5)}</div>
          <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">{REVIEWS.length} verified reviews</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <div key={r.id} className="border border-zinc-800 p-6 hover:border-red-600/50 transition-colors">
              {/* Product image thumbnail */}
              <div className="relative aspect-square w-full overflow-hidden mb-4 bg-zinc-900">
                <Image src={r.image} alt={r.product} fill className="object-cover opacity-70" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-2 text-sm">{STARS(r.rating)}</div>

              {/* Product */}
              <p className="text-[9px] font-mono tracking-[0.2em] text-red-500 uppercase mb-2">{r.product}</p>

              {/* Review */}
              <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-4">&ldquo;{r.review}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white">{r.name}</p>
                  <p className="text-[9px] font-mono text-zinc-600">{r.location}</p>
                </div>
                <div className="text-right">
                  {r.verified && (
                    <p className="text-[8px] font-mono text-emerald-600 uppercase tracking-widest">✓ Verified</p>
                  )}
                  <p className="text-[9px] font-mono text-zinc-700">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a Review */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3 text-center">SHARE YOUR ARC</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-8 text-center">WRITE A REVIEW</h2>

          {submitted ? (
            <div className="text-center py-12">
              <span className="text-4xl block mb-4">⚡</span>
              <p className="text-lg font-black uppercase tracking-widest text-white">Thanks for the review!</p>
              <p className="text-xs font-mono text-zinc-500 mt-2">Your arc has been noted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Name</label>
                  <input
                    type="text"
                    id="review-name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="YOUR NAME"
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Product</label>
                  <select
                    id="review-product"
                    value={form.product}
                    onChange={e => setForm({ ...form, product: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="">SELECT PRODUCT</option>
                    {['Blue Flame Tee','Bushido Tee','Demon Blood Tee','Domain Expansion Tee','Free Soul Tee','Soul Reaper Tee','Cursed Mark Tee'].map(p => (
                      <option key={p} value={p}>{p.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => (
                    <button
                      key={s}
                      type="button"
                      id={`review-star-${s}`}
                      onClick={() => setForm({ ...form, rating: s })}
                      className={`text-2xl transition-colors ${s <= form.rating ? 'text-red-500' : 'text-zinc-700 hover:text-zinc-500'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Review</label>
                <textarea
                  id="review-text"
                  rows={4}
                  value={form.review}
                  onChange={e => setForm({ ...form, review: e.target.value })}
                  placeholder="TELL YOUR ARC..."
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                id="review-submit"
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                SUBMIT REVIEW →
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

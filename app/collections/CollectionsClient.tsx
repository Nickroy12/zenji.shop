'use client';

import { useState, useMemo } from 'react';
import type { ProductItem } from '@/components/ui/ProductCard';
import ProductCard from '@/components/ui/ProductCard';

interface CollectionsClientProps {
  products: ProductItem[];
}

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name A–Z', value: 'name-asc' },
];

export default function CollectionsClient({ products }: CollectionsClientProps) {
  const [sortBy, setSortBy] = useState('featured');
  const [filterSale, setFilterSale] = useState(false);
  const [filterSize, setFilterSize] = useState<string | null>(null);

  const allSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(p => p.product.sizes.forEach(s => sizes.add(s)));
    return Array.from(sizes);
  }, [products]);

  const sorted = useMemo(() => {
    let list = [...products];
    if (filterSale) list = list.filter(p => p.product.pricing.discount_percent > 0);
    if (filterSize) list = list.filter(p => p.product.sizes.includes(filterSize));
    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.product.pricing.sale_price - b.product.pricing.sale_price); break;
      case 'price-desc': list.sort((a, b) => b.product.pricing.sale_price - a.product.pricing.sale_price); break;
      case 'name-asc': list.sort((a, b) => a.product.name.localeCompare(b.product.name)); break;
    }
    return list;
  }, [products, sortBy, filterSale, filterSize]);

  return (
    <>
      {/* Header Banner */}
      <div className="bg-black text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(4rem,18vw,14rem)] font-black tracking-widest text-white/[0.04] leading-none">
            COLLECTIONS
          </span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">
          THE_ORIGIN_DROP // ALL STYLES
        </p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">
          COLLECTIONS
        </h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-400 tracking-widest">
          {products.length} styles — Limited stock. No restocks.
        </p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-zinc-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3 justify-between">
          {/* Left filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setFilterSale(!filterSale)}
              className={`text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 border transition-colors ${
                filterSale ? 'bg-red-600 text-white border-red-600' : 'bg-white text-black border-black hover:bg-black hover:text-white'
              }`}
            >
              On Sale
            </button>
            {allSizes.map(size => (
              <button
                key={size}
                onClick={() => setFilterSize(filterSize === size ? null : size)}
                className={`text-[11px] font-bold uppercase tracking-widest w-8 h-8 border transition-colors ${
                  filterSize === size ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-300 hover:border-black'
                }`}
              >
                {size}
              </button>
            ))}
            {(filterSale || filterSize) && (
              <button
                onClick={() => { setFilterSale(false); setFilterSize(null); }}
                className="text-[11px] text-red-600 font-bold uppercase tracking-widest underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono hidden sm:block">Sort</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-[11px] font-bold uppercase tracking-wider border border-zinc-300 px-3 py-1.5 bg-white text-black focus:outline-none focus:border-black"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {sorted.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-3xl font-black uppercase tracking-widest text-zinc-200 mb-4">No styles found.</p>
            <button
              onClick={() => { setFilterSale(false); setFilterSize(null); }}
              className="text-sm font-bold uppercase tracking-widest text-red-600 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest mb-6">
              {sorted.length} result{sorted.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {sorted.map((p, idx) => (
                <ProductCard key={p.id ?? idx} item={p} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

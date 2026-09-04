'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductItem {
  id?: number;
  brand: string;
  product: {
    name: string;
    slug: string;
    url: string;
    category: string;
    collection: string;
    colorway: string;
    sku: string;
    availability: string;
    sizes: string[];
    pricing: {
      currency: string;
      original_price: number;
      sale_price: number;
      discount_percent: number;
    };
    details: {
      material: string;
      fit: string;
      finish: string;
      graphic: string;
    };
    description: string;
  };
  shipping: {
    free_shipping_australia_wide_over: number;
    currency: string;
  };
  images: {
    count: number;
    alt_text: string;
    list: string[];
  };
}

interface ProductCardProps {
  item?: ProductItem;
  data?: ProductItem | ProductItem[];
  className?: string;
}

export default function ProductCard({ item, data, className = '' }: ProductCardProps) {
  // If data array is provided with multiple items, render the grid of product cards
  if (data && Array.isArray(data)) {
    return (
      <div className={`w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-300 ${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:min-w-[650px] sm:min-w-0">
          {data.map((p, idx) => (
            <ProductCard key={p.id || idx} item={p} />
          ))}
        </div>
      </div>
    );
  }

  const activeItem = item || (data && !Array.isArray(data) ? data : null);
  if (!activeItem) return null;

  const { product, images } = activeItem;
  const isSale = product.pricing.discount_percent > 0 || product.pricing.sale_price < product.pricing.original_price;
  const mainImage = images?.list?.[0] || '/image/image.jpg';
  const detailUrl = `/drop/${product.slug}`;

  return (
    <Link
      href={detailUrl}
      className={`group relative bg-white border border-black overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-lg ${className}`}
    >
      {/* Top Image Box */}
      <div className="relative aspect-square w-full bg-zinc-100 overflow-hidden border-b border-black">
        {/* Diagonal Ribbon Sale Badge */}
        {isSale && (
          <div className="absolute top-3 -left-8 z-10 bg-red-600 text-white font-extrabold text-[10px] tracking-wider py-1 px-8 -rotate-45 shadow-sm uppercase select-none">
            SALE {product.pricing.discount_percent}% OFF
          </div>
        )}

        <Image
          src={mainImage}
          alt={images.alt_text || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Full-width Bottom SEE MORE Hover Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white text-center py-2.5 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-20 flex items-center justify-center gap-1.5 shadow-md">
          <span>SEE MORE</span>
          <span className="text-sm leading-none">&rarr;</span>
        </div>
      </div>

      {/* Bottom Content Box */}
      <div className="p-4 bg-white flex flex-col justify-between flex-grow">
        {/* Product Title */}
        <h3 className="font-extrabold text-sm sm:text-base md:text-lg text-black uppercase tracking-tight leading-tight line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex flex-col items-start mt-1">
          {isSale ? (
            <>
              <span className="text-xs text-zinc-400 line-through font-medium leading-none">
                A${product.pricing.original_price.toFixed(2)}
              </span>
              <span className="text-red-600 font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mt-0.5">
                A${product.pricing.sale_price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-black font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight mt-3">
              A${product.pricing.sale_price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

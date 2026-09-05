'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductItem } from '@/components/ui/ProductCard';

interface ProductDetailViewProps {
  item: ProductItem;
}

export default function ProductDetailView({ item }: ProductDetailViewProps) {
  const { product, shipping, images } = item;
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const isSale = product.pricing.discount_percent > 0 || product.pricing.sale_price < product.pricing.original_price;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="w-full bg-transparent text-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Product Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full bg-zinc-900/60 border border-white/10 overflow-hidden">
            {isSale && (
              <div className="absolute top-4 -left-10 z-10 bg-red-600 text-white font-extrabold text-[10px] tracking-wider py-1 px-10 -rotate-45 shadow-sm uppercase">
                SALE {product.pricing.discount_percent}% OFF
              </div>
            )}

            <Image
              src={images.list[selectedImage] || images.list[0]}
              alt={`${images.alt_text} view ${selectedImage + 1}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Thumbnails */}
          {images.list.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
              {images.list.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-16 border transition-all flex-shrink-0 ${
                    selectedImage === idx ? 'border-white ring-1 ring-white' : 'border-zinc-600 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={imgUrl} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Minimalist Product Info */}
        <div className="flex flex-col justify-start">
          {/* Breadcrumb */}
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">DROP</Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>

          {/* Product Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-2">
            {product.name}
          </h1>

          {/* Colorway */}
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            COLORWAY: {product.colorway}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-3">
            {isSale && (
              <span className="text-xl text-zinc-500 line-through font-mono">
                A${product.pricing.original_price.toFixed(2)}
              </span>
            )}
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A${product.pricing.sale_price.toFixed(2)}
            </span>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>{product.availability}</span>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
              SELECT SIZE
            </label>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center text-xs font-mono uppercase border transition-all ${
                    selectedSize === size
                      ? 'border-2 border-white font-bold text-white bg-white/10'
                      : 'border-zinc-600 text-zinc-400 hover:border-white hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
              QUANTITY
            </label>
            <div className="flex items-center w-36 border border-white/40">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 py-2.5 text-white hover:bg-white/10 font-bold text-sm"
              >
                -
              </button>
              <span className="flex-1 text-center font-mono font-bold text-sm text-white">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 py-2.5 text-white hover:bg-white/10 font-bold text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`py-4 px-4 border font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                isWishlisted ? 'bg-white/10 text-white border-white' : 'bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10'
              }`}
            >
              <span>{isWishlisted ? '♥' : '♡'}</span>
              <span>WISHLIST</span>
            </button>

            <button
              onClick={handleAddToCart}
              className={`py-4 px-4 border font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                addedToCart ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-red-700 text-white border-red-700 hover:bg-red-600'
              }`}
            >
              <span>{addedToCart ? 'ADDED TO BAG' : 'ADD TO CART'}</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Product Details Specs Section */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              PRODUCT DETAILS
            </h3>
            <div className="text-xs font-mono text-zinc-400 space-y-2 leading-relaxed">
              <p>&quot;{product.description}&quot;</p>
              <p>&bull; Material: {product.details.material}</p>
              <p>&bull; Fit: {product.details.fit}</p>
              <p>&bull; Finish: {product.details.finish}</p>
              <p>&bull; Graphic: {product.details.graphic}</p>
              <p className="pt-2 text-zinc-500">&bull; Free shipping Australia wide on orders over ${shipping.free_shipping_australia_wide_over} {shipping.currency}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

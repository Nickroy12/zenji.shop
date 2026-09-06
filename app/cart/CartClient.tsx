'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  colorway: string;
  size: string;
  price: number;
  qty: number;
  image: string;
  slug: string;
}

const INITIAL_CART: CartItem[] = [
  { id: 1, name: 'BLUE FLAME TEE', colorway: 'CYBER BLUE', size: 'M', price: 33.99, qty: 1, image: '/image/image.jpg', slug: 'blue-flame-tee' },
  { id: 6, name: 'SOUL REAPER TEE', colorway: 'PHANTOM BLACK', size: 'L', price: 37.99, qty: 1, image: '/image/image (5).jpg', slug: 'soul-reaper-tee' },
];

export default function CartClient() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ).filter(item => item.qty > 0));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 100 ? 0 : 7.99;
  const total = subtotal - discount + shipping;

  const handlePromo = () => {
    if (promo.toUpperCase() === 'ZENJI10') setPromoApplied(true);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black py-14 px-4 text-center border-b border-zinc-900">
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-3">YOUR BAG</p>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          CART ({cartItems.length})
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-32 px-4">
          <p className="text-6xl mb-6">🛍️</p>
          <h2 className="text-2xl font-black uppercase tracking-widest text-black mb-3">Your bag is empty.</h2>
          <p className="text-sm font-mono text-zinc-500 mb-8">The arc awaits. Go cop something fire.</p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            SHOP THE DROP →
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
            {/* Cart Items */}
            <div>
              <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 text-[9px] font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-3 mb-4">
                <span className="w-20">Item</span>
                <span>Product</span>
                <span className="text-right">Size</span>
                <span className="text-right">Qty</span>
                <span className="text-right">Total</span>
              </div>

              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="grid grid-cols-[80px_1fr] sm:grid-cols-[80px_1fr_auto_auto_auto] gap-4 items-center border border-zinc-200 p-3">
                    {/* Image */}
                    <Link href={`/drop/${item.slug}`} className="relative w-20 h-20 block flex-shrink-0 bg-zinc-100 overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </Link>

                    {/* Info */}
                    <div>
                      <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mb-0.5">{item.colorway}</p>
                      <Link href={`/drop/${item.slug}`}>
                        <h3 className="text-sm font-black uppercase tracking-tight text-black hover:text-red-600 transition-colors leading-tight">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-[10px] font-mono text-zinc-500 mt-1">A${item.price.toFixed(2)} each</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        id={`cart-remove-${item.id}`}
                        className="text-[9px] font-mono text-red-500 uppercase tracking-widest hover:underline mt-1"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Size */}
                    <div className="text-xs font-bold uppercase text-black text-right hidden sm:block">
                      {item.size}
                    </div>

                    {/* Qty */}
                    <div className="flex items-center border border-zinc-300 hidden sm:flex">
                      <button onClick={() => updateQty(item.id, -1)} id={`cart-dec-${item.id}`} className="w-8 py-2 text-center text-sm font-bold hover:bg-zinc-100 transition-colors">−</button>
                      <span className="w-8 text-center text-xs font-mono font-bold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} id={`cart-inc-${item.id}`} className="w-8 py-2 text-center text-sm font-bold hover:bg-zinc-100 transition-colors">+</button>
                    </div>

                    {/* Total */}
                    <div className="text-sm font-black text-right hidden sm:block">
                      A${(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/collections" className="inline-flex items-center gap-2 mt-6 text-[10px] font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors border-b border-black hover:border-red-600 pb-0.5">
                ← CONTINUE SHOPPING
              </Link>
            </div>

            {/* Order Summary */}
            <div className="bg-black text-white p-6 h-fit">
              <h2 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-zinc-800 pb-4">ORDER SUMMARY</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Promo Code</p>
                <div className="flex border border-zinc-700">
                  <input
                    id="cart-promo-input"
                    type="text"
                    value={promo}
                    onChange={e => setPromo(e.target.value)}
                    placeholder="ZENJI10"
                    className="flex-1 bg-transparent px-3 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none"
                  />
                  <button
                    id="cart-promo-apply"
                    onClick={handlePromo}
                    className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                  >
                    {promoApplied ? 'APPLIED ✓' : 'APPLY'}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-[9px] font-mono text-emerald-500 mt-1">10% discount applied!</p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-zinc-800 pt-5 mb-6">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>Subtotal</span>
                  <span>A${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-xs font-mono text-emerald-500">
                    <span>Discount (10%)</span>
                    <span>−A${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `A$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[9px] font-mono text-zinc-600">
                    Add A${(100 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="flex justify-between text-sm font-black text-white pt-3 border-t border-zinc-800">
                  <span>TOTAL</span>
                  <span>A${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                id="cart-checkout"
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                PROCEED TO CHECKOUT →
              </button>

              <p className="text-[9px] font-mono text-zinc-600 text-center mt-4">
                Secure checkout. All major cards accepted.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

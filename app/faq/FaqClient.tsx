'use client';

import { useState } from 'react';

const FAQ_CATEGORIES = [
  {
    category: 'ORDERS & PAYMENTS',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Browse the collection, select your size and quantity, and hit ADD TO CART. Head to checkout, fill in your details, and confirm payment. You\'ll receive a confirmation email immediately after.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and Afterpay for eligible orders.',
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Orders can only be modified or cancelled within 1 hour of placement. Contact us immediately at support@zenji.shop. Once fulfilment begins, we cannot make changes.',
      },
    ],
  },
  {
    category: 'SHIPPING & DELIVERY',
    items: [
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! Free standard shipping on all Australian orders over A$100. All other orders have a flat A$7.99 shipping fee. International shipping is calculated at checkout.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard shipping: 3–7 business days within Australia. Express: 1–3 business days. International: 7–21 business days depending on location.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide. International duties and taxes may apply depending on your country and are the responsibility of the buyer.',
      },
      {
        q: 'How do I track my order?',
        a: 'You\'ll receive a tracking number via email once your order is dispatched. Use it on our carrier\'s website to follow your drop.',
      },
    ],
  },
  {
    category: 'SIZING & FIT',
    items: [
      {
        q: 'What fit do ZENJI tees have?',
        a: 'All ZENJI tees are oversized fit. We recommend sizing down one size if you prefer a more regular fit. Check our size guide for exact measurements.',
      },
      {
        q: 'How do I choose my size?',
        a: 'We offer XS–XXL. Chest measurements: XS (96cm), S (100cm), M (106cm), L (112cm), XL (118cm), XXL (124cm). All garments are true to our oversized template.',
      },
      {
        q: 'Will the print fade or crack after washing?',
        a: 'Our screen prints are heat-cured and designed to last. Wash inside-out in cold water, avoid tumble drying. Proper care ensures your piece stays fresh.',
      },
    ],
  },
  {
    category: 'RETURNS & EXCHANGES',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 14 days of delivery for unworn, unwashed items in original condition with tags attached. Sale items and limited drops are final sale.',
      },
      {
        q: 'How do I exchange for a different size?',
        a: 'Contact us at support@zenji.shop within 7 days of delivery. Subject to stock availability. You cover return shipping costs; we cover the re-send.',
      },
      {
        q: 'My item arrived damaged, what do I do?',
        a: 'We\'re so sorry. Email us at support@zenji.shop with your order number and photos of the damage within 48 hours of delivery. We\'ll make it right immediately.',
      },
    ],
  },
  {
    category: 'DROPS & RESTOCKS',
    items: [
      {
        q: 'Do you restock sold-out items?',
        a: 'Never. Every ZENJI drop is limited and final. Once a style sells out, it goes into the archive forever. That\'s what makes each piece rare.',
      },
      {
        q: 'How do I know when the next drop is?',
        a: 'Join the waitlist on our Drop page and follow us on TikTok and Instagram. Waitlist members get early access and exclusive discounts before public release.',
      },
    ],
  },
];

export default function FaqClient() {
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIdx(openIdx === key ? null : key);

  return (
    <>
      {/* Header */}
      <div className="py-20 px-4 text-center relative overflow-hidden border-b border-zinc-900">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="text-[clamp(4rem,16vw,13rem)] font-black tracking-widest text-white/[0.03] leading-none">FAQ</span>
        </div>
        <p className="relative z-10 text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">NEED ANSWERS?</p>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-black uppercase tracking-tight text-white">FAQ</h1>
        <p className="relative z-10 mt-4 text-sm font-mono text-zinc-400 tracking-widest">
          Everything you need to know before you cop.
        </p>
      </div>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        {FAQ_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <p className="text-[10px] font-mono tracking-[0.3em] text-red-500 uppercase mb-5">{cat.category}</p>
            <div className="space-y-px">
              {cat.items.map((item, idx) => {
                const key = `${cat.category}-${idx}`;
                const isOpen = openIdx === key;
                return (
                  <div key={key} className="border border-zinc-800 overflow-hidden">
                    <button
                      id={`faq-${key.replace(/\s/g, '-').toLowerCase()}`}
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left group"
                    >
                      <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isOpen ? 'text-red-400' : 'text-white group-hover:text-red-400'}`}>
                        {item.q}
                      </span>
                      <span className={`text-lg text-zinc-500 transition-transform duration-200 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45 text-red-500' : ''}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-xs font-mono text-zinc-400 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Still need help */}
      <div className="py-14 text-center px-4 border-t border-zinc-900 bg-zinc-950">
        <p className="text-[9px] font-mono tracking-[0.35em] text-zinc-500 uppercase mb-3">Still lost?</p>
        <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">CONTACT THE SQUAD</h2>
        <a
          href="mailto:support@zenji.shop"
          id="faq-contact-email"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          EMAIL SUPPORT →
        </a>
      </div>
    </>
  );
}

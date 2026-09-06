import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — ZENJI',
  description: 'ZENJI Terms of Service. Rules and conditions for using zenji.shop.',
};

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using zenji.shop, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you may not use our website.`,
    },
    {
      title: '2. Products & Availability',
      content: `All ZENJI products are limited edition. We reserve the right to limit quantities per customer. Product descriptions, images, and prices are subject to change without notice. We do not guarantee that items in your cart will remain available until checkout is complete.`,
    },
    {
      title: '3. Pricing & Payment',
      content: `All prices are listed in Australian Dollars (AUD) and are inclusive of GST where applicable. We accept major credit cards, PayPal, Apple Pay, Google Pay, and Afterpay. Payment must be received before orders are processed.`,
    },
    {
      title: '4. Order Processing',
      content: `Order confirmation does not guarantee fulfilment. We reserve the right to cancel orders for any reason, including suspected fraud, pricing errors, or stock discrepancies. In such cases, a full refund will be issued.`,
    },
    {
      title: '5. Shipping',
      content: `We aim to dispatch orders within 1–3 business days. Shipping times are estimates only. ZENJI is not responsible for delays caused by shipping carriers, customs, or unforeseen events. Risk of loss passes to you upon dispatch.`,
    },
    {
      title: '6. Returns & Exchanges',
      content: `Returns are accepted within 14 days of delivery for unworn, unwashed items in original condition. Limited drops and sale items are final sale. Please refer to our Return Policy page for full details.`,
    },
    {
      title: '7. Intellectual Property',
      content: `All content on zenji.shop, including logos, graphics, text, and designs, is the property of ZENJI and protected by copyright law. You may not reproduce, distribute, or use any content without our express written permission.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `To the maximum extent permitted by law, ZENJI shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the value of your order.`,
    },
    {
      title: '9. Governing Law',
      content: `These terms are governed by the laws of New South Wales, Australia. Any disputes shall be resolved in the courts of New South Wales.`,
    },
    {
      title: '10. Changes to Terms',
      content: `We reserve the right to update these Terms of Service at any time. Continued use of our website after changes constitutes acceptance of the new terms.`,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">LEGAL</p>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">TERMS OF SERVICE</h1>
        <p className="text-xs font-mono text-zinc-500 mb-12">Last updated: September 2026</p>

        <p className="text-sm font-mono text-zinc-300 leading-relaxed mb-10">
          These Terms of Service govern your use of zenji.shop and the purchase of products from ZENJI. Please read them carefully before placing an order.
        </p>

        <div className="space-y-10">
          {sections.map(sec => (
            <div key={sec.title} className="border-l-2 border-red-600 pl-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-white mb-3">{sec.title}</h2>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-900 pt-8">
          <p className="text-xs font-mono text-zinc-500">
            Questions? Contact us at{' '}
            <a href="mailto:support@zenji.shop" className="text-red-400 hover:text-red-300 transition-colors">
              support@zenji.shop
            </a>
          </p>
          <div className="flex gap-6 mt-4">
            <Link href="/privacy-policy" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="/return-policy" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

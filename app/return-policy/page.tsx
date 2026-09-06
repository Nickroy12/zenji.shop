import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Return Policy — ZENJI',
  description: 'ZENJI Return and Exchange Policy. Know your rights before you cop.',
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">LEGAL</p>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">RETURN POLICY</h1>
        <p className="text-xs font-mono text-zinc-500 mb-12">Last updated: September 2026</p>

        {/* Important notice */}
        <div className="border border-red-600/50 bg-red-600/10 px-6 py-5 mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-2">⚠ IMPORTANT NOTE</p>
          <p className="text-xs font-mono text-zinc-300 leading-relaxed">
            ZENJI drops are limited edition. <strong>Limited drops and sale items are final sale</strong> and cannot be returned or exchanged. All other items are eligible per the policy below.
          </p>
        </div>

        <div className="space-y-10">
          {[
            {
              title: 'ELIGIBILITY FOR RETURNS',
              content: [
                'Items must be returned within 14 days of the delivery date.',
                'Items must be unworn, unwashed, and in original condition with all tags attached.',
                'Items must be in their original packaging.',
                'Proof of purchase (order confirmation email) is required.',
                'Limited drops, sale items, and gift cards are final sale — no returns or exchanges.',
              ],
            },
            {
              title: 'HOW TO INITIATE A RETURN',
              steps: [
                { n: '01', text: 'Email support@zenji.shop with subject line: "RETURN — [Your Order Number]"' },
                { n: '02', text: 'Include your order number, item(s) being returned, and reason for return.' },
                { n: '03', text: 'We\'ll respond within 48 hours with return instructions and address.' },
                { n: '04', text: 'Ship the item back using a trackable shipping service. You cover return shipping costs.' },
                { n: '05', text: 'Once received and inspected, we\'ll process your refund within 3–5 business days.' },
              ],
            },
            {
              title: 'REFUNDS',
              content: [
                'Approved refunds are processed to your original payment method.',
                'Processing time: 3–5 business days after we receive the return.',
                'Your bank may take an additional 2–5 business days to reflect the credit.',
                'Original shipping fees are non-refundable unless the return is due to our error.',
              ],
            },
            {
              title: 'EXCHANGES',
              content: [
                'Size exchanges are available subject to stock.',
                'Contact us within 7 days of delivery to request an exchange.',
                'Return shipping is at your cost. We cover the re-send within Australia.',
                'International exchanges: you cover both shipping costs.',
              ],
            },
            {
              title: 'DAMAGED OR WRONG ITEMS',
              content: [
                'If you receive a damaged or incorrect item, contact us within 48 hours of delivery.',
                'Email support@zenji.shop with your order number and photos of the item.',
                'We will arrange a replacement or full refund at no cost to you.',
                'Do not return damaged items without contacting us first.',
              ],
            },
          ].map(sec => (
            <div key={sec.title} className="border-l-2 border-red-600 pl-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-white mb-4">{sec.title}</h2>
              {'steps' in sec ? (
                <div className="space-y-3">
                  {sec.steps!.map(step => (
                    <div key={step.n} className="flex gap-4 items-start">
                      <span className="text-[10px] font-mono text-red-500 flex-shrink-0 mt-0.5">{step.n}</span>
                      <p className="text-xs font-mono text-zinc-400 leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {sec.content!.map((item, i) => (
                    <li key={i} className="text-xs font-mono text-zinc-400 leading-relaxed flex gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-900 pt-8">
          <p className="text-xs font-mono text-zinc-500 mb-4">
            Questions? Email{' '}
            <a href="mailto:support@zenji.shop" className="text-red-400 hover:text-red-300 transition-colors">
              support@zenji.shop
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

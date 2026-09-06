import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ZENJI',
  description: 'ZENJI Privacy Policy. How we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, including: name, email address, shipping address, payment details (processed securely via our payment provider), and any communications you send us. We also collect usage data such as IP address, browser type, and pages visited.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to process your orders, send order confirmations and updates, provide customer support, send marketing communications (with your consent), improve our website and services, and comply with legal obligations.`,
    },
    {
      title: '3. Sharing Your Information',
      content: `We do not sell your personal information. We may share your data with trusted third-party service providers (shipping carriers, payment processors, email service providers) who assist us in operating our business, subject to confidentiality obligations.`,
    },
    {
      title: '4. Cookies',
      content: `We use cookies to enhance your browsing experience, remember your preferences, and analyse site traffic. You can disable cookies in your browser settings, though some features may not function properly. We also use analytics tools like Google Analytics.`,
    },
    {
      title: '5. Data Security',
      content: `We implement industry-standard security measures to protect your personal information. All payment data is encrypted using SSL technology. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
    },
    {
      title: '6. Your Rights',
      content: `You have the right to access, correct, or delete your personal data. You may also opt out of marketing emails at any time using the unsubscribe link in any email we send. To exercise these rights, contact us at support@zenji.shop.`,
    },
    {
      title: '7. Retention',
      content: `We retain your personal information for as long as necessary to fulfil the purposes described in this policy, including for legal, accounting, or reporting requirements. Order data is typically retained for 7 years.`,
    },
    {
      title: '8. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated effective date.`,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">LEGAL</p>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">PRIVACY POLICY</h1>
        <p className="text-xs font-mono text-zinc-500 mb-12">Last updated: September 2026</p>

        <p className="text-sm font-mono text-zinc-300 leading-relaxed mb-10">
          ZENJI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit zenji.shop or make a purchase.
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
            <Link href="/terms" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link href="/return-policy" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

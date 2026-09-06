import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ — ZENJI',
  description: 'Frequently asked questions about ZENJI orders, shipping, sizing, and more.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <FaqClient />
    </main>
  );
}

import type { Metadata } from 'next';
import LookbookClient from './LookbookClient';

export const metadata: Metadata = {
  title: 'Lookbook — ZENJI',
  description: 'The ZENJI Lookbook. Anime streetwear shot in the wild.',
};

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <LookbookClient />
    </main>
  );
}

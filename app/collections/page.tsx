import type { Metadata } from 'next';
import CollectionsClient from './CollectionsClient';
import productsData from '@/data.json';

export const metadata: Metadata = {
  title: 'Collections — ZENJI',
  description: 'Shop the full ZENJI collection. Anime-inspired streetwear, limited drops, no restocks.',
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-16">
      <CollectionsClient products={productsData} />
    </main>
  );
}

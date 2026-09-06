import type { Metadata } from 'next';
import productsData from '@/data.json';
import type { ProductItem } from '@/components/ui/ProductCard';
import DropPageClient from './DropPageClient';

export const metadata: Metadata = {
  title: 'Drop — ZENJI',
  description: 'The next chapter begins. Explore the latest ZENJI drop.',
};

export default function DropPage() {
  const previewProducts = productsData.slice(0, 4) as ProductItem[];

  return (
    <main className="min-h-screen bg-white text-black">
      <DropPageClient previewProducts={previewProducts} />
    </main>
  );
}

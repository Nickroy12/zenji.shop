import React from 'react';
import Image from 'next/image';
import productsData from '@/data.json';
import ProductCard from '@/components/ui/ProductCard';
import DropPageClient from './DropPageClient';

export const metadata = {
  title: 'Drop — ZENJI',
  description: 'The next chapter begins. Explore the latest ZENJI drop.',
};

export default function DropPage() {
  // Show first 4 products in the "While You Wait" preview
  const previewProducts = productsData.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-black">
      <DropPageClient previewProducts={previewProducts} />
    </main>
  );
}

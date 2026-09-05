import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import productsData from '@/data.json';
import ProductDetailView from './ProductDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DropDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const productItem = productsData.find(
    (item) => item.product.slug === slug
  ) || productsData[0];

  if (!productItem) {
    notFound();
  }

  return (
    <main className="relative min-h-screen text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/drop_back.jpg"
        alt="Drop Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Dark Overlay — matches the cinematic dark style */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <ProductDetailView item={productItem} />
      </div>
    </main>
  );
}

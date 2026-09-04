import React from 'react';
import { notFound } from 'next/navigation';
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
    <main className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProductDetailView item={productItem} />
      </div>
    </main>
  );
}

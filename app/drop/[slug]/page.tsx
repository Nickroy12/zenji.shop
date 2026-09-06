import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import productsData from '@/data.json';
import ProductDetailView from './ProductDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = productsData.find(p => p.product.slug === slug);
  return {
    title: item ? `${item.product.name} — ZENJI` : 'Product — ZENJI',
    description: item?.product.description ?? 'Shop ZENJI anime streetwear.',
  };
}

export default async function DropDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const productItem = productsData.find(p => p.product.slug === slug);

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <ProductDetailView item={productItem} />
      </div>
    </main>
  );
}

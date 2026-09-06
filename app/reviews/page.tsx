import type { Metadata } from 'next';
import ReviewsClient from './ReviewsClient';

export const metadata: Metadata = {
  title: 'Reviews — ZENJI',
  description: 'What the community says about ZENJI. Real reviews, real people, real arc.',
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <ReviewsClient />
    </main>
  );
}

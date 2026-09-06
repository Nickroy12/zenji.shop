import type { Metadata } from 'next';
import CartClient from './CartClient';

export const metadata: Metadata = {
  title: 'Cart — ZENJI',
  description: 'Your ZENJI cart. Review your drops before checkout.',
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-16">
      <CartClient />
    </main>
  );
}

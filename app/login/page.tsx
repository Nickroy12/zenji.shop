import type { Metadata } from 'next';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Login — ZENJI',
  description: 'Sign in to your ZENJI account. Track orders, manage wishlist, and get early drop access.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 flex items-center justify-center px-4">
      <LoginClient />
    </main>
  );
}

'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Mode = 'login' | 'signup' | 'forgot';

export default function LoginClient() {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="w-full max-w-md py-16">
      {/* Logo */}
      <div className="text-center mb-10">
        <Link href="/">
          <Image src="/Outlook-Zenji.png" alt="ZENJI" width={120} height={40} className="h-9 w-auto brightness-0 invert mx-auto mb-6" />
        </Link>
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase">
          {mode === 'login' ? 'WELCOME BACK' : mode === 'signup' ? 'JOIN THE ARC' : 'RESET YOUR ACCESS'}
        </p>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white mt-2">
          {mode === 'login' ? 'SIGN IN' : mode === 'signup' ? 'CREATE ACCOUNT' : 'FORGOT PASSWORD'}
        </h1>
      </div>

      {done ? (
        <div className="text-center py-10 border border-zinc-800 px-8">
          <span className="text-4xl block mb-4">⚡</span>
          <p className="text-lg font-black uppercase tracking-widest text-white">
            {mode === 'forgot' ? 'Check your email.' : mode === 'signup' ? 'You\'re in the arc.' : 'Welcome back.'}
          </p>
          <p className="text-xs font-mono text-zinc-500 mt-2">
            {mode === 'forgot'
              ? 'We sent a reset link to your email.'
              : mode === 'signup'
              ? 'Your account has been created. Explore the drops.'
              : 'You\'ve been signed in successfully.'}
          </p>
          <Link href="/" className="mt-6 inline-block text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors">
            GO HOME →
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border border-zinc-800 p-8 space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Full Name</label>
              <input
                id="login-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="YOUR NAME"
                required
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="YOUR EMAIL"
              required
              className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Password</label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="YOUR PASSWORD"
                required
                className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          )}

          {mode === 'login' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setMode('forgot')}
                className="text-[10px] font-mono text-zinc-500 hover:text-red-400 uppercase tracking-widest transition-colors"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            id="login-submit"
            className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest transition-colors mt-2"
          >
            {mode === 'login' ? 'SIGN IN →' : mode === 'signup' ? 'CREATE ACCOUNT →' : 'SEND RESET LINK →'}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-[10px] font-mono text-zinc-600">OR</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Google sign in */}
          <button
            type="button"
            id="login-google"
            className="w-full py-3 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </form>
      )}

      {/* Toggle mode */}
      {!done && (
        <div className="text-center mt-6">
          {mode === 'login' ? (
            <p className="text-xs font-mono text-zinc-500">
              No account?{' '}
              <button onClick={() => setMode('signup')} id="login-switch-signup" className="text-red-400 hover:text-red-300 font-bold uppercase tracking-widest transition-colors">
                Create one
              </button>
            </p>
          ) : (
            <p className="text-xs font-mono text-zinc-500">
              Already have an account?{' '}
              <button onClick={() => setMode('login')} id="login-switch-login" className="text-red-400 hover:text-red-300 font-bold uppercase tracking-widest transition-colors">
                Sign in
              </button>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

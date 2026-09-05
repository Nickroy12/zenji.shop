"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const [cookieAccepted, setCookieAccepted] = useState<boolean | null>(null)

  const drops = [
    { name: 'Home', href: '/' },
    { name: 'Drop', href: '/drop' },
    { name: 'Collection', href: '/collections' },
  ]

  const explore = [
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Our Story', href: '/OurStory' },
    { name: 'Collection', href: '/collections' },
  ]

  const community = [
    { name: 'TikTok', href: 'https://tiktok.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
  ]

  const contact = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Review', href: '/reviews' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Help', href: '/help' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
        {/* Big ZENJI watermark */}
        <div
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-[clamp(6rem,22vw,18rem)] font-black tracking-widest text-white/[0.04] leading-none">
            ZENJI
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 lg:gap-20">

            {/* Brand column */}
            <div className="flex flex-col gap-6 max-w-[220px]">
              <Link href="/">
                <Image
                  src="/Outlook-Zenji.png"
                  alt="Zenji Logo"
                  width={110}
                  height={36}
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>

              <p className="text-xs text-red-400 leading-relaxed font-light tracking-wide">
                Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-semibold mb-1">
                  Follow the Lore
                </p>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-tiktok-link"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/90 text-black text-xs font-semibold w-fit hover:bg-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                  </svg>
                  TikTok
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram-link"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-white text-xs font-semibold w-fit hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-facebook-link"
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#1877F2] text-white text-xs font-semibold w-fit hover:bg-[#166fe5] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Drops */}
              <div>
                <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-semibold mb-4">Drops</h3>
                <ul className="space-y-2.5">
                  {drops.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-zinc-400 hover:text-red-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div>
                <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-semibold mb-4">Explore</h3>
                <ul className="space-y-2.5">
                  {explore.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-zinc-400 hover:text-red-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-semibold mb-4">Community</h3>
                <ul className="space-y-2.5">
                  {community.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-400 hover:text-red-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-semibold mb-4">Contact</h3>
                <ul className="space-y-2.5">
                  {contact.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-zinc-400 hover:text-red-400 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-zinc-800/60" />

          {/* Bottom bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-zinc-600">
              © {new Date().getFullYear()} ZENJI. All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-700 tracking-widest uppercase">
              Every drop is final. No restocks. No regrets.
            </p>
          </div>
        </div>

        {/* Cookie Banner */}
        {cookieAccepted === null && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0e0e0e] border-t border-zinc-800 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-yellow-400 font-medium">
              We use cookies to improve your experience and track analytics.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                id="footer-cookie-accept"
                onClick={() => setCookieAccepted(true)}
                className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm"
              >
                Accept
              </button>
              <button
                id="footer-cookie-decline"
                onClick={() => setCookieAccepted(false)}
                className="px-5 py-2 border border-zinc-600 hover:border-zinc-400 text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm"
              >
                Decline
              </button>
            </div>
          </div>
        )}
      </footer>
    </>
  )
}

export default Footer

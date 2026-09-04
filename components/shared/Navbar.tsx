"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface SubNavLink {
    name: string;
    href: string;
}

interface NavLink {
    name: string;
    href?: string;
    dropdown?: SubNavLink[];
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMoreMobileOpen, setIsMoreMobileOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';
    // Transparent navbar only on home page when not scrolled
    const isTransparent = isHomePage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: NavLink[] = [
        { name: 'Drop', href: '/drop' },
        { name: 'Collections', href: '/collections' },
        { name: 'Lookbook', href: '/lookbook' },
        { name: 'Our Story', href: '/OurStory' },
        {
            name: 'More',
            dropdown: [
                { name: 'Collaboration', href: '/collaboration' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'FAQ', href: '/faq' },
            ]
        },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-2' : 'bg-white shadow-md py-0 border-b border-zinc-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo/Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className={`font-bold text-2xl tracking-wider ${isTransparent ? 'text-white' : 'text-black'}`}>
                            <Image src="/Outlook-Zenji.png" alt="Zenji Logo" width={120} height={40} className={`w-auto h-8 ${isTransparent ? 'brightness-0 invert' : 'brightness-0'}`} />
                        </Link>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center items-center">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const hasDropdown = link.dropdown && link.dropdown.length > 0;
                                const isSubActive = hasDropdown && link.dropdown?.some(sub => pathname === sub.href);
                                const isActive = link.href ? pathname === link.href : isSubActive;

                                if (hasDropdown) {
                                    return (
                                        <div key={link.name} className="relative group py-4">
                                            <button
                                                type="button"
                                                className={`flex items-center gap-1 py-1 text-sm font-medium transition-colors focus:outline-none relative after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 ${isActive
                                                    ? 'text-red-500 after:w-full'
                                                    : `${!isTransparent ? 'text-black' : 'text-white'} hover:text-red-500 after:w-0 hover:after:w-full`
                                                    }`}
                                            >
                                                <span>{link.name}</span>
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${isActive ? 'text-red-500' : (!isTransparent ? 'text-black' : 'text-white')}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Dropdown Menu Card */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2 pointer-events-none group-hover:pointer-events-auto z-50 min-w-[210px]">
                                                <div className={`p-1.5 rounded-xl border backdrop-blur-md shadow-xl ${!isTransparent
                                                    ? 'bg-white/95 text-zinc-900 border-zinc-200/80 shadow-black/10'
                                                    : 'bg-zinc-950/90 text-white border-zinc-800/80 shadow-black/40'
                                                    }`}>
                                                    {link.dropdown?.map((subItem) => {
                                                        const isSubItemActive = pathname === subItem.href;
                                                        return (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isSubItemActive
                                                                    ? 'bg-red-500/10 text-red-500 font-semibold'
                                                                    : (!isTransparent
                                                                        ? 'hover:bg-zinc-100 text-zinc-700 hover:text-red-600'
                                                                        : 'hover:bg-zinc-800/60 text-zinc-300 hover:text-red-400')
                                                                    }`}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href || '#'}
                                        className={`relative py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 ${isActive
                                            ? 'text-red-500 after:w-full'
                                            : `${!isTransparent ? 'text-black' : 'text-white'} hover:text-red-500 after:w-0 hover:after:w-full`
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Soft Login & Shopping Cart Icons */}
                    <div className="flex items-center space-x-3">
                        {/* Shopping Cart Icon */}
                        <Link
                            href="/cart"
                            className={`relative p-2 transition-colors focus:outline-none ${pathname === '/cart' ? 'text-red-500' : `${!isTransparent ? 'text-black' : 'text-white'} hover:text-red-500`
                                }`}
                            aria-label="Shopping Cart"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {/* Cart Item Badge */}
                            <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        {/* Login / User Icon */}
                        <Link
                            href="/login"
                            className={`flex items-center gap-1.5 p-2 transition-colors focus:outline-none ${pathname === '/login' ? 'text-red-500' : `${!isTransparent ? 'text-black' : 'text-white'} hover:text-red-500`
                                }`}
                            aria-label="Login"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden ml-1">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className={`inline-flex items-center justify-center p-2 rounded-md ${!isTransparent ? 'text-black' : 'text-white'} hover:text-red-500 focus:outline-none transition-colors`}
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-zinc-200 absolute w-full left-0 shadow-lg" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const hasDropdown = link.dropdown && link.dropdown.length > 0;
                            const isSubActive = hasDropdown && link.dropdown?.some(sub => pathname === sub.href);
                            const isActive = link.href ? pathname === link.href : isSubActive;

                            if (hasDropdown) {
                                return (
                                    <div key={link.name} className="space-y-1">
                                        <button
                                            type="button"
                                            onClick={() => setIsMoreMobileOpen(!isMoreMobileOpen)}
                                            className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors ${isActive ? 'text-red-500 font-semibold' : 'text-black hover:text-red-500'}`}
                                        >
                                            <span>{link.name}</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${isMoreMobileOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isMoreMobileOpen && (
                                            <div className="pl-6 space-y-1 border-l-2 border-zinc-100 ml-3">
                                                {link.dropdown?.map((subItem) => {
                                                    const isSubItemActive = pathname === subItem.href;
                                                    return (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={`block px-3 py-1.5 text-sm font-medium transition-colors ${isSubItemActive ? 'text-red-500 font-semibold' : 'text-zinc-600 hover:text-red-500'}`}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href || '#'}
                                    className={`block px-3 py-2 text-base font-medium transition-colors ${isActive ? 'text-red-500 font-semibold' : 'text-black hover:text-red-500'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
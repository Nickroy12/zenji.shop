"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

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

    const navLinks = [
        { name: 'Drop', href: '/drop' },
        { name: 'Collections', href: '/collections' },
        { name: 'Lookbook', href: '/lookbook' },
        { name: 'Our Story', href: '/OurStory' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0' : 'bg-transparent py-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo/Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className={`font-bold text-2xl tracking-wider ${isScrolled ? 'text-black' : 'text-white'}`}>
                            {/* If you have a white version of the logo, you can swap it here based on isScrolled */}
                            <Image src="/Outlook-Zenji.png" alt="Zenji Logo" width={120} height={40} className={`w-auto h-8 ${!isScrolled && 'brightness-0 invert'}`} />
                        </Link>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center items-center">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 ${isActive
                                            ? 'text-red-500 after:w-full'
                                            : `${isScrolled ? 'text-black' : 'text-white'} hover:text-red-500 after:w-0 hover:after:w-full`
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
                            className={`relative p-2 transition-colors focus:outline-none ${pathname === '/cart' ? 'text-red-500' : `${isScrolled ? 'text-black' : 'text-white'} hover:text-red-500`
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
                            className={`flex items-center gap-1.5 p-2 transition-colors focus:outline-none ${pathname === '/login' ? 'text-red-500' : `${isScrolled ? 'text-black' : 'text-white'} hover:text-red-500`
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
                                className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-black' : 'text-white'} hover:text-red-500 focus:outline-none transition-colors`}
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
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
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
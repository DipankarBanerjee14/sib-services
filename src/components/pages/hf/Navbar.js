'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPhone,
    FaAngleDown,
    FaBars,
    FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Careers', href: '/careers' },
        {
            name: 'About Us',
            href: '/about',
            dropdown: [
                
                { name: 'Training & Development', href: '/about/training' },
                { name: 'Corporate Social Responsibility', href: '/about/csr' },
                { name: 'Our People', href: '/about/ourpeople' },
            ],
        },
        
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            {/* Top Bar */}
            {!isScrolled && (
                <div className="bg-[#002060] text-white py-2 text-xs sm:text-sm">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="flex items-center gap-1">
                                <FaPhoneAlt className="text-xs sm:text-sm" />
                                <span>+918069200100</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaEnvelope className="text-xs sm:text-sm" />
                                <span>hrp@hrpmanagement.in</span>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-4">
                            <FaFacebookF className="hover:text-yellow-400 cursor-pointer text-xs sm:text-sm" />
                            <FaTwitter className="hover:text-yellow-400 cursor-pointer text-xs sm:text-sm" />
                            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer text-xs sm:text-sm" />
                        </div>
                    </div>
                </div>
            )}


            {/* Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-90'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/sib-logo.webp"
                                alt="SIB Logo"
                                width={120}
                                height={120}
                                className="w-[70px] h-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-8 text-[#002060] font-semibold relative">
                            {menuItems.map((item) =>
                                item.dropdown ? (
                                    <li key={item.name} className="relative group">
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-1 relative group-hover:text-yellow-500 transition"
                                        >
                                            {item.name}
                                            <FaAngleDown size={12} />
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${pathname === item.href
                                                        ? 'w-full bg-yellow-400'
                                                        : 'w-0 group-hover:w-full bg-[#002060]'
                                                    }`}
                                            ></span>
                                        </Link>
                                        <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded z-10 w-64 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300">
                                            {item.dropdown.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link
                                                        href={sub.href}
                                                        className={`block px-4 py-2 text-[#002060] hover:bg-yellow-100 ${pathname === sub.href
                                                                ? 'underline underline-offset-4 decoration-yellow-400'
                                                                : ''
                                                            }`}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="relative group transition text-[#002060]"
                                        >
                                            {item.name}
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${pathname === item.href
                                                        ? 'w-full bg-yellow-400'
                                                        : 'w-0 group-hover:w-full bg-[#002060]'
                                                    }`}
                                            ></span>
                                        </Link>
                                    </li>
                                )
                            )}
                            <li>
                                <a
                                    href="tel:08069200100"
                                    className="flex items-center gap-2 bg-yellow-400 text-[#002060] px-4 py-2 rounded hover:bg-yellow-300 transition font-semibold"
                                >
                                    <FaPhone className="text-sm" /> Call Us
                                </a>
                            </li>
                        </ul>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-6 pb-4">
                        <ul className="flex flex-col gap-4 text-[#002060] font-semibold">
                            {menuItems.map((item) =>
                                item.dropdown ? (
                                    <li key={item.name}>
                                        <details>
                                            <summary className="cursor-pointer flex items-center gap-1">
                                                {item.name} <FaAngleDown size={12} />
                                            </summary>
                                            <ul className="ml-4 mt-2 space-y-2">
                                                <li>
                                                    <Link href={item.href}>{item.name}</Link>
                                                </li>
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link href={sub.href}>{sub.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </li>
                                ) : (
                                    <li key={item.name}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                )
                            )}
                            <li>
                                <a
                                    href="tel:08069200100"
                                    className="inline-block mt-2 bg-yellow-400 text-[#002060] px-4 py-2 rounded hover:bg-yellow-300 transition font-semibold"
                                >
                                    <FaPhone className="inline mr-2" /> Call Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

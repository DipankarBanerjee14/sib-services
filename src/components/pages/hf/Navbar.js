'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FaPhone,
    FaAngleDown,
    FaBars,
    FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [animateClose, setAnimateClose] = useState(false);

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
                { name: 'Mission & Vision', href: '/about/missionvision' },
                { name: 'Group of Companies', href: '/about/companies' },
                { name: 'Locations', href: '/about/location' },
                { name: 'Statutory Compliance', href: '/about/statutory' },
            ],
        },
        { name: 'Contact Us', href: '/contact' },
    ];

    const handleMobileLinkClick = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setMobileMenuOpen(false);
            setAnimateClose(false);
        }, 300); // match transition duration
    };

    return (
        <nav className="sticky top-0 z-50 bg-transparent">
            <div className="w-full md:max-w-[78rem] mx-auto mt-4 px-4 sm:px-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <Link href="/" className="flex items-center h-full">
                        <Image
                            src="/images/logo.png"
                            alt="HRP Logo"
                            width={120}
                            height={120}
                            className="w-[120px] h-auto object-contain"
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
                                        className="flex items-center gap-1 relative group-hover:text-blue-700 transition"
                                    >
                                        {item.name}
                                        <FaAngleDown size={12} />
                                        <span
                                            className={`absolute left-0 bottom-[-2px] h-0.5 transition-all duration-300 ${pathname === item.href
                                                ? 'w-full bg-yellow-400'
                                                : 'w-0 group-hover:w-full bg-blue-600'
                                                }`}
                                        />
                                    </Link>
                                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded z-10 w-64 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300">
                                        {item.dropdown.map((sub) => (
                                            <li key={sub.name}>
                                                <Link
                                                    href={sub.href}
                                                    className={`block px-4 py-2 text-[#002060] hover:bg-yellow-100 ${pathname === sub.href ? 'underline underline-offset-4 decoration-yellow-400' : ''
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
                                        className="relative group transition"
                                    >
                                        {item.name}
                                        <span
                                            className={`absolute left-0 bottom-[-2px] h-0.5 transition-all duration-300 ${pathname === item.href
                                                ? 'w-full bg-yellow-400'
                                                : 'w-0 group-hover:w-full bg-blue-600'
                                                }`}
                                        />
                                    </Link>
                                </li>
                            )
                        )}
                        <li>
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-yellow-400 text-[#002060] px-4 py-2 rounded hover:bg-yellow-300 transition font-semibold"
                            >
                                <FaPhone className="text-sm" /> Call Us
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen && !animateClose
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-white px-4 py-4 rounded-b-xl shadow">
                        <ul className="flex flex-col gap-4 text-[#002060] font-semibold">
                            {menuItems.map((item) =>
                                item.dropdown ? (
                                    <li key={item.name}>
                                        <details className="group">
                                            <summary className="flex items-center gap-1 cursor-pointer">
                                                {item.name} <FaAngleDown size={12} />
                                            </summary>
                                            <ul className="ml-4 mt-2 space-y-2">
                                                {/* About main link inside dropdown */}
                                                {item.name === 'About Us' && (
                                                    <li>
                                                        <Link href={item.href} onClick={handleMobileLinkClick}>
                                                            About
                                                        </Link>
                                                    </li>
                                                )}
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link href={sub.href} onClick={handleMobileLinkClick}>
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </li>
                                ) : (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={handleMobileLinkClick}
                                            className={`block ${pathname === item.href ? 'text-yellow-500 underline' : ''
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            )}
                            <li>
                                <a
                                    href="#"
                                    onClick={handleMobileLinkClick}
                                    className="inline-block mt-2 bg-yellow-400 text-[#002060] px-4 py-2 rounded hover:bg-yellow-300 transition font-semibold"
                                >
                                    <FaPhone className="inline mr-2" /> Call Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

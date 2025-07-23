import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';



export default function Footer() {
    return (
        <footer className="bg-[#002060] text-white px-6 py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-y-12 gap-x-16 text-center md:text-left">

                {/* Logo + Description */}
                <div className="flex flex-col items-center md:items-start max-w-sm">
                    <div className="bg-white rounded-xl p-3 mb-4">
                        <Image
                            src="/images/logo.png"
                            alt="SIB Logo"
                            width={100}
                            height={100}
                            className="h-12 w-auto"
                        />
                    </div>
                    <p className="text-sm leading-relaxed">
                        Trusted provider of facility, and manpower solutions across India since 2013.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/" className="hover:text-orange-300">Home</Link></li>
                        <li><Link href="/services" className="hover:text-orange-300">Services</Link></li>
                        <li><Link href="/careers" className="hover:text-orange-300">Careers</Link></li>
                        <li><Link href="/about" className="hover:text-orange-300">About Us</Link></li>                        
                        <li><Link href="/contact" className="hover:text-orange-300">Contact Us</Link></li>
                    </ul>
                </div>

                {/* About Section */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">About</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/about/missionvision" className="hover:text-orange-300">Mission & Vision</Link></li>
                        {/* <li><Link href="/about/companies" className="hover:text-yellow-300">Group of Companies</Link></li> */}
                        <li><Link href="/about/training" className="hover:text-orange-300">Training & Development</Link></li>
                        <li><Link href="/about/csr" className="hover:text-orange-300">Corporate Social Responsibility</Link></li>
                        <li><Link href="/about/ourpeople" className="hover:text-orange-300">Our People</Link></li>
                        <li><Link href="/about/location" className="hover:text-orange-300">Locations</Link></li>
                        <li><Link href="/about/statutory" className="hover:text-orange-300">Statutory Compliance</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">Contact</h3>
                    <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 2/5 Sarat Bose Road, SUKHSAGAR, <br /> KOLKATA, West Bengal, India-700020</p>
                    {/* <p className="flex items-center"><FaPhoneAlt className="mr-2" /> +91-8069200100</p> */}
                    <p className="flex items-center"><FaEnvelope className="mr-2" /> <a href="mailto:hrp@hrpmanagement.in" className="hover:underline">
                        hrp@hrpmanagement.in
                    </a></p>
                </div>

                {/* Social Media */}
                {/* <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-yellow-400 text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-5 text-xl mt-2">
                        <a href="#"><FaFacebook className="hover:text-yellow-400" /></a>
                        <a href="#"><FaLinkedin className="hover:text-yellow-400" /></a>
                        <a href="#"><FaTwitter className="hover:text-yellow-400" /></a>
                    </div>
                </div> */}
            </div>            
            <div className="border-t border-white/20 mt-12 pt-6 text-sm text-center">
                © {new Date().getFullYear()} HRP Management. All rights reserved. Powered by Pro-Riterz.
            </div>
        </footer>
    );
}
  
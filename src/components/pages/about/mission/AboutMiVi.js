// src/app/about/mission-vision/page.js (renamed as AboutMiVi)

import { FaBullseye, FaBinoculars } from 'react-icons/fa';

export default function AboutMiVi() {
    return (
        <section className="py-16 bg-[#dedede]">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-blue-900 shadow-md p-8 rounded-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FaBullseye size={28} className="text-yellow-400" />
                            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        </div>
                        <ul className="text-gray-300 list-disc list-inside space-y-2">
                            <li>S & IB promises to increase its staff-strength to 50,000 by 2025.</li>
                            <li>We aim to provide employment to underprivileged youth of India.</li>
                            <li>“Any Service? Call S & IB” is our motto, backed by performance and adaptability.</li>
                        </ul>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-blue-900 shadow-md p-8 rounded-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FaBinoculars size={28} className="text-yellow-400" />
                            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        </div>
                        <ul className="text-gray-300 list-disc list-inside space-y-2">
                            <li>To be the most ethical and humane service-company in India.</li>
                            <li>We value transparency, statutory & CSR compliance, and eco-friendliness.</li>
                            <li>Our employees are our brand ambassadors and main growth drivers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

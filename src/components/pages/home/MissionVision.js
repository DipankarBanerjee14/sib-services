// src/components/MissionVision.js
import { FaBullseye, FaBinoculars } from 'react-icons/fa';

export default function MissionVision() {
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
                        <ul className="text-gray-200 list-disc pl-6 space-y-2 mb-4">
                            <li>HRP promises to increase its staff-strength to 50,000 by 2025 providing employment to underprivileged youth of India.</li>
                            <li>HRP has a strong Brand Value and Goodwill and is a Trusted Name in the service industry. Its motto, “Any Service? Call HRP”, is backed by solid performance and readiness to expand its area of services to meet ever-changing customer needs.</li>
                        </ul>

                    </div>
                    <div className="mt-6">
                        <a href="/about" className="bg-yellow-400 text-blue-950 px-6 py-2 rounded hover:bg-white text-sm font-medium inline-block">
                            Read More
                        </a>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-blue-900 shadow-md p-8 rounded-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FaBinoculars size={28} className="text-yellow-400" />
                            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        </div>
                        <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
                            <li>HRP is the most ethical, transparent, statutory compliant, CSR compliant, eco-friendly and humane service-company in India.</li>
                            <li>HRP’s employees are the true face and Brand Ambassadors of the Company. We invest significantly in Human Capital and recognize our employees as the main drivers of our business growth.</li>
                        </ul>

                    </div>
                    <div className="mt-6">
                        <a href="/about" className="bg-yellow-400 text-blue-950 px-6 py-2 rounded hover:bg-white text-sm font-medium inline-block">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

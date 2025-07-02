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
                        <p className="text-yellow-400">Our mission at HRP Management does not just revolve around delivering quality facility services, we also want to make a lasting impact on our customers that is backed by our commitment to excellence, inclusion, and innovation. We want to offer scalable solutions so that every organization in India can reach out to us in any situation. Our mission includes:</p>

                        <ul className="text-gray-200 list-disc pl-6 space-y-2 mb-4">
                            <li>We want to make every possible effort to grow our team as much as possible by 2025 and provide employment opportunities to underprivileged youth, helping them build a brighter and more promising future.</li>
                            <li>At HRP Management, our goal is to grow the business to ₹1,000 Crore in revenue by 2025 by consistently delivering valuable services to clients across India.</li>
                            <li>We continuously enhance our solutions and service quality to ensure our professionals and practices evolve with changing standards and remain effective over time.</li>
                            <li>Our employees are regularly trained to stay updated with evolving technology and meet your expectations.</li>
                            <li>Over the years, we have earned our clients&#39; trust with optimal work. Therefore, we are ready to expand our services to meet your ever-changing demands since we are driven by a strong commitment to support your firm.</li>

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
                        <p className="text-yellow-400">At HRP Management, we understand that our clients value transparency, empathy, and operational excellence above everything else. That is why these qualities are the core of every solution we offer. Our vision includes:</p>

                        <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
                            <li>HRP aims to be one of India’s most ethical, transparent, and fully compliant service companies.</li>
                            <li>We maintain strong CSR values and promote eco-friendly, socially responsible business practices.</li>
                            <li>Our employees are the true ambassadors of our brand, so we value, respect, and invest in them constantly.</li>
                            <li>We acknowledge the dedication of every team member and are committed to their well-being.</li>
                            <li>Although we tend to dream big, our goals are achievable and grounded in focusing on quality and timely service delivery.</li>
                            <li>Our trusted professionals are trained to consider every challenge as an opportunity to learn and grow, believing that nothing is impossible.</li>
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

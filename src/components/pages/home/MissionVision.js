'use client';

import { useState } from 'react';
import { FaBullseye, FaBinoculars } from 'react-icons/fa';

export default function MissionVision() {
    const [showMoreMission, setShowMoreMission] = useState(false);
    const [showMoreVision, setShowMoreVision] = useState(false);

    const missionPoints = [
        "We want to make every possible effort to grow our team as much as possible by 2025 and provide employment opportunities to underprivileged youth, helping them build a brighter and more promising future.",
        "At HRP Management, our goal is to grow the business to ₹1,000 Crore in revenue by 2025 by consistently delivering valuable services to clients across India.",
        "We continuously enhance our solutions and service quality to ensure our professionals and practices evolve with changing standards and remain effective over time.",
        "Our employees are regularly trained to stay updated with evolving technology and meet your expectations.",
        "Over the years, we have earned our clients' trust with optimal work. Therefore, we are ready to expand our services to meet your ever-changing demands since we are driven by a strong commitment to support your firm.",
    ];

    const visionPoints = [
        "HRP aims to be one of India’s most ethical, transparent, and fully compliant service companies.",
        "We maintain strong CSR values and promote eco-friendly, socially responsible business practices.",
        "Our employees are the true ambassadors of our brand, so we value, respect, and invest in them constantly.",
        "We acknowledge the dedication of every team member and are committed to their well-being.",
        "Although we tend to dream big, our goals are achievable and grounded in focusing on quality and timely service delivery.",
        "Our trusted professionals are trained to consider every challenge as an opportunity to learn and grow, believing that nothing is impossible.",
    ];

    return (
        <section className="mb-10 bg-[#dedede] ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-white shadow-md p-8 rounded-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaBullseye size={28} className="text-orange-500" />
                            <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
                        </div>
                        <div className="bg-blue-900 p-4 rounded-xl mb-4">
                            <p className="text-white mb-4">
                                Our mission at HRP Management does not just revolve around delivering quality facility services, we also want to make a lasting impact on our customers that is backed by our commitment to excellence, inclusion, and innovation. We want to offer scalable solutions so that every organization in India can reach out to us in any situation. Our mission includes:
                            </p>

                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                {(showMoreMission ? missionPoints : missionPoints.slice(0, 2)).map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowMoreMission(!showMoreMission)}
                            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-blue-900 text-sm font-medium"
                        >
                            {showMoreMission ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* Vision */}
                <div className="bg-white shadow-md p-8 rounded-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaBinoculars size={28} className="text-orange-500" />
                            <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
                        </div>
                        <div className="bg-blue-900 p-4 rounded-xl mb-4">
                            <p className="text-white mb-4">
                                At HRP Management, we understand that our clients value transparency, empathy, and operational excellence above everything else. That is why these qualities are the core of every solution we offer. Our vision includes:
                            </p>

                            <ul className="text-gray-300 list-disc pl-6 space-y-2">
                                {(showMoreVision ? visionPoints : visionPoints.slice(0, 4)).map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowMoreVision(!showMoreVision)}
                            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-blue-900 text-sm font-medium"
                        >
                            {showMoreVision ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-[78rem] h-px bg-gray-300 my-10 mx-auto"></div>
        </section>
    );
}

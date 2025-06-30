'use client';

import { FaMapMarkerAlt, FaUsers, FaSmile } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function ExperienceStats() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="bg-[#dedede] py-16" ref={ref}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-blue-900 p-8 rounded-xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                        Serving Since <span className="text-yellow-300">12+ Years</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-yellow-300 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={6500} duration={2.5} />}+
                            </h3>
                            <p className="text-lg text-yellow-400">Client Locations</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUsers className="text-yellow-300 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={42000} duration={3} />}+
                            </h3>
                            <p className="text-lg text-yellow-400">Trained Personnel</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaSmile className="text-yellow-300 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={756} duration={2} />}+
                            </h3>
                            <p className="text-lg text-yellow-400">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

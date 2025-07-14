'use client';

import { FaMapMarkerAlt, FaUsers, FaSmile } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function ExperienceStats() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="bg-[#dedede] mt-10" ref={ref}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-blue-900 p-8 rounded-xl text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                        Serving Since <span className="text-orange-500">12+ Years</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-orange-500 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={17} duration={2.5} />}+
                            </h3>
                            <p className="text-lg text-orange-400">Client Locations</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUsers className="text-orange-500 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={437} duration={3} />}+
                            </h3>
                            <p className="text-lg text-orange-400">Trained Personnel</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaSmile className="text-orange-500 text-5xl mb-4" />
                            <h3 className="text-3xl font-bold">
                                {inView && <CountUp end={10} duration={2} />}+
                            </h3>
                            <p className="text-lg text-orange-400">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[78rem] h-px bg-gray-300 my-8 mx-auto"></div>

        </section>
    );
}

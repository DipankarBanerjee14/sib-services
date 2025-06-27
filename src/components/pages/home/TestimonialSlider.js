// src/components/TestimonialSlider.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Rohit Sharma',
        role: 'General Manager, XYZ Ltd.',
        feedback:
            'S & IB’s team is highly professional and trustworthy. Their facility management has helped our business run smoothly.',
    },
    {
        name: 'Neha Verma',
        role: 'HR Head, ABC Corp',
        feedback:
            'Their security and housekeeping solutions are top-notch. We’ve seen a huge improvement in efficiency since partnering.',
    },
    {
        name: 'Anil Kapoor',
        role: 'Admin Officer, DEF Group',
        feedback:
            'Prompt service, great communication, and complete peace of mind. Highly recommended for integrated services.',
    },
];

export default function TestimonialSlider() {
    return (
        <section className="py-16 bg-[#dedede]">
            <div className="max-w-5xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
                    What Our Clients Say
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    spaceBetween={30}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-blue-900 p-8 shadow-md rounded-xl max-w-3xl mx-auto">
                                <p className="text-gray-300 text-lg italic mb-6">
                                    “{testimonial.feedback}”
                                </p>
                                <div className="text-white font-semibold text-base">
                                    {testimonial.name}
                                </div>
                                <div className="text-yellow-400 text-sm">{testimonial.role}</div>

                                {/* Quote Icon */}
                                <div className="mt-6 text-yellow-400 text-3xl">
                                    <FaQuoteLeft className="mx-auto" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

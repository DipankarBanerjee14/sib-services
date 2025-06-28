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
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-12 items-start">
                    {/* Heading aligned left */}
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-left leading-tight tracking-wide">
                            What Our Clients Say:
                        </h2>
                    </div>

                    {/* Testimonial slider aligned to middle + right column space */}
                    <div className="col-span-12 md:col-span-8">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            spaceBetween={30}
                            className="w-full"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-blue-900 p-8 shadow-md rounded-xl text-center md:ml-3">
                                        <p className="text-gray-300 text-lg italic mb-6">
                                            “{testimonial.feedback}”
                                        </p>
                                        <div className="text-white font-semibold text-base">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-yellow-400 text-sm">{testimonial.role}</div>
                                        <div className="mt-6 text-yellow-400 text-3xl">
                                            <FaQuoteLeft className="mx-auto" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

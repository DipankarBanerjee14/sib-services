'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Hironmoy Ghosh',
        feedback:
            'I was looking for reliable pest control services and then I got to know about HRP from my friend. I contacted them and they arrived promptly at my home. They sprayed chemicals and other stuff in every nook and corner of my house and now my home looks so manageable without those pests troubling me! Thank you HRP.',
    },
    {
        name: 'Rudrasis Dey',
        feedback:
            'Presently this is a largest manpower solution company in india providing various manpower services like house keeping, armed and non armed security personnel, any many more other services as when required.The company maintains a beautiful corporate office.',
    },
];

export default function TestimonialSlider() {
    return (
        <section className="mb-8 mt-8 bg-[#dedede] ">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading centered on top */}
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8">
                    What Our Clients Say:
                </h2>

                {/* Testimonials slider full width */}
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
                            <div className="bg-blue-900 p-8 shadow-md rounded-xl text-center max-w-[78rem] mx-auto">
                                <p className="text-gray-300 text-lg italic mb-6">
                                    “{testimonial.feedback}”
                                </p>
                                <div className="text-white font-semibold text-base">
                                    {testimonial.name}
                                </div>
                                <div className="text-orange-400 text-sm">{testimonial.role}</div>
                                <div className="mt-6 text-orange-400 text-3xl">
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

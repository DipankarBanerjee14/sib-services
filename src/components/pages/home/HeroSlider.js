'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
    {
        image: '/images/hero1.png',
        title: 'SIB Services',
        subtitle: 'Facility Management with Excellence',
    },
    {
        image: '/images/hero2.png',
        title: 'Secure. Manage. Support.',
        subtitle: 'Trusted by India’s top corporates',
    },
    {
        image: '/images/hero3.png',
        title: 'Smart Facility Solutions',
        subtitle: 'We bring order to complexity.',
    },
];

export default function HeroSlider() {
    return (
        <div className="relative h-[90vh]">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                loop
                pagination={{ clickable: true }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-[#001920]/60 flex items-center justify-center text-center text-white px-4">
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                                    <a
                                        href="/contact"
                                        className="bg-white text-blue-900 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-200"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

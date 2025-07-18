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
        title: 'Hero Image 1',
    },
    {
        image: '/images/hero2.png',
        title: 'Hero Image 2',
    },
    {
        image: '/images/hero3.png',
        title: 'Hero Image 3',
    },
    {
        image: '/images/hero4.png',
        title: 'Hero Image 4',
    },
    {
        image: '/images/hero5.png',
        title: 'Hero Image 5',
    },
    {
        image: '/images/hero6.png',
        title: 'Hero Image 6',
    },
    {
        image: '/images/hero7.png',
        title: 'Hero Image 7',
    },
    {
        image: '/images/hero8.png',
        title: 'Hero Image 8',
    },
    {
        image: '/images/hero9.png',
        title: 'Hero Image 9',
    },
    {
        image: '/images/hero10.png',
        title: 'Hero Image 10'
    },
];

export default function HeroSlider() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8 py-2 pb-8 bg-[#dedede]">
            <div className="hidden sm:block rounded-xl overflow-hidden shadow-lg h-[84vh] max-w-[78rem] mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                                    className="object-contain sm:object-cover"
                                    priority
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="block lg:hidden bg-gray-300 rounded-xl overflow-hidden shadow-lg h-[19vh] max-w-[78rem] mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                                    className="object-contain sm:object-cover"
                                    priority
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
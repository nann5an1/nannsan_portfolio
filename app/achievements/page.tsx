'use client';

import {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
export  function Achievements(){
    return (
        <section id="achievements" className="py-20 bg-white relative overflow-hidden flex flex-col justify-center items-center">
            <h2 className="flex justify-center item-center text-4xl md:text-6xl text-gray-900 mb-6">
                Achievements & Certifications
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto pb-16">
                Building skills through hands-on projects, teaching others, and continuous learning
            </p>
            <Swiper
                pagination={{
                    clickable:true}}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                    <SwiperSlide>
                    <img src="/apple_hackathon.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/CC.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="/comptiaA.jpg" />
                    </SwiperSlide>
            </Swiper>
            <div className='text-center px-4 py-4 w-[20rem] mx-8 text-gray-600'>
                Swipe left/ right to see more
            </div>
        </section>
    )
}
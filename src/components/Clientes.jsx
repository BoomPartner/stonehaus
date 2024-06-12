"use client";
import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
// import globalContext from '@/app/context/globalContext';
import { clientes } from './server';
import globalContext from '@/app/context/globalContext';
const Clientes = () => {
    const {windowWidth} = useContext(globalContext)
    
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                grabCursor={true}
                loop={true}
                autoplay={{ // Habilita el autoplay
                    delay: 0,
                    disableOnInteraction: false,

                }}
                freeMode={true}
                speed={10000}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Autoplay, Navigation]}
                className="swiper-inicio"
            >
                {
                    clientes?.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide shadow-xl transform duration-500 hover:scale-110">
                            <div className="relative group w-full"> {/* Asegúrate de agregar la clase 'group' aquí */}
                                <Image src={item.imagen} width={500} height={500} className="w-full" alt={item.title} />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50
                                 hover:text-[#c89919] transform duration-300 p-4 cursor-pointer">
                                    <div className={`opacity-0 h-full text-white text-center flex justify-center 
                                    items-center ${windowWidth < 990 ? "text-xl" : "text-3xl"} group-hover:opacity-80 transform duration-500`}>
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default Clientes

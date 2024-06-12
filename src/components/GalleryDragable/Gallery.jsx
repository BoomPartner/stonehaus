"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";
import { GalleryImages } from '../server';
import Image from 'next/image';
import "./style.css"
gsap.registerPlugin(Draggable);
const GalleryDraggend = () => {

    // La etiqueta que envuelva eeste compoennete debe tener un h-[100vh] para evitar espacios entre divs 

    const galleryRef = useRef(null);
    const boundsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            // document.body.classList.add('loaded');

            if (window.matchMedia('(min-width: 392px)').matches) {
                Draggable.create(galleryRef.current, {
                    bounds: boundsRef.current,
                    inertia: true
                });
            }
        }, 200);

        // Limpieza del timer en el desmontaje del componente
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='w-full h-[100vh]' ref={boundsRef}>
            <div className=" w-full h-full flex items-center justify-center z-50">
                {/* <div className="w-full title-proyectos"><h1>Proyectos</h1></div> */}
            </div>


            <div className='gallery' ref={galleryRef}>
                {
                    GalleryImages.map((item, index) => (
                        <div key={index} className="gallery__item">
                            <div key={index} className="w-full shadow-xl transform duration-500 hover:scale-105">
                                <div className="relative group"> 
                                    <Image src={item.imagen} width={500} height={500} className="w-full" alt={item.title} />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 transform duration-300 p-1 cursor-pointer">
                                        <div className="opacity-0 uppercase
                                        w-full h-full text-white 
                                        text-[3px] flex flex-col items-center 
                                        justify-center group-hover:opacity-80 transform duration-500">
                                            {item.title}
                                            <h5 className='text-[2px]'>{item.description}</h5>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default GalleryDraggend

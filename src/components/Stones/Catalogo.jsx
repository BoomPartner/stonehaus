"use client";
import React, { useContext, useEffect, useState } from 'react'
import { catalogo, categorias } from '../server';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import globalContext from '@/app/context/globalContext';
const Catalogo = () => {

    const [stones, setStones] = useState(catalogo)
    const [selected, setSelected] = useState(null)
    const { windowWidth, language } = useContext(globalContext)

    const handleFilterStones = (e) => {
        if (e == "todas") {
            setStones(catalogo)
            setSelected("todas")
        } else {
            const filter = catalogo.filter((item) => item.categoria === e)
            setStones(filter)
            setSelected(e)
        }
    }

    const handleScrollTo = () => {
        gsap.to(window, { duration: 1.5, scrollTo: { y: "#stones", autoKill: false } })
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        gsap.fromTo(".title-1",
            { y: '80px', opacity: 0 },
            {
                duration: 1,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',


            }
        );

        gsap.fromTo(".txt-1",
            {
                y: "80px",
                opacity: 0
            },
            {
                duration: 1,
                delay: .3,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
            })
    }, [])

    return (
        <>
            <div className="banner-catalogo overflow-hidden">
                {
                    windowWidth < 730 ? null : <div className={`w-full flex justify-center absolute ${windowWidth < 730 ? "top-[30%]" : "top-1/2"} text-white`}>
                        <div className={`${windowWidth < 730 ? "" : "px-20"}`}>
                            <h1 className={`${windowWidth < 1000 ? "text-2xl" : "text-4xl "} uppercase mb-10 title-1`}>{language ? "Stones" : "Nuestro catálogo"}</h1>
                            <p className={windowWidth < 1000 ? "txt-1 text-lg" : "txt-1 text-2xl"}>{language ? "We offer a wide variety of natural stones such as marble, granite, quartz, travertine, quarries, quartzite, and limestone. Over 300 different materials and finishes." : "Contamos con una amplia variedad de piedras naturales como mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas. Más de 300 diferentes materiales y acabados."}</p>
                        </div>
                        <div className="w-full"></div>
                    </div>
                }
                {
                    windowWidth < 1280 ? null : <div className="w-full absolute top-[80%] flex justify-center">
                        <FontAwesomeIcon icon={faArrowDown} size='3x' color='white' className='animation-stones cursor-pointer' onClick={handleScrollTo}></FontAwesomeIcon>
                    </div>
                }
            </div>

            {
                    windowWidth < 730 ? <div className={`w-full flex justify-center`}>
                        <div className={`w-full p-10`}>
                            <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl "} font-semibold uppercase mb-10 title-1`}>{language ? "Stones" : "Nuestro catálogo"}</h1>
                            <p className={windowWidth < 990 ? "txt-1 text-lg" : "txt-1 text-2xl"}>{language ? "We offer a wide variety of natural stones such as marble, granite, quartz, travertine, quarries, quartzite, and limestone. Over 300 different materials and finishes." : "Contamos con una amplia variedad de piedras naturales como mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas. Más de 300 diferentes materiales y acabados."}</p>
                        </div>
                    </div> : null
                }

            <div className="" id='stones'></div>

            <div className="w-full overflow-hidden">
                <div className={`w-full ${windowWidth < 780 ? "grid grid-cols-1" : "flex justify-center"} gap-10 mt-32 mb-24`}>

                    {
                        categorias.map((item, index) => (
                            <button key={index} onClick={() => handleFilterStones(item.categoria)}
                                className={`hover:border-b px-10 py-2 transition-all duration-300 uppercase text-xl ${selected == item.categoria ? "border-b" : ""}`}>{language ? item.title2 : item.title}</button>
                        ))
                    }

                </div>


                <div className={`w-full grid ${windowWidth < 780 ? "grid-cols-1" : windowWidth < 1500 ? "grid-cols-2 gap-10" : "grid-cols-4 gap-10"}  p-10 overflow-hidden`}>
                    {
                        stones.map((item, index) => (
                            <div key={index} className={`card-container mx-auto ${windowWidth < 780 ? "mt-10" : ""}`} style={{ perspective: '1000px' }}>
                                <div className="card" style={{ perspective: '1000px' }}>
                                    <div className="card-front">
                                        <Image src={item.imagen} alt={item.title} width={500} height={500} className='w-full border'
                                            style={{ width: "350px", height: "500px", objectFit: "cover", objectPosition: "50% 50%" }}></Image>

                                    </div>
                                    <div className="card-back">
                                        <p className='card-back-txt'>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default Catalogo

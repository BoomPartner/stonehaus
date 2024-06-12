"use client";
import Image from 'next/image';
import React, { useState, useEffect, useContext } from 'react'
import globalContext from '@/app/context/globalContext';
import ReactPlayer from 'react-player';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InfiniteScroller from '../Infinite/InfiniteScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)
const Nosotros = () => {

    const { windowWidth, language } = useContext(globalContext)

    const handleScrollTo = () => {
        gsap.to(window, { duration: 1.5, scrollTo: { y: "#video-nosotros", autoKill: false } });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
                delay: .5,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
            })


        gsap.fromTo(".title-2",
            { y: '80px', opacity: 0 },
            {
                duration: 1,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#video-nosotros",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );
        gsap.fromTo(".txt-2",
            { y: '80px', opacity: 0 },
            {
                duration: 1,
                delay: .5,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#video-nosotros",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );


        gsap.fromTo(".title-3",
            { y: '80px', opacity: 0 },
            {
                duration: 1,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#imagen1",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );
        gsap.fromTo(".txt-3",
            { x: '80px', opacity: 0 },
            {
                duration: 1,
                delay: .5,
                x: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#imagen1",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );


        gsap.fromTo(".title-4",
            { x: '-80px', opacity: 0 },
            {
                duration: 1,
                x: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#imagen2",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );
        gsap.fromTo(".txt-4",
            { y: '80px', opacity: 0 },
            {
                duration: 1,
                delay: .5,
                y: '0px',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#imagen2",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

    }, [])

    return (
        <div className='overflow-hidden'>

            <div className="banner-nosotros">
                {
                    windowWidth < 730 ?
                        null :
                        <div className="w-full absolute top-1/2 flex justify-center text-white">

                            <div className="w-[40%]">
                                <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} mb-10 font-normal uppercase title-1`}>{language ? "About Us" : "Sobre Nosotros"}</h1>
                                <p className={`${windowWidth < 990 ? "tex-lg" : "text-xl"} tracking-wide leading-relaxed txt-1`}>{language ? "We are a leading company in the importation, selection, and marketing of natural stones, ideal for construction" : "Somos una empresa líder en la importación, selección y comercialización de piedras naturales, ideales para la construcción."}</p>
                            </div>

                        </div>
                }
                {
                    windowWidth < 1000 ? null : <div className="w-full absolute flex justify-center top-[70%]">
                        <FontAwesomeIcon icon={faArrowDown} size='3x' className='animation cursor-pointer' color='white' onClick={handleScrollTo}></FontAwesomeIcon>
                    </div>
                }
            </div>

            {
                windowWidth < 730 ? <div className="w-full flex justify-end mt-24">
                    <div className={`${windowWidth < 730 ? "" : "w-full"}`}>

                    </div>
                    <div className="p-10">
                        <h1 className={`mb-10 uppercase title-1 text-2xl font-normal`}>{language ? "About Us" : "Sobre Nosotros"}</h1>
                        <p className={`tracking-wide leading-relaxed txt-x1 text-lg`}>{language ? "We are a leading company in the importation, selection, and marketing of natural stones, ideal for construction" : "Somos una empresa líder en la importación, selección y comercialización de piedras naturales, ideales para la construcción."}</p>
                    </div>

                </div> : null
            }

            <div className={`w-full mt-24 p-10 ${windowWidth < 990 ? "" : "flex justify-center items-center"}`} id='video-nosotros'>
                {
                    windowWidth < 990 ? null : <div className="w-full">
                        <ReactPlayer url={"/videos/principal.mp4"} width={800} height={500} muted loop playing >

                        </ReactPlayer>
                    </div>
                }
                <div className="w-full">
                    <h3 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-normal text-left mb-10 title-2 uppercase`}>
                        {language ? "Import of natural stones from over 25 different countries around the world." : "Importación de piedras naturales de más de 25 diferentes países en el mundo"}</h3>
                    <p className='txt-2 text-lg tracking-wide leading-relaxed'>{language ? "We offer a wide variety of natural stones such as marble, granite, quartz, travertine, quarries, quartzite, and limestone. Over 300 different materials and finishes." : "Contamos con una amplia variedad de piedras naturales como mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas. Más de 300 diferentes materiales y acabados."}</p>
                </div>

                {
                    windowWidth < 990 ? <div className="w-full flex justify-center">
                        <ReactPlayer url={"/videos/principal.mp4"} width={500} height={500} muted loop playing >

                        </ReactPlayer>
                    </div> : null
                }

            </div>

            <div className="w-full">
                <InfiniteScroller></InfiniteScroller>
            </div>

            <div className={`w-full ${windowWidth < 990 ? "" : "flex justify-center items-center"} p-10`}>
                <div className={`mb-20 w-[50%]`} id='imagen1'>
                    <h3 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-normal mb-10 uppercase`}>{language ? "Specialty and Exclusivity" : "Especialidad y Exclusividad"}</h3>
                    <p className={`${windowWidth < 990 ? "text-lg" : "text-2xl"} tracking-wide leading-relaxed title-3`}>{language ? "We have an unwavering commitment to quality. Each of our natural stones undergoes a rigorous selection process to ensure that only the best materials are offered to our customers." : "Tenemos un compromiso incansable con la calidad. Cada una de nuestras piedras naturales es sometida a un riguroso proceso de selección para asegurar que solo los mejores materiales sean ofrecidos a nuestros clientes."}</p>
                </div>
                <div className="w-[50%] img-1 p-10">
                    <Image src={"/social/05.jpg"} alt='imagen' width={3000} height={3000} className='w-[80%] txt-3'>

                    </Image>
                </div>

            </div>
            <div className={`w-full ${windowWidth < 990 ? "" : "flex justify-center items-center"} p-10`}>

                {
                    windowWidth < 990 ? null : <div className="w-full" id='imagen2'>
                        <Image src={"/home/4.jpg"} alt='imagen' width={3000} height={3000} className='w-[80%] title-4'>

                        </Image>
                    </div>
                }

                <div className="p-10">
                    <h3 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-normal mb-10 uppercase`}>{language ? "Global Vision" : "Visión Global"}</h3>
                    <h3 className={`${windowWidth < 990 ? "text-lg" : "text-2xl"} tracking-wide leading-relaxed txt-4`}>{language ? "As leaders in the natural stone industry, Grupo Stonehaus offers a global vision and unprecedented access to the world's most luxurious and exclusive materials." : "Como líderes en la industria de las piedras naturales, Grupo Stonehaus ofrece una visión global y un acceso sin precedentes a los materiales más lujosos y exclusivos del mundo."}</h3>
                </div>

                {
                    windowWidth < 990 ? <div className="w-full mt-20" id='imagen2'>
                        <Image src={"/home/4.jpg"} alt='imagen' width={1920} height={1080} className='w-full title-4'>

                        </Image>
                    </div> : null
                }


            </div>

        </div>
    )
}

export default Nosotros

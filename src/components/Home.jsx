"use client";
import ZoomParallax from '../components/ZoomParallax/index';
import ParallaxGSAP1 from '@/components/Parallax1';
import ParallaxGSAP2 from '@/components/Parallax2';
import ParallaxGSAP3 from '@/components/Parallax3';
import { useContext, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Clientes from '@/components/Clientes';
import Link from 'next/link';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import globalContext from '@/app/context/globalContext';
import ReactPlayer from 'react-player';
const ComponentHome = () => {
    const { windowWidth, language } = useContext(globalContext)

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".titulo1",
            { x: '30%', opacity: 0 },
            {
                duration: 1,
                x: '0%',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#primera",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".texto1",
            { y: '50%', opacity: 0 },
            {
                duration: 1,
                y: '0%',
                opacity: 1,
                delay: 0.5,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#primera",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".titulo2",
            { y: '50%', opacity: 0 },
            {
                duration: 1,
                y: '0%',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#segunda",
                    start: "top center",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".texto2",
            { x: '50%', opacity: 0 },
            {
                duration: 2,
                x: '0%',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#segunda",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".blancas",
            { x: '50%', opacity: 0 },
            {
                duration: 1,
                x: '0%',
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#blancas",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".blancastxt",
            { y: 100, opacity: 0 },
            {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#blancas",
                    start: "top center",
                    toggleActions: "play none none none",
                },

            }
        );

        gsap.fromTo(".blancastxt2",
            { x: -100, opacity: 0 },
            {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: "#blancas",
                    start: "top bottom",
                    toggleActions: "play none none none",
                },

            }
        );

    }, [])


    return (
        <div className="">

            <div className="banner-principal mb-20 overflow-hidden"></div>

            <div className={`w-full overflow-hidden ${windowWidth < 1175 ? "" : "p-20 flex items-center"}`}>

                {
                    windowWidth < 1175 ? <div className={`w-full px-10 mb-20`} id='primera'>
                        <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-5xl"} font-normal uppercase mb-10 titulo1`}>{language ? "Company" : "Empresa"}</h1>
                        <p className={`texto1 tracking-wide leading-relaxed ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>{language ? "We take pride in being the leading company in the import, selection, and marketing of the highest quality natural stones." : `Nos enorgullecemos de ser la empresa líder en importación, selección y comercialización de piedras naturales de la más alta calidad.`}</p>
                        <p className={`texto1 mt-10 tracking-wide leading-relaxed ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>{language ? "We specialize in providing specialized solutions, ensuring quality and exclusivity." : "Nos especializamos en proporcionar soluciones especializadas, asegurando la calidad y exclusividad."}</p>
                    </div> : null
                }
                <div className="w-full">
                    <ParallaxGSAP1></ParallaxGSAP1>
                </div>
                {
                    windowWidth < 1175 ? null : <div className={`w-full px-10`} id='primera'>
                        <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-5xl"} font-normal uppercase mb-10 titulo1`}>{language ? "Company" : "Empresa"}</h1>
                        <p className={`texto1 tracking-wide leading-relaxed ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>
                            {language ? "We take pride in being the leading company in the import, selection, and marketing of the highest quality natural stones." : `Nos enorgullecemos de ser la empresa líder en importación, selección y comercialización de piedras naturales de la más alta calidad.`}</p>
                        <p className={`texto1 mt-10 tracking-wide leading-relaxed ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>
                            {language ? "We specialize in providing specialized solutions, ensuring quality and exclusivity." : "Nos especializamos en proporcionar soluciones especializadas, asegurando la calidad y exclusividad."}</p>
                    </div>
                }
            </div>


            <div className={`mt-[10vh]`}>
                <ZoomParallax />
            </div>

            <div className={`w-full  ${windowWidth < 1175 ? "" : "flex items-center justify-center p-10"}`} id='blancas'>
                {
                    windowWidth < 1175 ? null : <div className="w-full">
                        <ParallaxGSAP3></ParallaxGSAP3>
                    </div>
                }
                <div className={`mt-24 ${windowWidth < 1175 ? "w-full" : "w-[60%]"}`}>
                    <h3 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-normal uppercase mb-10 blancastxt`}>
                        {language ? "We transform natural stones into masterpieces." : "Transformamos piedras naturales en obras maestras."}</h3>
                    <div className="">
                        <p className={`blancastxt2 tracking-wide leading-relaxed ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>{language ? "With innovation and creativity, we offer the best in natural stones for construction. Our unique approach ensures that each project is tailored to your needs with exceptional design." : "Con innovación y creatividad, ofrecemos lo mejor en piedras naturales para la construcción. Nuestro enfoque único garantiza que cada proyecto se adapte a sus necesidades con un diseño excepcional."}</p>
                    </div>

                </div>

                {
                    windowWidth < 1175 ? <div className="w-full mt-24">
                        <ParallaxGSAP3></ParallaxGSAP3>
                    </div> : null
                }
            </div>

            <div className="w-full flex justify-center mt-24">
                <ReactPlayer url={"/videos/segundo.mp4"} width={1500} height={500} muted loop playing >

                </ReactPlayer>
            </div>

            <div className={`w-full ${windowWidth < 1175 ? "" : " p-20 flex items-center"}`}>

                <div className={`p-10 ${windowWidth < 1175 ? "w-full mt-32" : "w-[60%]"}`} id='segunda'>
                    <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-semibold uppercase mb-10 titulo2`}>
                        {language ? "" : "Agenda tu visita"}</h1>
                    <p className={`texto2 tracking-wide leading-relaxed mb-10 ${windowWidth < 990 ? "text-lg" : "text-2xl"}`}>
                        {
                            language ? "Send us a message to schedule an appointment with one of our sales consultants" : "Envíanos un mensaje para agendar una cita con uno de nuestros asesores comerciales"
                        }
                    </p>
                    <Link href={"https://wa.link/ic7htn"} target='blank' className='uppercase border p-4  hover:bg-black hover:bg-opacity-50 hover:text-white hover:scale-110 texto2'>Enviar Mensaje</Link>
                </div>

                <div className="w-full">
                    <ParallaxGSAP2></ParallaxGSAP2>
                </div>

            </div>

            <div className="w-full mt-10 mb-10">
                <div className="w-full text-center mt-10">
                    {/* <h1 className='text-4xl font-semibold uppercase mb-10'>{language ? "Extraction Process" : "Proceso de Extracción"}</h1> */}
                    <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} font-normal uppercase mb-10`}>
                        {language ? "Projects" : "Proyectos"}</h1>
                </div>
                <div className="w-full">
                    <Clientes />
                </div>

            </div>
        </div>
    )
}

export default ComponentHome

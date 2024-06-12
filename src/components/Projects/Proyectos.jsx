"use client";
import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)
import "./style.css"
import globalContext from '@/app/context/globalContext';
import { GalleryImages } from '../server';
import Image from 'next/image';
import { filterProjects } from '../server';
const Proyectos = () => {

    const { windowWidth, language } = useContext(globalContext)
    const [opcion, setOpcion] = useState(GalleryImages)
    const [selected, setSelected] = useState(null)

    const handleScrollTo = () => {
        // window.scrollTo({
        //     top: 1000,
        //     behavior: 'smooth'
        // })

        gsap.to(window, { duration: 1.5, scrollTo: { y: "#proyectos", autoKill: false } });
    }

    const handleFilterProjects = (event) => {
        setSelected(event)
        if (event == "todos") {
            setOpcion(GalleryImages)
        }
        else {
            const projects = GalleryImages.filter((item) => item.categoria == event)
            console.log(projects);
            setOpcion(projects)
        }

    }

    useEffect(() => {
        gsap.fromTo(".title-1",
            { opacity: 0, y: 80 },
            {
                y: 0,
                duration: 2,
                opacity: 1,
                ease: 'power1.inOut',
            }
        );
    }, [])


    return (
        <div>
            <div className="banner-proyectos relative text-white">


                <div className="w-full absolute top-[50%] flex justify-center">
                    <h1 className={`${windowWidth < 1040 ? "text-xl text-center" : "text-4xl"} uppercase title-1`}>{language ? "Over 100 projects sold since its foundation." : "Más de 100 proyectos vendidos desde su fundación."}</h1>
                </div>
                {
                    windowWidth < 1000 ? null : <div className="w-full absolute flex justify-center top-[70%]">
                        <FontAwesomeIcon icon={faArrowDown} size='3x' className='animation cursor-pointer' onClick={handleScrollTo}></FontAwesomeIcon>
                    </div>
                }

            </div>
            <div className="mb-24" id='proyectos'></div>
            <div className={`w-full ${windowWidth < 900 ? "" : "flex items-center justify-center" } gap-10 p-10 mt-10`} >
                {
                    filterProjects.map((item, index) => (
                        <div key={index} className="text-xl uppercase text-center">
                            <h1 className={`p-2 hover:border-b cursor-pointer ${selected == item.categoria ? "border-b" : ""}`} onClick={() => handleFilterProjects(item.categoria)}>{item.title}</h1>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex justify-center">
                <div className={`mt-10 grid ${windowWidth < 900 ? "" : "grid-cols-3 gap-10"} p-10`} >
                    {
                        opcion.map((item, index) => (

                            <div key={`${item.id}-${item.categoria}`} className={`w-full mx-auto efecto-filter ${windowWidth < 900 ? "mt-20" : ""}`}>
                                <div key={index} className="w-full shadow-xl transform duration-500 hover:scale-105">
                                    <div className="relative group">
                                        <Image src={item.imagen} width={500} height={500} className="w-full" alt={item.title} />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 transform duration-300 p-1 cursor-pointer">
                                            <div className="opacity-0 uppercase
                                        w-full h-full text-white 
                                        text-xl flex flex-col items-center 
                                        justify-center group-hover:opacity-80 transform duration-500">
                                                {item.title}
                                                <h5 className='text-sm'>{item.description}</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* <div className="w-full h-[100vh] overflow-hidden p-0 m-0" >
                <GalleryDraggend></GalleryDraggend>
            </div> */}
        </div>
    )
}

export default Proyectos

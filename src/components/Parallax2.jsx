"use client";
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { imagesParallax2 } from './server'

const ParallaxGSAP2 = () => {

    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null)
    const imagesRef = useRef([])

    useLayoutEffect(() => {
        const context = gsap.context(()=>{
            const timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
            })
            .to(imagesRef.current[1],{y: -250},0)
            .to(imagesRef.current[2],{y: -455},0)
        })

        return () => context.revert();
    }, [])

    return (
        <div ref={container}>
            <div className={"w-full flex justify-center items-center relative h-[100vh]"}>
                {
                    imagesParallax2.map((item,index)=>(
                        <div key={index} className={"imageContainer2"} ref={elemnt => imagesRef.current[index] = elemnt}>
                            <img src={item.imagen} alt={item.alt} srcSet=""/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default ParallaxGSAP2
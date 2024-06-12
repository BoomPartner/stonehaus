"use client";
import React, { useState, useContext } from 'react'
import { sala_uno, sala_dos, sanitario_uno, sanitario_dos, simulador } from '../server';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper/modules";
import globalContext from '@/app/context/globalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Image from 'next/image';
gsap.registerPlugin(ScrollToPlugin)
const ComponentSimulator = () => {
  const { windowWidth, language } = useContext(globalContext)
  const [clase, setClase] = useState("sala1")
  const [sala1, setSala1] = useState("/simulador/modelos/sala1_02.jpg")
  const [sala2, setSala2] = useState("/simulador/modelos/sala2_01.jpg")
  const [sanitario1, setSanitario1] = useState("/simulador/modelos/sanitario1_01.jpg")
  const [sanitario2, setSanitario2] = useState("/simulador/modelos/sanitario2_01.jpg")

  const handleDataModel = (event) => {

    // Slide Activo 
    const activeSlide = event.slides.find(slide => slide.classList.contains('swiper-slide-active'));
    // console.log(activeSlide);

    // Clases para buscar dinámicamente
    const clasesDinamicas = ["sala1", "sala2", "sanitario1", "sanitario2"];

    let claseEncontrada = null;

    // Itera a través de las clases dinámicas y busca elementos con esas clases
    for (const clase of clasesDinamicas) {
      const elemento = activeSlide.querySelector(`.${clase}`);
      if (elemento) {
        claseEncontrada = clase;
        break; // Si se encuentra un elemento, sal del bucle
      }
    }

    if (claseEncontrada) {
      // Si se encontró un elemento con una de las clases dinámicas
      // console.log("Se encontró la clase:", claseEncontrada);
      setClase(claseEncontrada)


    } else {
      // Si no se encontró ningún elemento con las clases dinámicas
      // console.log("No se encontró ninguna clase dentro del slide activo.");
    }
  }

  const handleChangeModel = (title) => {
    switch (clase) {
      case "sala1":
        const filter1 = sala_uno.find(item => item.title == title)
        if (filter1) {
          console.log(filter1);
          setSala1(filter1.imagen)
        }
        break;
      case "sala2":
        const filter2 = sala_dos.find(item => item.title == title)
        if (filter2) {
          console.log(filter2);
          setSala2(filter2.imagen)
        }
        break;

      case "sanitario1":
        const filter3 = sanitario_uno.find(item => item.title == title)
        if (filter3) {
          console.log(filter3);
          setSanitario1(filter3.imagen)
        }
        break;

      case "sanitario2":
        const filter4 = sanitario_dos.find(item => item.title == title)
        if (filter4) {
          console.log(filter4);
          setSanitario2(filter4.imagen)
        }
        break;
      default:
        break;
    }


  }

  const handleScrollTo = () => {
    gsap.to(window, { duration: 1.5, scrollTo: { y: "#stones", autoKill: false } });
  }

  const modelSala1 = {
    backgroundImage: `url('${sala1}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    paddingBottom: '70%',
    transition: 'all 0.5s ease-in-out'
  };
  const modelSala2 = {
    backgroundImage: `url('${sala2}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    paddingBottom: '70%',
    transition: 'all 0.5s ease-in-out'
  };
  const modelSanitario1 = {
    backgroundImage: `url('${sanitario1}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    paddingBottom: '70%',
    transition: 'all 0.5s ease-in-out'
  };
  const modelSanitario2 = {
    backgroundImage: `url('${sanitario2}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    paddingBottom: '70%',
    transition: 'all 0.5s ease-in-out'
  };


  return (
    <div>

      <div className="banner-simulator">
        {
          windowWidth < 730 ?
            null :
            <div className="w-full absolute top-[35%] flex justify-center text-white">

              <div className={windowWidth < 1400 ? "w-[50%]" : "w-[30%]"}>
                <h1 className={`${windowWidth < 990 ? "text-2xl" : "text-4xl"} mb-10 font-normal uppercase title-1`}>{language ? "Simulador" : "Simulador"}</h1>
                <p className={`${windowWidth < 990 ? "tex-lg" : "text-xl"} tracking-wide leading-relaxed txt-1`}>{language ? "We know that choosing the perfect material is an important decision. Our simulator allows you to experiment with our stones so that you can make the best decision for your project." : "Sabemos que elegir el material perfecto es una decisión importante.  Nuestro simulador te permite experimentar con nuestras piedras, para que puedas tomar la mejor decisión para tu proyecto."}</p>
              </div>

            </div>
        }
        {
          windowWidth < 1095 ? null : <div className="w-full absolute flex justify-center top-[70%]">
            <FontAwesomeIcon icon={faArrowDown} size='3x' className='animation cursor-pointer' color='white' onClick={handleScrollTo}></FontAwesomeIcon>
          </div>
        }
      </div>

      <div className={`w-full ${windowWidth < 1000 ? "" : "flex justfy-center"} p-10 gap-10`} id='stones'>

        <div className="w-full">
          <h3 className='font-normal text-4xl mb-10 mt-10'>
            {language ? "Stones" : "Piedras"}
          </h3>
          <div className="w-full grid grid-cols-2 gap-5">
            {
              simulador.map((item, index) => (
                <div key={index} className="w-full shadow-xl p-4">

                  <img src={item.imagen} className="w-full cursor-pointer hover:scale-105 transition-all duration-500" width={100} height={100} onClick={() => handleChangeModel(item.title)} />

                  <h3 className='font-normal mt-5'>{item.title}</h3>
                </div>
              ))
            }
          </div>
        </div>

        <div className={windowWidth < 1000 ? "w-full" : "w-[50%]"}>
          <h3 className='font-normal text-4xl mt-10 mb-10'>
            {language ? "Interiors" : " Interiores"}
          </h3>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            onSlideChangeTransitionStart={handleDataModel}
            slidesPerView={1}
            loop={false}
            pagination={true}
            navigation={true}
            modules={
              [Navigation]
            }
            className=''>

            <SwiperSlide>
              <div className="sala1" style={modelSala1}>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sala2" style={modelSala2}>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sanitario1" style={modelSanitario1}>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sanitario2" style={modelSanitario2}>

              </div>
            </SwiperSlide>


          </Swiper>

        </div>
      </div>

    </div>
  )
}

export default ComponentSimulator

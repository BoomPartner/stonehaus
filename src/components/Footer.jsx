"use client";
import React, {useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons'
import globalContext from '@/app/context/globalContext'
const ComponentFooter = () => {

  const {windowWidth, language} = useContext(globalContext)
  return (
    <div className='w-full p-20 bg-[#1d1f20] text-white'>
      <div className={`w-full grid  ${windowWidth < 850 ? "grid-cols-1" : "grid-cols-3"}`}>

        <div className={`mx-auto ${windowWidth < 850 ? "text-center mb-10" : ""}`}>
          <h3 className='text-xl uppercase mb-10'>{language ? "About Us" : "Sobre Nosotros"}</h3>
          <ul className='text-xl'>
            <li>
              <Link href={"/"} className='hover:underline '>Inicio</Link>
            </li>
            <li>
              <Link href={"/about"} className='hover:underline'>Nosotros</Link>
            </li>
            <li>
              <Link href={"projects"} className='hover:underline'>Proyectos</Link>
            </li>
            <li>
              <Link href={"/stones"} className='hover:underline'>Catálogo</Link>
            </li>
            <li>
              <Link href={"/contact"} className='hover:underline'>Contacto</Link>
            </li>
          </ul>
        </div>
        
        <div className={`mx-auto text-xl ${windowWidth < 850 ? "text-center" : ""}`}>
          <h3 className='text-xl uppercase mb-10'>{language ? "Location" : "Ubicación"}</h3>
          <p>
            San José de Los Leones #25,
          </p>
          <p>
            Naucalpan, Estado de México,
          </p>
          <p>
            ventas@stonehaus.com.mx
          </p>
          <p>55-11-69-24-60</p>

        </div>

        <div className={`mx-auto text-xl ${windowWidth < 850 ? "text-left mt-10" : ""}`}>
          <h3 className='text-xl uppercase mb-10'>{language ? "Social" : "Redes Sociales"}</h3>
          
          <p className='mb-2'>
            <Link href={"https://www.instagram.com/stonehausmx/"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faInstagram} color='#DD2A7B' size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Instagram</span>
            </Link>

          </p>
          <p className='mb-2'>
            <Link href={"https://www.facebook.com/Stonehausmx"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faFacebook} color='#3B5998' size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Facebook</span>
            </Link>
          </p>

          <p className='mb-2'>
            <Link href={"https://www.tiktok.com/@stonehausmx"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faTiktok} size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Tiktok</span>
            </Link>
          </p>

          <p className='mb-2'>
            <Link href={"https://www.linkedin.com/company/stonehausmx/"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faLinkedin} color='#0077B5' size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Linkedin</span>
            </Link>
          </p>

          <p className='mb-2'>
            <Link href={"https://www.pinterest.com.mx/stonehausmx/"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faPinterest} color='#e60023' size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Pinterest</span>
            </Link>
          </p>

          <p className='mb-2'>
            <Link href={"https://open.spotify.com/playlist/6p3svketxTXlXNxPTngNvd?si=HppXnD-sQ76Wd_3X3F-lzg&nd=1&dlsi=baf3d69a4b274602"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faSpotify} color='#1DB954' size='xl'></FontAwesomeIcon>
              <span className='ml-2'>Spotify</span>
            </Link>
          </p>

        </div>

      </div>
      <div className="w-full mt-4 text-xl">
        <div className="flex justify-center">
         <div className="text-center">
         <Image src={"/logos/logo_blanco.png"} alt='logo' width={300} height={100}></Image>
          <h5 className='mt-5'>© Copyright 2025</h5>
         </div>
        </div>
        <div className="w-full mt-10">
          <h5 className='text-center'>Developed By: <Link href={"https://www.boom-partner.com/"} 
          target='_blank' className='hover:underline'>Boom Partner</Link> </h5>
        </div>
      </div>

    </div>
  )
}

export default ComponentFooter

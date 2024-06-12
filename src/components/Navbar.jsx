"use client";
import React, { useState, useEffect, useContext } from 'react'
import { enlaces } from './server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import globalContext from '@/app/context/globalContext';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer, Typography, IconButton } from '@material-tailwind/react';

const ComponentNavbar = () => {
  const { windowWidth, bgWhite, language, setLanguage } = useContext(globalContext)


  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = () => {
    setSideBar((prevState) => !prevState)
  }

  return (
    <>
      {
        windowWidth < 990 ?
          <div className={`w-full p-2 flex justify-center items-center fixed z-10 top-0 transition-all duration-500 
          ${bgWhite ? "bg-white text-black shadow-2xl" : "bg-black bg-opacity-60 text-white"}`}>

            <div className="w-full px-10">
              <img src="/logos/logo.png" alt="logo-stonehause" width={100} />
            </div>

            <div className="p-5 px-10">
              <FontAwesomeIcon icon={faBars} color={bgWhite ? "black" : "white"} size='xl' className='cursor-pointer' onClick={handleSideBar}></FontAwesomeIcon>
            </div>

          </div>
          :
          <div className={`w-full flex justify-evenly items-center fixed z-10 top-0 transition-all duration-500 
        ${bgWhite ? "bg-white text-black shadow-2xl" : "bg-black bg-opacity-60 text-white"}`}>

            <div className={`w-full ${windowWidth < 990 ? "hidden" : "flex justify-center items-center"}`}>
              <ul className='flex gap-5 items-center'>
                {
                  enlaces.map((item, index) => (
                    <div key={index}>
                      <Link href={item.enlace} className='uppercase text-md'>{language ? item.name2 : item.name}</Link>
                    </div>
                  ))
                }
              </ul>
            </div>

            <div className="flex justify-center p-2 w-[15%]">
              <img src="/logos/logo.png" alt="" width={1000} className='w-full' />
            </div>

            <div className={`w-full ${windowWidth < 990 ? "hidden" : "flex justify-center gap-5"}`}>

              <Link href={"https://www.facebook.com/Stonehausmx"} target='_blank' className='hover:underline cursor-pointer'>
                <FontAwesomeIcon icon={faFacebook} color={bgWhite ? "#3B5998" : "white"} size='xl'></FontAwesomeIcon>

              </Link>
              <Link href={"https://www.instagram.com/stonehausmx/"} target='_blank' className='hover:underline cursor-pointer'>
                <FontAwesomeIcon icon={faInstagram} color={bgWhite ? "#DD2A7B" : "white"} size='xl'></FontAwesomeIcon>
              </Link>

              <Link href={"https://open.spotify.com/playlist/6p3svketxTXlXNxPTngNvd?si=HppXnD-sQ76Wd_3X3F-lzg&nd=1&dlsi=baf3d69a4b274602"} target='_blank' className='hover:underline cursor-pointer'>
                <FontAwesomeIcon icon={faSpotify} color={bgWhite ? "#1DB954" : "white"} size='xl'></FontAwesomeIcon>
              </Link>

              <img src="/logos/mexico.webp" alt="" width={"30px"} className='cursor-pointer' onClick={() => setLanguage(false)} />
              <img src="/logos/usa.webp" alt="" width={"30px"} className='cursor-pointer' onClick={() => setLanguage(true)} />

            </div>
          </div>
      }

      <Drawer
        placement='right'
        overlay={false}
        open={sideBar}
        onClose={handleSideBar}
        className='p-4 bg-black'>
        <div className="mb-6 flex items-center justify-between">
          <div className="w-full"></div>
          <IconButton
            variant="text"
            color="white"
            onClick={handleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="w-full flex items-center justify-center">
          <img src="/logos/logo.png" alt="logo-sidebar" width={100} />
        </div>
        <div className="w-full mt-20">
          <ul className='text-white'>
            {
              enlaces.map((item, index) => (
                <li key={index} className='mt-5 text-center w-full'>
                  <Link onClick={handleSideBar} href={item.enlace} className='uppercase text-xl hover:'>{language ? item.name2 : item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className={`w-full`}>


          <div className="w-full mt-10 flex gap-5 justify-center">
            <img src="/logos/mexico.webp" alt="" width={"30"} className='cursor-pointer' onClick={() => setLanguage(false)} />
            <img src="/logos/usa.webp" alt="" width={"30"} className='cursor-pointer' onClick={() => setLanguage(true)} />
          </div>

          <div className="w-full mt-10 flex justify-center gap-8">
            <Link href={"https://www.facebook.com/Stonehausmx"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faFacebook} color='#3B5998' size='xl'></FontAwesomeIcon>

            </Link>
            <Link href={"https://www.instagram.com/stonehausmx/"} target='_blank' className='hover:underline'>
              <FontAwesomeIcon icon={faInstagram} color='#DD2A7B' size='xl'></FontAwesomeIcon>

            </Link>
            {/* <FontAwesomeIcon color={bgWhite ? "#3B5998" : "white"} icon={faFacebook} size='xl' className='cursor-pointer'></FontAwesomeIcon>
            <FontAwesomeIcon color={bgWhite ? "#DD2A7B" : "white"} icon={faInstagram} size='xl' className='cursor-pointer'></FontAwesomeIcon> */}
          </div>

        </div>


      </Drawer>


    </>
  )
}

export default ComponentNavbar

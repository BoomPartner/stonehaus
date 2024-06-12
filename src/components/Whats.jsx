"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Whats = () => {
    return (
        <div>
            <div className='fixed bottom-12 hover:scale-110 transition-all duration-500 lef-0 md:right-10 lg:right-10 z-50'>

                <div className="relative w-full">
                    <Link href={"https://wa.link/ic7htn"} target='_blank'>
                        <Image className='h-[8vh] w-[8vh]' src={"/logos/whatsapp.png"} alt='Boton Whatsapp' width={1000} height={1000}></Image>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Whats

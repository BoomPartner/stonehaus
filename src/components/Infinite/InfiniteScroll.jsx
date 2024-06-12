"use client";
import React, { useEffect, useRef, useContext, useState } from 'react';
import globalContext from '@/app/context/globalContext';
import './style.css'
import { imagesInfiniteScroll } from '../server';
import Image from 'next/image';
import Link from 'next/link';

function InfiniteScroller() {
  const scrollersRef = useRef(null);
  const { windowWidth } = useContext(globalContext)

  useEffect(() => {
    const scrollers = scrollersRef.current.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div ref={scrollersRef} className=''>
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          {
            imagesInfiniteScroll.map((item, index) => (

              <Link href={item.enlace} target='_blank' key={index}>
                <div className="w-full">
                  <Image key={index} placeholder='blur' 
                  blurDataURL={item.imagen} 
                  src={item.imagen} 
                  alt={item.alt} 
                  width={windowWidth < 720 ? 300 : 500} height={550} className='' />
                 
                </div>



              </Link>

            ))
          }

        </div>
      </div>
    </div>
  );
}

export default InfiniteScroller;
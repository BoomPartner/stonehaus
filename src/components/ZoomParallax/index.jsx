"use client";
import styles from './styles.module.scss';
import Picture1 from '../../../public/home/primera.jpg';
import Picture2 from "../../../public/home/6.jpg"
import Picture3 from '../../../public/home/3.jpeg';
import Picture4 from '../../../public/home/4.jpg'
import Picture5 from '../../../public/home/5.jpg'
import Picture7 from '../../../public/banners/nosotros.jpg'
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "/videos/principal.mp4",
            scale: scale4,
            video: true,
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture1,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture7,
            scale: scale8
        },
        {
            src: Picture3,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale, video }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            {
                                video ? <ReactPlayer url={src} width={500} height={250} muted loop playing >

                                </ReactPlayer> : <div className={styles.imageContainer}>

                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        placeholder='blur'
                                    />


                                </div>
                            }

                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

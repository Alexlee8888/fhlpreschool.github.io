import Image from 'next/image';
import styles from './BackgroundImage.module.css'
import { useState, useEffect, useRef } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'


export default function BackgroundImage(props) {
    // const [offSetY, setOffSetY] = useState(0); // offSetY number of pixels from top of page 
    // const handleScroll = () => setOffSetY(window.pageYOffset)

    // useEffect(() => {
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener("scroll", handleScroll)
    // }, []);
    // const target = useRef(null);
    // const backgroundImage = useParallax({
    //     speed: 500,
    //     targetElement: target.current,
    // });

    return (
        // <ParallaxProvider scrollAxis='vertical'>
        //     <div ref={target} className={styles.fixedbgi}>
        //         <div ref={backgroundImage.ref}>
        //             <Image
        //                 src={props.url}
        //                 alt="backgroundImage"
        //                 width="0"
        //                 height="0"
        //             />

        //             <main>
        //                 {props.children}
        //             </main>
        //         </div>
        //     </div>

        // </ParallaxProvider>
        <div></div>

    );
}
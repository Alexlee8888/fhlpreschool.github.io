import Image from 'next/image';
import styles from './BackgroundImage.module.css'
import { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'


export default function BackgroundImage(props) {
    // const target = useRef(null);
    // const backgroundImage = useParallax({
    //     speed: 500,
    //     targetElement: target.current,
    // });

    const [offSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <section>
            <div className='styles.fixedbgi' style={{ transform: 'translateY(${offsetY *0.5}px)' }}>
                <Image
                    src={props.url}
                    alt="backgroundImage"
                    width="0"
                    height="0"
                />
            </div>
        </section>


        // <ParallaxProvider className = 'image' bgImage={props.url} strength={800}>
        //     <div>
        //         <span> pls work PLEASE </span>
        //     </div>
        // </ParallaxProvider>
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
    );
}
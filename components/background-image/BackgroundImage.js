import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './BackgroundImage.module.css'

export default function BackgroundImage(props) {

    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.style.width = `100vw`;
        containerRef.current.style.height = `100vh`;
    }, []);


    return (

        <div ref={containerRef} style={{
            backgroundImage: props.url,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'100%',
            
        }}>
            <Image src={props.url} alt="background image" width='100vw' height='100vh' />
        </div>


    );
}
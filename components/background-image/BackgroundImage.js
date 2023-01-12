import Image from 'next/image';
import styles from './BackgroundImage.module.css'
import { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'


export default function BackgroundImage(props) {

    return (
        <section>
            <div className={styles.bgi}>
                <Image
                    src={props.url}
                    alt="backgroundImage"
                    width="0"
                    height="0"
                />
            </div>
        </section>
    );
}
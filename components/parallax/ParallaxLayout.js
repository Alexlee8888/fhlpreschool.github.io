import { ParallaxLayer, Parallax } from '@react-spring/parallax';
import styles from './ParallaxLayout.module.css'
import Image from 'next/image';

export default function ParallaxLayout(props) {
    return (
        <Parallax pages={props.pages}>
            <ParallaxLayer
                offset={props.offset1}
                speed={props.speed1}
                factor={props.factor1}>
                <Image
                    src={props.url}
                    alt='backgroundImage'
                    className={styles.bgImage} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={props.offset2}
                speed={props.speed2}
                factor={props.factor2}>
                <main className={styles.main}>
                    {props.children}
                </main>
            </ParallaxLayer>
        </Parallax>
    );
}
import styles from './index.module.css';
import landscape from '../../public/landscape.jpg'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';

export default function ContactPage() {
    return (
        <div className={styles.wrapper}>
            <ParallaxLayout
                pages={1.75}
                offset1={0}
                speed1={0.5}
                factor1={1}
                url={landscape}
                offset2={0.25}
                speed2={1}
                factor2={1}
            >
                <div className={styles.scrollbg}>

                </div>
            </ParallaxLayout>
        </div>
    );
}
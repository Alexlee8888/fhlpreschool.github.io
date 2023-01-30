import Image from 'next/image';
import schedule from '../../public/schedule.png';
import styles from './index.module.css';
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import landscape from '../../public/landscape.jpg'
import Footer from '../../components/layout/Footer';


export default function DailySchedulePage() {
    return (
        <ParallaxLayout
            pages={1.5}
            offset1={0}
            speed1={0.5}
            factor1={1}
            offset2={0.5}
            speed2={1}
            factor2={2}
            url={landscape}
        >
            <div className={styles.scrollbg}>
                <Image
                    src={schedule}
                    alt="Schedule"
                    className={styles.center}
                />
            </div>
            <Footer/>
        </ParallaxLayout>

    );
}
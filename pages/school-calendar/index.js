import Image from 'next/image'
import calendar from '../../public/calendar.png'
import styles from './index.module.css'
import landscape from '../../public/landscape.jpg'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';

export default function SchoolCalendarPage() {
    return (
        <ParallaxLayout
            pages={2}
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
                    src={calendar}
                    alt="Calendar"
                />
            </div>
        </ParallaxLayout>
    );
}
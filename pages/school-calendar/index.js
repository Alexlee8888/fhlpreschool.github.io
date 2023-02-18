import Image from 'next/image'
import styles from './index.module.css'
import calendar from '../../public/updatedcalendar1.jpg'
import bg from '../../public/school_calendar.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';


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
            url={bg}
        >
            <div className={styles.scrollbg}>
                <Image
                    src={calendar}
                    alt="Calendar"
                    className={styles.center}
                />
            </div>
            <Footer />
        </ParallaxLayout>
    );
}
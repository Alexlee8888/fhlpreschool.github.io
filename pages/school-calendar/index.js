import Image from 'next/image'
import styles from './index.module.css'
import calendar from '../../public/updatedcalendar1.jpg'
import bg from '../../public/school_calendar.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';


export default function SchoolCalendarPage() {
    return (
        <div className={styles.scrollbg}>
            <Image
                src={calendar}
                alt="Calendar"
                className={styles.center}
            />
        </div>

    );
}
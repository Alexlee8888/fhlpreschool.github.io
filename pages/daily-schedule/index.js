import Image from 'next/image';
import schedule from '../../public/schedule.png';
import styles from './index.module.css';
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import bg from '../../public/Daily_schedule.png'
import Footer from '../../components/layout/Footer';


export default function DailySchedulePage() {
    return (
        <>
            <div>
                <Image
                    src={bg}
                    layout='responsive'
                    className={styles.noclick}
                />
            </div>

            <div className={styles.scrollbg}>
                <Image
                    src={schedule}
                    alt="Schedule"
                    className={styles.center}
                />
            </div>
        </>
    );
}
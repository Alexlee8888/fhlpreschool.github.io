import Image from 'next/image'
import styles from './index.module.css'
import calendar from '../../public/updatedcalendar1.jpg'
import bg from '../../public/school_calendar.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';
import Head from 'next/head';



export default function SchoolCalendarPage() {
    return (
        <>
            <div className={styles.blank}>

            </div>
            <Head>
                <title>School Calendar - Faith Hope & Love Preschool</title>
                <meta name='description' content='Here is the school calendar for the year' />
                <meta property='og:title' content='School Calendar - Faith Hope & Love Preschool' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                <Image
                    src={bg}
                    className={styles.noclick}
                    layout='responsive'
                />
            </div>
            <div className={styles.scrollbg}>
                <Image
                    src={calendar}
                    alt="Calendar"
                    className={styles.center}
                />
            </div>
        </>


    );
}
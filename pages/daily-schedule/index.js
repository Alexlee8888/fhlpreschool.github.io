import Image from 'next/image';
import schedule from '../../public/schedule.png';
import styles from './index.module.css';
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import bg from '../../public/Daily_schedule.png'
import Footer from '../../components/layout/Footer';
import Head from 'next/head';


export default function DailySchedulePage() {
    return (
        <>
            <Head>
                <title>Daily Schedule - Faith Hope & Love Preschool</title>
                <meta name='description' content='Check out our daily schedule at Faith Hope & Love Preschool' />
                <meta property='og:title' content='Daily Schedule - Faith Hope & Love Preschool' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
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
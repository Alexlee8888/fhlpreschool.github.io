import styles from './index.module.css'
import bg from '../../public/Enrollment.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import Head from 'next/head';

export default function EnrollmentPage() {
    return (
        < div className={styles.wrapper} >
            <Head>
                <title>Enrollment - Faith Hope & Love Preschool</title>
                <meta name='description' content='Fill out these forms to enroll at Faith Hope & Love Preschool' />
                <meta property='og:title' content='Enrollment - Faith Hope & Love Preschool' />
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
                <p className={styles.para}>
                    Please fill out the following forms and email them to preschool@fhlschool.org
                    <br />
                    <br />
                </p>
                <div className={styles.row}>
                    <iframe
                        src="https://drive.google.com/file/d/14nin4xx5IpaAjjRucPyvuuijDwNnjAyM/preview"
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        className={styles.column}
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/1oCIITf_-EuN22PoTbvdeqKA1ePNF_Lqi/preview"
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        className={styles.column}
                    ></iframe>
                </div>
                <p className={styles.para1}>
                    Thank you!
                </p>
            </div>
        </div>
    );
}
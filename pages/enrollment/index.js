import styles from './index.module.css'
import bg from '../../public/Enrollment.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';

export default function EnrollmentPage() {
    return (
        < div className={styles.wrapper} >
            <ParallaxLayout
                pages={2}
                offset1={0}
                speed1={0.5}
                factor1={1}
                offset2={0.25}
                speed2={1}
                factor2={2}
                url={bg}
            >
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
                <Footer />
            </ParallaxLayout>
        </div >
    );
}
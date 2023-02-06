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
                    <p className={styles.para1}>
                        Please fill out the following forms and email them to preschool@fhlschool.org
                        <br />
                        <br />
                    </p>
                    <div className={styles.row}>
                        <iframe
                            src="https://docs.google.com/document/d/e/2PACX-1vQf6tvZVKRgbzgkhEaMSKGZ_J7UKgaLfiwYNCCkmBOQMWaJQ4u5cdOkR8K1xc3qfILwAMhs51O_QXQc/pub?embedded=true"
                            height="100%"
                            width="100%"
                            className={styles.column}
                        ></iframe>
                        <iframe
                            src="https://docs.google.com/document/d/e/2PACX-1vRJ5yKwBOToUAKaQbDuIAkwz1EtibJR7CserPofmawDj4DgElR6X5FJEjm-Qxx7D7fHk8Mtic8NH86t/pub?embedded=true"
                            height="100%"
                            width="100%"
                            className={styles.column}
                        ></iframe>
                    </div>
                    <p className={styles.para1}>
                        <br />
                        Thank you!
                    </p>
                </div>
                <Footer />
            </ParallaxLayout>
        </div >
    );
}
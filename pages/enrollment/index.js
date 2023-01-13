import styles from './index.module.css'
import landscape from '../../public/landscape.jpg'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';


export default function EnrollmentPage() {
    return (
        < div className={styles.wrapper} >
            <ParallaxLayout
                pages={1.75}
                offset1={0}
                speed1={0.5}
                factor1={1}
                offset2={0.25}
                speed2={1}
                factor2={2}
                url={landscape}
            >
                <div className={styles.scrollbg}>
                    <p className={styles.para1}>
                        Please fill out the following two forms and email them to preschool@fhlschool.org.
                    </p>
                    <iframe
                        src="https://drive.google.com/file/d/1oCIITf_-EuN22PoTbvdeqKA1ePNF_Lqi/view"
                        height="100%"
                        width="100%"
                    ></iframe>
                    <iframe
                        src="https://drive.google.com/file/d/14nin4xx5IpaAjjRucPyvuuijDwNnjAyM/view"
                        height="100%"
                        width="100%"
                    ></iframe>
                    <p>
                        Thank you!
                    </p>
                </div>
            </ParallaxLayout>
        </div >
    );
}
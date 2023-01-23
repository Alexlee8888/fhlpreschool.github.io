import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <p className={styles.schoolName}> Faith Hope & Love Preschool </p>
            <div className={styles.otherInfo}>
                <p> Email:  <a className={styles.link} href="mailto:preschool@fhlschool.org?body=">preschool@fhlschool.org</a> </p>
                <p> Phone Number: (408)963-8890 </p>
                <p> 6350 Rainbow Dr, San Jose, CA 95129 </p>
                <a className={styles.link}
                    href='https://www.google.com/maps/place/Faith+Hope+%26+Love+Preschool/@37.3009413,-122.0167985,20.48z/data=!4m5!3m4!1s0x8559ff76a6e27307:0xac1a5a61f441a34!8m2!3d37.3009085!4d-122.0165776?coh=164777&entry=tt&shorturl=1'
                    target="_blank"
                    rel="noreferrer">
                    View Map </a>
            </div>
        </footer>
    );
}
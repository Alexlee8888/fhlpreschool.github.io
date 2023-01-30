// domain.com/our-philosophy
import styles from './index.module.css'
import landscape from '../../public/landscape.jpg'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import NavBar from '../../components/layout/NavigationBar';
import Footer from '../../components/layout/Footer';


export default function OurPhilosophyPage() {
    return (
        <div className={styles.wrapper}>
            <ParallaxLayout
                pages={2}
                offset1={0}
                speed1={0.5}
                factor1={1}
                offset2={0.25}
                speed2={1}
                factor2={2}
                url={landscape}
            >

                <div className={styles.scrollbg}>
                    <p className={styles.para1}> Our <span className={styles.ub}> commitment</span>  is to provide Biblical based
                        learning experiences that will nurture the children to their full intellectual,
                        physical, emotional and spiritual potentials. The daily curriculum focuses on
                        developing the children&apos;s learning skills and a Christian value based character
                        with the emphasis on integrity, generosity, humility, wisdom, empathy, and leadership.
                    </p>

                    <br />
                    <br />

                    <p className={styles.title}>
                        <strong>We provide following learning environment to help the children to reach their full potential: </strong>
                    </p>

                    <br />

                    <ul className={styles.bullets}>
                        <li> Promoting curiosity and exploration to enjoy the learning experience </li>
                        <li> Encouraging problem solving skills and various ways to express creativity</li>
                        <li> Discovering satisfaction in learning new skills and accomplishing tasks </li>
                        <li> Understanding God&apos;s encompassing love and how to share with others </li>
                        <li> Establishing personal hygiene and healthy habits </li>
                        <li> Caring for nature and our planet </li>
                        <li> Facilitating learning with high quality learning materials </li>
                        <li> Dedicated teachers who tend to each child&apos;s interests and need</li>
                        <li> Open environment to enhance children&apos;s communication skills in self-expression or group projects</li>
                    </ul>

                    <br />
                    <br />

                    <p className={styles.title}>
                        <span className={styles.ub}> Our Bilingual Philosophy </span>
                    </p>

                    <br />

                    <p className={styles.para2}>
                        As this world we live in continues to blend and interact,
                        we believe that increasing interaction and socialization in
                        a bilingual setting will aid in the blending of different cultures.
                        At Faith Hope and Love Preschool, we aim to promote the learning of
                        Chinese and English languages and cultures. Through time, students will
                        be familiar with both languages and utilize both to communicate
                        with other students in the classroom. Students who are unfamiliar
                        with Chinese or English will learn through communication and close contact
                        with teachers, and other children who are fluently bilingual. Children that
                        are already comfortable with both languages will be able to act as an in
                        between with children that are more comfortable with one language. A true
                        understanding of both languages comes through a combination of language fluency
                        as well as cultural understanding.
                    </p>
                </div>
                <Footer />
            </ParallaxLayout>
        </div>
    );
}
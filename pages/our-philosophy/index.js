// domain.com/our-philosophy
import styles from './index.module.css'
import bg from '../../public/philosophy.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import NavBar from '../../components/layout/NavigationBar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import Head from 'next/head';


export default function OurPhilosophyPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blank}>

            </div>
            <Head>
                <title>Our Philosophy - Faith Hope & Love Preschool</title>
                <meta name='description' content="Our school's philosophy and what we do to help your children reach their full potential" />
                <meta property='og:title' content='Our Philosophy - Faith Hope & Love Preschool' />
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
                    <li> &nbsp;Promoting curiosity and exploration to enjoy the learning experience </li>
                    <li> &nbsp;Encouraging problem solving skills and various ways to express creativity</li>
                    <li> &nbsp;Discovering satisfaction in learning new skills and accomplishing tasks </li>
                    <li> &nbsp;Understanding God&apos;s encompassing love and how to share with others </li>
                    <li> &nbsp;Establishing personal hygiene and healthy habits </li>
                    <li> &nbsp;Caring for nature and our planet </li>
                    <li> &nbsp;Facilitating learning with high quality learning materials </li>
                    <li> &nbsp;Dedicated teachers who tend to each child&apos;s interests and need</li>
                    <li> &nbsp;Open environment to enhance children&apos;s communication skills in self-expression or group projects</li>
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
        </div>
    );
}
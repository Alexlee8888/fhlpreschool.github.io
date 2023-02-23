import styles from './index.module.css';
import bg from '../../public/Curriculum.png'
import ParallaxLayout from '../../components/parallax/ParallaxLayout';
import Footer from '../../components/layout/Footer';

export default function CurriculumPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.scrollbg}>

                <p id="med1" className={styles.para1}>
                    Faith Hope and Love Preschool program is designed
                    for children 2 - 6 years old. Our program promotes
                    learning through socialization and engaging activities
                    to allow children to work together and learn from each
                    other. Our goal is to provide a safe and nurturing
                    environment and to encompass all aspects of learning
                    to help our children to learn and grow into well rounded individuals.
                </p>

                <br />
                <br />

                <p id="big2" className={styles.title}>
                    Our curriculum activities include:
                </p>

                <br />

                <ul id="small3" className={styles.bullets}>
                    <li> <strong> Small class size and low student-teacher ratio (6:1),
                        which encourages student engagement</strong></li>
                    <li>
                        Daily Chinese and English circle time
                    </li>
                    <li>
                        Art, music and movement activities
                    </li>
                    <li>
                        Activities for developing gross motor and fine motor skills
                    </li>
                    <li>
                        Nurturing environment for developing social skills with peers and adults
                    </li>
                    <li>
                        Introduction to basic counting, writing, and recognizing and counting numerals
                    </li>
                    <li>
                        Introduction to simple words in both Chinese and English languages
                    </li>
                    <li>
                        Introduction of days of the week
                    </li>
                    <li>
                        Different monthly themes
                    </li>
                    <li>
                        Story time
                    </li>
                    <li>
                        Other indoor activities
                    </li>
                </ul>

                <br />
                <br />

                <p id="med4" className={styles.para2}>
                    At our school, the curriculum is carefully crafted with
                    a mix of Montessori, Froebel, and Reggio. Our goal is
                    to introduce children to many types of activities so
                    they are able to pick and choose their own interests,
                    building their confidence and personality as an individual,
                    as well as strengthen their relationship and knowledge
                    about the love of God.
                </p>

                <br />
                <br />

                <p id="big5" className={styles.title}>
                    We aim to encourage the child&apos;s growth in following major areas:
                </p>

                <br />

                <ul id="small6" className={styles.bullets}>
                    <li>
                        Social and Emotional development – help the child to deal with
                        circumstances and others in a positive, helpful, and constructive way
                    </li>
                    <li>
                        Intellectual development – help the child to discover the
                        satisfaction in accomplishing meaningful tasks and learning new skills
                    </li>
                    <li>
                        Spiritual development – help the child to understand God&apos;s encompassing love
                    </li>
                    <li>
                        Physical development – help the child to understand nature and
                        to care for the world we live in.
                    </li>

                </ul>

                <br />
                <br />

                <p id="big7" className={styles.title}>
                    Outdoor Play
                </p>

                <br />

                <p id="med8" className={styles.para3}>
                    Faith Hope & Love Preschool is blessed with a <strong>very large campus </strong>
                    and spacious play area, with a <strong>varieties of play structures </strong> and
                    <strong> outdoor activities </strong> that are set up for the children to play and
                    explore. This area serves as a place for the children to learn
                    and engage the world around them while also serves as a place
                    to relax. Having fun and running around will allow the children
                    to communicate their feelings and learn social behaviors with
                    their peers. The playground is the place where they will learn
                    many important life lessons and values of sharing, empathy, kindness etc.
                </p>
            </div>
        </div>
    );
}
// domain.com/our-philosophy
import styles from './index.module.css'

import bg from '../../public/backgroundImage.jpg'
import BackgroundImage from '../../components/background-image/BackgroundImage';


export default function OurPhilosophyPage() {
    return (
        <div className={styles.wrapper}>
            <BackgroundImage url={bg}>
                <div className={styles.scrollbg}>
                    <h3 className={styles.test}> Our commitment is to provide Biblical based
                        learning experiences that will nurture the children to their full intellectual
                        , physical, emotional and spiritual potentials. The daily curriculum focuses on
                        developing the children’s learning skills and a Christian value based character
                        with the emphasis on integrity, generosity, humility, wisdom, empathy, and leadership.
                    </h3>
                </div>

            </BackgroundImage>

        </div>



    );
}
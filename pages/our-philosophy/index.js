// doman.com/our-philosophy
import dynamic from 'next/dynamic'
import styles from './index.module.css'


const BackgroundImage = dynamic(() => import ("../../public/BackgroundImage"));
const backgroundImage = 'https://media.istockphoto.com/id/1353553203/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?b=1&s=170667a&w=0&k=20&c=-jvR1WDwcloLXRgRTGeyG3frvrhPIbegdemeL6vY2Pk=';

export default function OurPhilosophyPage() {
    return (
        <div className={styles.fixedbgi}>
            <BackgroundImage/>

        </div>

    );
}
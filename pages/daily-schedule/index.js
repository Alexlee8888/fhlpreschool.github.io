import Image from 'next/image';
import schedule from '../../public/schedule.png';
import styles from './index.module.css';

export default function DailySchedulePage() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Image
                src={schedule}
                alt="Schedule"
                className={styles.center}
            />
        </div>
    );
}
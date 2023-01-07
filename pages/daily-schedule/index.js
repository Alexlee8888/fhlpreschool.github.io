import Image from 'next/image';
import schedule from '../../public/schedule.png';
import schedulelogo from '../../public/scheduleBI.png';
import styles from './index.module.css';

export default function DailySchedulePage() {
    return (
        <div className={styles.container}>  
            <div className={styles.body}>
                <Image
                    src = {schedule}
                    alt = "Schedule"
                />
            </div>
        </div>
    );
}
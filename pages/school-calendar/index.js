import Image from 'next/image'
import calendar from '../../public/calendar.png'
import styles from './index.modules.css'
export default function SchoolCalendarPage () {
    return (
        <div className={styles.center}> 
            <Image
                src = {calendar}
                alt = "Calendar"
            />
        </div>
    );
}
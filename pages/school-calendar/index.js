import Image from 'next/image'
import calendar from '../../public/calendar.png'
import styles from './index.module.css'
export default function SchoolCalendarPage () {
    return (
        <div> 
            <Image
                src = {calendar}
                alt = "Calendar"
            />
        </div>
    );
}
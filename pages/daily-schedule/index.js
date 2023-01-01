import Image from 'next/image';
import schedule from '../../public/schedule.png';
//import styles from './pages/daily-schedule/dailyschedule.css';

export default function DailySchedulePage() {
    return (
        <div> 
        <Image
            src = {schedule}
            alt = "Schedule"
            width = "885px"
            height = "425px"
        /> 
        </div>
    );
}
import Image from 'next/image';
import schedule from '../../public/schedule.png';
import schedulelogo from '../../public/schedulelogo.png';
import styles from './index.module.css';

export default function DailySchedulePage() {
    return (
        <div className = {styles.center}>
        
        <Image
        //header part (not valid image why?????)
            src = {schedulelogo}
            alt = "Schedule Logo"
            width = "885px"
            height = "425px"
        />
        <Image
            src = {schedule}
            alt = "Schedule"
            width = "885px"
            height = "425px"
        /> 
        </div>
    );
}
import Image from 'next/image';
import schedule from '../../public/schedule.png';
import schedulelogo from '../../public/scheduleBI.png';
import styles from './index.module.css';

export default function DailySchedulePage() {
    return (
        <div>
            
                
            <Image
                src = {schedule}
                alt = "Schedule"
                style='height: auto; width: 100%; object-fit: contain'
            />
        </div>
    );
}
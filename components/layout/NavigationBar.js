import Link from 'next/link';
import styles from './NavigationBar.module.css';
import Image from 'next/image';

export default function NavigationBar() {
    return(
        <header className= {styles.header}>
            <div className = {styles.logo}> 
                <Link href = '/'> 
                    Faith Hope & Love Preschool
                </Link>
            </div>
            <nav className = {styles.nav}>
                <ul>
                    <li> <Link href = '/'> Home </Link></li>
                    <li> <Link href = '/our-philosophy'> Our Philosophy </Link></li>
                    <li> <Link href = '/curriculum'> Curriculum </Link></li>
                    <li> <Link href = '/daily-schedule'> Daily Schedule </Link></li>
                    <li> <Link href = '/school-calendar'> School Calendar </Link></li>
                    <li> <Link href = '/enrollment'> Enrollment </Link></li>
                    <li> <Link href = '/contact-us'> Contact Us </Link></li>
                </ul>
            </nav>
        </header>
    );
}
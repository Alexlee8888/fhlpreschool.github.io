// import Link from 'next/link';
// import styles from './NavigationBar.module.css';

// export default function NavigationBar() {
//     return(
//         <header className= {styles.header}>
//             <div className = {styles.logo}> 
//                 <Link href = '/'> 
//                     Faith Hope & Love Preschool
//                 </Link>
//             </div>
//             <nav className = {styles.nav}>
//                 <ul>
//                     <li> <Link href = '/'> Home </Link></li>
//                     <li> <Link href = '/our-philosophy'> Our Philosophy </Link></li>
//                     <li> <Link href = '/curriculum'> Curriculum </Link></li>
//                     <li> <Link href = '/daily-schedule'> Daily Schedule </Link></li>
//                     <li> <Link href = '/school-calendar'> School Calendar </Link></li>
//                     <li> <Link href = '/enrollment'> Enrollment </Link></li>
//                     <li> <Link href = '/contact-us'> Contact Us </Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from './NavigationBar.module.css';


const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Our Philosophy", href: "/our-philosophy" },
  { text: "Curriculum", href: "/curriculum" },
  { text: "Daily Schedule", href: "/daily-schedule" },
  { text: "School Calendar", href: "/school-calendar" },
  { text: "Enrollment", href: "/enrollment" },
  { text: "Contact Us", href: "/contact-us" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.link}>
            Faith Hope & Love Preschool
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? styles.nav__menuList.active : styles.nav__menuList}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
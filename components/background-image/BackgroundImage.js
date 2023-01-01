import Image from 'next/image';
import styles from './BackgroundImage.module.css'

export default function BackgroundImage(props) {
    return (
        <div>
            <Image className={styles.fixedbgi}
                src={props.url}
                alt="backgroundImage"
                width="0"
                height="0"
            />

            <main>
                {props.children}
            </main>
        </div>


    );
}
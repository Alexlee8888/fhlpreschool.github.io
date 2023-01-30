import NavigationBar from './NavigationBar';
import styles from './Layout.module.css';

export default function Layout(props) {
    return (
        <div>
            <NavigationBar />
            {/* <ChakraProvider className={styles.main}> */}
                <main className={styles.main}>
                    {props.children}
                </main>
            {/* </ChakraProvider> */}
        </div>
    );
}
import NavigationBar from './NavigationBar';
import styles from './Layout.module.css';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <>
            <NavigationBar />
            <div>
                {/* <ChakraProvider className={styles.main}> */}
                <main className={styles.main}>
                    {props.children}
                </main>
                {/* </ChakraProvider> */}
            </div>
            <Footer />
        </>

    );
}
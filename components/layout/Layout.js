import NavigationBar from './NavigationBar';
import styles from './Layout.module.css';
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <main className={styles.main}>
                {props.children}
            </main>
            <NavigationBar />
            <Footer />
        </div>
    );
}
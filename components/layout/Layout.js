import NavigationBar from './NavigationBar';
import styles from './Layout.module.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <NavigationBar />
            {/* <ChakraProvider> */}
                <main className={styles.main}>
                    {props.children}
                </main>
            {/* </ChakraProvider> */}
            <Footer />
        </div>
    );
}
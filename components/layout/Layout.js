import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';

export default function Layout(props) {
    return (
        <div>
            <NavigationBar />
            <ChakraProvider>
                {props.children}
            </ChakraProvider>
            <Footer />
        </div>

    );
}
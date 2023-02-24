import NavigationBar from './NavigationBar';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div>
            <NavigationBar />
            {props.children}
            <Footer />
        </div>

    );
}
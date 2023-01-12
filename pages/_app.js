import styles from '../styles/globals.css'
import Layout from '../components/layout/Layout';

import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider scrollAxis='vertical'>
        <Layout />
        <Component {...pageProps} />
      </ParallaxProvider>
    </>





  );
}

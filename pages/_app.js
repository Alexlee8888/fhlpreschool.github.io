// import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/dist/jquery.slim.js';
// import 'popper.js/dist/umd/popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../styles/globals.css'
import Layout from '../components/layout/Layout';

import Head from "next/head";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Layout/>
      <Component {...pageProps} />
    </ParallaxProvider>




  );
}

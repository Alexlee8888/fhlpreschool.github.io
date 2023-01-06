// import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery/dist/jquery.slim.js';
// import 'popper.js/dist/umd/popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../styles/globals.css'
import Layout from '../components/layout/Layout';

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout/>
      <Component {...pageProps} />
    </>




  );
}

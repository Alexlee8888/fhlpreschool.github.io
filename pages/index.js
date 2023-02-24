import styles from './index.module.css';
import Footer from '../components/layout/Footer';
import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import bg from '../public/FHLHomePage.png'



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function HomePage() {
  return (
    <div className={styles.bgc}>
      <Image
        src={bg}
        className={styles.noclick}
        layout='responsive'
      />
      <div className={styles.container}>
        <div className={styles.paragraph}>
          <p className={styles.big}>
            <strong>Welcome to Faith Hope Love preschool where
              children are loved, encouraged and nurtured to reach their full intellectual,
              emotional, spiritual, and physical potentials.</strong>
            <br />
            <br />
          </p>
        </div>
      </div>
      <div>
        <p className={styles.verse}>
          Train up a child in the way he should go: and when he is old, he will not depart from it.
          <br />
          Proverbs 22:6
          <br />
          <br />
        </p>
      </div>
      <div className={styles.videobg}>
        <div className={styles.video}>
          <iframe width="951" height="535" src="https://www.youtube.com/embed/15lzFgt7cig" title="FHL Preschool Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className={styles.carobg}>
        <div className={styles.carousel}>
          <Carousel responsive={responsive}>
            <div><img src="https://lh5.googleusercontent.com/w3VdlfeiI2ieyB7x6feksrR89ZY6IaxtqE4psZofZTwwHP_W6Kp9QymkHYty6u1veEQ=w2400" alt="image0" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh3.googleusercontent.com/HlY2koN198S0ziHbiL8VsMU8AeQGeKg_SG3vGVQrp-6iJDX1pdtXHxcdOtLnjPnqhI8=w2400" alt="image1" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh3.googleusercontent.com/DVgxx3v0OTaB5dOO2Wh-PeyfRHw2lUUJfR8KkyAnEdCKvalgr3apmmVPx_EUfg54HKE=w2400" alt="image2" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh5.googleusercontent.com/IG-7lv_u7dOknq_dq7jzIZ--kOr8u3VNhYgbL85eEzjpAKsFHq4HTX2htLgOTvHIOb0=w2400" alt="image3" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh5.googleusercontent.com/IrHXzM2evGuQliSYvjb-GQcfprpRJHw6HBScQMDPXov6CGMM9tYaERYNJWPQGn_KevA=w2400" alt="image4" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh3.googleusercontent.com/xXontd-GJ_T2cnm4uGw9o6jQUqKE92kcMKz_lIC0-N310RChnEIryTHZqEHcYazcPG8=w2400" alt="image5" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh6.googleusercontent.com/xti5n0I9epIgJeMUOLYcUAnNV4Vu-r5SS-Lcu_BHKulgYwkH8TsW0EFA6-yD9nzJyms=w2400" alt="image6" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh3.googleusercontent.com/zLGVjbKVjU_0aV8URhN60HgT7CcF9_hnP-1PtrzwtpTVClUNJG0AFCfRprCeioJibHE=w2400" alt="image7" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh5.googleusercontent.com/_C8-rBQS5GREs3I115TObb34KNoZj8eEjZXhs_NnVGc_5qMe2y935YLJGpryEFp3hZU=w2400" alt="image8" className={styles.image} draggable="false"></img></div>
            <div><img src="https://lh4.googleusercontent.com/F49D7YjOkWJ3LZKYTiIADMCTBtgHg83Uv4AixYnJ-SCR_LSQTcsyQDlFj0ckx8WrDFk=w2400" alt="image9" className={styles.image} draggable="false"></img></div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
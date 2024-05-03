import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Pricelist from '../../component/section-pages/pricelist-1';
import Section1 from '../../component/section-pages/section-1';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

import Reviews from '../../component/section-pages/CustomerReviews';
import image1 from "../../public/img/covers/1.webp";
const image2 ="../../img/background/subheader-game.webp";
import image3 from '../../public/img/icons/beauty.png';
import image4 from '../../public/img/icons/kind.png';
import image5 from '../../public/img/icons/spotify.png';
import image6 from '../../public/img/icons/unique.png';
const GlobalStyles = createGlobalStyle`

`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>
    <Head>
      <title>Your Birthday Gift</title>
      <link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
      <div className="de-gradient-edge-bottom"></div>
      <section className="no-bg">
        <div className="container z-1000">
              <div className="row gx-5 align-items-center">
                  <div className="col-lg-2 d-lg-block d-none">
                      <Image src={image1} className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle wow fadeInUp mb-3">Siapa mba cantik?</div>
                      <h2 className="mb-0">Mencoba <br />Mengenal</h2>
                      <div className="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                          ini sejauh yang <strong>saya tauu</strong> yaaa wkwk.
                      </div>
                  </div>      
              </div>
          </div>
      </section>
      </Parallax>

      {/* section */}
      <section className="no-top">
        <section>
        <div className="container">
              <div className="row align-items-center gh-5">
                  <div className="col-lg-6 position-relative">
                      <div className="images-deco-1">
                          <Image src={image3} className="d-img-1" alt=""/>
                          <Image src={image3} className="d-img-2" alt=""/>
                          <div className="d-img-3 bg-color"></div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle mb20">Penjelasan Singkat</div>
                      <h2 >Maulina Nur <br />Laili</h2>
                      <ul className="d-list">
                        <li>Lahir di Malang, 9 Mei 2003</li>
                        <li>Putra dari Bapak dan Ibu</li>
                        <li>Status Mahasiswi</li>
                        <li>24/7 Customer Support</li>
                      </ul>
                      <p >Lorem ipsum ea ut magna nisi amet reprehenderit eu 
                      adipisicing nisi incididunt est sint fugiat deserunt tempor ea culpa nostrud 
                      commodo deserunt et do ullamco non tempor veniam id culpa mollit veniam ut
                      non adipisicing ad commodo laborum esse do sunt in cillum irure incididunt 
                      officia quis ut.
                      </p>
                      <div className="year-card ">
                          <h1><span className="id-color">25</span></h1>
                          <div className="atr-desc">Years<br/>Experience<br/>Hosting</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </section>

      {/* section */}
      <section className="no-top">
      <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="subtitle mb-3">Tentang Kamu</div>
                    <h2 className="mb20">Gimana sih<br /> Mba Cantik itu?</h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" >
                    <div>
                        <Image src={image3} className="mb20" alt="" width={100} height={100}/>
                        <h4>Cantik</h4>
                        <p>Panggilannya aja mba cantik, uda pasti cantikk la wkwkwk...Tapi emang bener sih bahkan banya bilang lek kamu emang cantik. Bahkan kakel ae tau kamu dulu SMA :v</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image4} className="mb20" alt="" width={100} height={100}/>
                        <h4>Baik</h4>
                        <p>Mba cantik iku baik, meskipun banyak seng ngomong kamu dingin :v sebener e kamu iku peduli dan perhatian nang orang di sekitare mba cantik.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image5} className="mb20" alt="" width={100} height={100}/>
                        <h4>Suka Musik</h4>
                        <p>Wkwkwkwk Spotify berjalan lek kata temen-temenmu. Bener se emang, kagu apa seng kamu gatau i wkwk ngerii 😭.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image6} className="mb20" alt="" width={100} height={100}/>
                        <h4>Unik</h4>
                        <p>Mba cantik iku lucu wkwk.. gengsian juga kadang wkwkwk, tapi tingkah e ambe ngomonge lek guyon atau mencoba sweet iku lucu, beda dari yang lain. Kaya bintang di antara lingkaran kuwi</p>
                    </div>
                </div>

            </div>
        </div>
      </section>
      <section className="no-top">
        <Reviews/>
      </section>
      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

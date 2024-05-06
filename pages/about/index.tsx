import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Reviews from '../../component/section-pages/CustomerReviews';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="../../img/ourlove.jpg";
import image2 from "../../public/img/about.jpg";
import image3 from "../../public/img/misc/girl-ai.webp";
import image4 from "../../public/img/myphoto.jpg";
import image5 from "../../public/img/team/3.webp";
import image6 from "../../public/img/team/4.webp";

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
      <title>Playhost - Game Hosting Website Template</title>
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

      {/* section */}
      <Parallax className="" bgImage={image1} strength={5}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="subtitle  mb-3">About this Website</div>
                  </div>
                  <div className="col-lg-6">
                      <h2 className=" mb20" data-wow-delay=".2s">This is the story</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
              <div className="row align-items-center gh-5">
                  <div className="col-lg-6 position-relative">
                      <div className="images-deco-1">
                          <Image src={image2} className="d-img-1" alt="" />
                          <div className="d-img-3 bg-color"></div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle mb20">Latar Belakang</div>
                      <h2 >Ngarang dikit</h2>
                      <p >
                        Aku iku suka kamu banyak banyak wkwk.. Jadi aku pingin bikin kamu seneng dan terkesan. Aku bikin iki, karena iki sesuatu yang mungkin bisa tak lakukan tapi ga banyak orang yang bisa, yo lek TI mungkin ini hal biasa, tapi aku yakin iki uduk hal yang biasa diberikan ke orang lain sebagai hadiah. Selain iku, lek bikin sendiri kan aku lebih banyak effort e wkwkwk. Aku juga pin ngasih hadiah dimana hadiah e iku bisa bertahan lama, nahh web iki bisa kamu bukak sampe kapanpun selama server e ga tutup wkwkwk.. Makane aku bikin iki dengan pertimbangan-pertimbangan tadi kuwi. Aku berharap kamu suka., lof u sayang.. Happy birthday🎉
                      </p>
                      <div className="year-card ">
                          <div className="atr-desc">Ulang Tahun<br/> Ke-</div>
                          <h1><span className="id-color">21</span></h1>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row gx-5">
                        <div className="subtitle mb20 text-center">Proses Pembuatan</div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Kemudahan</h4>
                            <p>Karena aku seneng bikin iki ge kamu, jadi rasane ga sulit wkwk.. Meskipun iki project pertamaku dengan strutur yang beda tapi alhamdulllah tibake iso wkwk.. Oiyoo survey seng tak masukno kuwi kan tekan teman-teman Alhamdulillah mereka juga tanggap dan mau bantu aku ngisi konten nde web iki wkwk.. Untuk masala foto juga banyak fotomu wkwk.. jadi makasii dah ngirimin asset e wkwk</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Kesulitan</h4>
                            <p>Jujur aja ga banyak kesulitan seng ada ge bikin iki, lek disuruh nyebutin ada se tapi.. wkwk. Seng pertama iku jelas masala waktu, kamu tau sendiri waktuku nganggur i dikit dan aku saiki wes gaiso melekan maneh koyok biyen, jadii ya aku ngerjain iki kurang lebih iku 2 bulanan wkwk.. Terus yang bikin aku lama juga iku mikirin is konten e mau tak isi apa.. terus mungkin yo ada ae error e karena iku framework baru ge aku, pertama iki wkwk ya wajar se lek se nemuin error..yaa iitu aja se yang wkwk.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-6">
                  <div className="subtitle mb20">Pembuat</div>
                  <h2 className="mb20 wow fadeInUp">Behind the scene</h2>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="#"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src={image4} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Muhammad Syiham Alfaruq</h4>
                      Your love (maybe :v)
                  </div>
              </div>

          </div>
        </div>
      </section>

      {/* section */}
      {/* <section className="no-top">
       <div className="container">
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color" >15425</h3>
                        <h4 className="text-uppercase">Happy<br/>Gamers</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">8745</h3>
                        <h4 className="text-uppercase">Servers<br/>Ordered</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color">235</h3>
                        <h4 className="text-uppercase">Awards<br/>Winning</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">15</h3>
                        <h4 className="text-uppercase">Years<br/>Experience</h4>
                    </div>
                </div>
            </div>
        </div>
      </section> */}

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

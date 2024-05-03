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

const image1 ="../../img/background/subheader-about.webp";
import image2 from "../../public/img/misc/building.webp";
import image3 from "../../public/img/misc/girl-ai.webp";
import image4 from "../../public/img/team/1.webp";
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
      <title>Your birthday gift</title>
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
                  <div className="col-lg-6">
                      <h2 className=" mb20" data-wow-delay=".2s">Happy Birthday Mba Cantik</h2>
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
                          <Image src={image2} className="d-img-1" alt=""/>
                          <Image src={image3} className="d-img-2" alt=""/>
                          <div className="d-img-3 bg-color"></div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle mb20">We are Playhost</div>
                      <h2 >The beginning</h2>
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
      <Parallax className="" bgImage={image1} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg">
        <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-md-6">
                            <h4>Harapan</h4>
                            <p style={{color:'blueviolet'}}>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Dolor ad amet sed aliqua ad nisi anim fugiat dolor labore ex non amet id mollit amet id magna elit fugiat voluptate aliquip in est quis aliquip aliqua eu. Lorem ipsum irure sed nisi id aute exercitation fugiat.</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Doa</h4>
                            <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat. Ut excepteur deserunt labore exercitation commodo exercitation minim aliquip in aliqua deserunt nulla aliquip officia ut eiusmod irure ullamco sunt sunt velit dolor ex. Enim eu proident in non officia culpa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Parallax>
      <section className="no-bottom">
      <div className="container">
            <div className="row align-items-center gx-5">
                <div className="col-lg-6">
                    <Image height={400} width={400} src={image1} className="img-fluid mb-sm-30" alt=""/>
                </div>

                <div className="col-lg-6">
                    <div className="subtitle  mb-3">Keunggulan</div>
                    <h2 className=""><span className="text-gradient">Kenapa?</span> harus buka website ini.</h2>
                    <p className="">Karena ini bentuk website, jadi mba cantik bisa akses dimana pun mba cantik berada. Tapi ya harus ada sinyal :v Lalu kenapa kok harus buka website ini? yaiyalah harus dibuka, masa dibuatin ga dibuka 🤣. Wkwkwkw bercandaa yaa... Ada satu lagi keunggulan, yakni website ini bisa saya update ke server kapanpun tanpa upload ulang, karena sudah terhubung antara server dengan file di laptop saya.</p>

                </div>
            </div>
        </div>
      </section>
      {/* section */}
      <section className="no-top">
        <div className="container">

        </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-3">
                  <div className="subtitle mb20">Our solid team</div>
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

                      <h4>Robyn Peel</h4>
                      CEO Founder
                  </div>
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
                          <Image src={image5} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Anna Shepard</h4>
                      Director
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src={image6} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Fynley Wilkinson</h4>
                      Developer
                  </div>
              </div>

          </div>
        </div>
      </section>



      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

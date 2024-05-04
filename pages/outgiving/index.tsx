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

const image1 ="../../img/background/subheader-game.webp";
const image7="../../img/figure.png";
import image2 from "../../public/img/work.png";
import image4 from "../../public/img/team/1.webp";
import image5 from "../../public/img/team/3.webp";
import image6 from "../../public/img/team/4.webp";
const image3 ="../../img/background/hero1.jpg";
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
      <Parallax className="" bgImage={image3} strength={5}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className=" mb20 mt50" data-wow-delay=".2s">Happy Birthday Mba Cantik</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}

      <section>
       <div className="container position-relative no-bottom">
            <div className="row">
                <div className="col-lg-12">
                    <Parallax className="p-0" bgImage={image1} strength={300}>  
                    <div className="padding60 sm-padding40 sm-p-2 position-relative">
                        
                        <div className="row z-1">
                            <div className="col-lg-6">
                            <div className="year-card ">
                                <h2 className="atr-desc">Selamat Ulang Tahun Ke-</h2>
                                <h1><span className="id-color">21</span> </h1>
                            </div>
                            </div>
                        </div>
                        <br /> <br />
                    </div> 
                    </Parallax>
                    <Image src={image7} className="sm-hide position-absolute avatar px-2" height={400} width={400} alt=""/>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="container no-top">
              <div className="row align-items-center gh-5">
                  <div className="col-lg-6">
                      <div className="subtitle mb20">For You</div>
                      <h2 >Selamat Ulang Tahun</h2>
                      <p >
                        HBD Mba Cantik...🎉🎉 disini aku pin ngucapin terimakasih dulu buat mba cantk karena sek mau mbe aku wkwkwk, jangan pernah bosan mbe aku yoo wkwk.. Aku berharap apa yang mba cantik inginkan bisa terwujud dengan lancar. Mba cantik dah besar sekarang, dah 21 tahun, aku yakin masalah yang datang juga tidak semakin mudah tapi semakin susah to wkwk.. Tapii kamu bisa, kamu harus tamba dewasa, tamba semangat nek lapopo, berdoa seng tenanan, dan jangan lupa semua iku juga ge bapak ibuk.
                        <br />Oiya kamu dah utiwi skripsi, jadi harus lebih semangat lagi lek lapopo, ben ndang lulus to wkwkwk. Aku ada kok lek kamu butuh curhat, cerita, atau mau minta saran gitu. Ngomongo yooo nek ke gituuu wkwkwk.. Tapi masalah lain pun juga mau aku mendengarkan kok. jangan lupaaa aku ki cowomuu wkwk, aku sayang kamu. Jadi aku mau berusaha semaksimal mungkin sesuai kemampuanku ge kamuu wkwk.
                        <br />Terus ayo sama sama berdoa mugo-mugo kamu diparingi sehat, dadi anak seng sholihah, iso mbanggakno bapk mbe ibuk, dan apapun yang mba cantik inginkan dan baik ge mba cantik bisa terwujud.. 
                        <br />Aku minta maap yoo, karena aku ga ngasih barang fisik nang kamu. Tapi iki buatanku sendiri kok wkwkw.. maane banyak kurang e jadii maap yoo..
                        <br />Jangan nakal yooo wkwk.. seng pinter, semangat juga.. Lof uuu ❤❤, miss u juga se wkwkwk
                      </p>
                  </div>
                  <div className="col-lg-6 position-relative">
                      <div className="images-deco-1">
                          <Image src={image2} className="d-img-1" alt="" />
                          <div className="d-img-3 bg-color"></div>
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

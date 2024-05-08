import React from 'react';
import Link from 'next/link'; 
import { Parallax } from "react-parallax";
import Image from 'next/image';

import image1 from '../../public/img/gallery/gallery1.jpg';
import image2 from '../../public/img/gallery/gallery2.jpg';
import image3 from '../../public/img/gallery/gallery3.jpg';
import image4 from '../../public/img/gallery/gallery4.jpg';
import image5 from '../../public/img/gallery/gallery9.jpg';
import image6 from '../../public/img/gallery/gallery6.jpg';
import image7 from '../../public/img/gallery/gallery8.jpg';
import image8 from '../../public/img/gallery/gallery7.jpg';
import image9 from '../../public/img/gallery/gallery10.jpg';

const collection = () => {
    return(
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <div className="subtitle mb20">Gallery</div>
                  <h4 className="wow fadeInUp">Your Photos</h4>
                  <div className="spacer-20"></div>
              </div>
            </div>
            <div className="row g-4 sequence justify-content-center">

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            Imut
                        </div>
                        <div className="d-text">
                            <h4>❤❤</h4>
                            <p className="d-price">Sama<br /><span className="price">love u too :v</span></p>
                        </div>
                    </div>
                    <Image src={image1} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            Cantik Bangett
                        </div>
                        <div className="d-text">
                            <h4>Shining</h4>
                            <p className="d-price">Aslii <br /><span className="price">Cantik e pake banget</span></p>
                        </div>
                    </div>
                    <Image src={image2} className="img-fluid " alt=""/>
                </div>
            </div>


            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            OP
                        </div>
                        <div className="d-text">
                            <h4>Gabisa dijelasin</h4>
                            <p className="d-price"><span className="price">kudunge nambah damage</span></p>
                        </div>
                    </div>
                    <Image src={image4} className="img-fluid " alt=""/>
                </div>
            </div>


            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            Stylish
                        </div>
                        <div className="d-text">
                            <h4>📸</h4>
                            <p className="d-price">Mirror <span className="price">Selfie</span></p>
                        </div>
                    </div>
                    <Image src={image6} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            Pap
                        </div>
                        <div className="d-text">
                            <h4>Absen</h4>
                            <p className="d-price">Wkwk <span className="price">setoran hari raya</span></p>
                        </div>
                    </div>
                    <Image src={image5} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            OP juga
                        </div>
                        <div className="d-text">
                            <h4>Asli</h4>
                            <p className="d-price"><span className="price">cantik beutt wkwk</span></p>
                        </div>
                    </div>
                    <Image src={image7} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item sandbox">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            UM Banget
                        </div>
                        <div className="d-text">
                            <h4>Biru biru</h4>
                            <p className="d-price">wkwkwk <span className="price">Tapi cantik kok bu</span></p>
                        </div>
                    </div>
                    <Image src={image8} className="img-fluid" alt=""/>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                    <div className="d-label">
                            Newest
                        </div>
                        <div className="d-text">
                            <h4>Pasmina</h4>
                            <p className="d-price">wkwkwk <span className="price">pap kerudung baruu</span></p>
                        </div>
                    </div>
                    <Image src={image9} className="img-fluid " alt=""/>
                </div>
            </div>

            <div className="col-lg-6 col-md-12 gallery-item">
                <div className="de-item wow">
                    <div className="d-overlay">
                        <div className="d-label">
                            Kalem
                        </div>
                        <div className="d-text">
                            <h4>My Fav</h4>
                            <p className="d-price"><br /><span className="price">wkwkwk kek ukhti kalem gitu</span></p>
                        </div>
                    </div>
                    <Image src={image3} className="img-fluid " alt=""/>
                </div>
            </div>
            </div>

        </div>
    );
}

export default collection;
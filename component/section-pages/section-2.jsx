import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';

const image1 ='../../img/background/space.jpg';
import image2 from'../../public/img/misc/hero.png';

const Section = () => {
    return(
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <Parallax className="p-0" bgImage={image1} strength={300}>  
                    <div className="padding60 sm-padding40 sm-p-2 position-relative">
                        
                        <div className="row z-1">
                            <div className="col-lg-6">
                                <div className="subtitle mb-3">About You</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">mba cantik</h2>
                                <p className="wow fadeInUp" style={{color:'white'}}>Namamu Maulina Nur Laili wkwk dah tauu kann. Kamu iku mahasiswi S1 Teknik Sipil di Universitas Negeri Malang dah tahu juga kann wkwk. Kamu memang ga bisa mengendarai motor wkwk.. Tapi kamu ikuu mampu melakukan banyak hal sulit dalam waktu yang sama sendiri. Alay yaa wkwk.. tapi itulah kamu mahasiswi yang cantik, imut dan lucu ini wkwk</p>
                                <div className="spacer-10"></div>
                                <Link className="btn-main mb10" href="/about-you">baca lebih banyak</Link>
                            </div>
                        </div>
                        
                    </div>
                    </Parallax>
                    <Image src={image2} className="sm-hide position-absolute avatar px-2" height={500} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Section;
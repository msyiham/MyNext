import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/logo.png';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-8">
                        <Image src={image1} alt="" />
                        <div className="spacer-20"></div>
                        <p>Terimakasih sudah mengunjungi web ini wkwk.. Semoga mba cantik sukaa.. <br /> Wapyuu...</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Messages</h5>
                            <div className="spacer-10"></div>
                            <p>Jangan irii ya sama teman-teman yang dikasih hadiah fisik wkwk..</p>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>My Contact</h5>
                                <p>Meskipun dah tau se kamu wkwk</p>
                                <div className="social-icons">
                                    <Link target="_blank" href="https://www.instagram.com/_hamsyii/"><i className="fa-brands fa-instagram"></i></Link>
                                    <Link target="_blank" href="https://wa.me/6285230670806"><i className="fa-brands fa-whatsapp"></i></Link>
                                    <Link target="_blank" href="https://www.tiktok.com/@hemhemhemm"><i className="fa-brands fa-tiktok"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                           Copyright 2024 - Build with love by <b style={{color:'aquamarine'}}>Syiham</b> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;
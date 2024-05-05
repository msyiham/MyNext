import React from 'react';
import { Parallax } from "react-parallax";
import Link from 'next/link'; 
import Image from 'next/image';

const image2 ='../../img/background/space.webp';

const Download = () => {
    return(
        <div className="container">
            <div className="row position-relative">
                <div className="col-lg-12">
                    <Parallax className="padding60 sm-padding40" bgImage={image2} strength={400}> 
                        <div className="col-lg-6 ms-auto">
                            <div className="subtitle wow fadeInUp mb-3">Quotes</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Keberhasilan tidak ditentukan oleh hasil, tetapi oleh usaha.</h2>
                            <p>wkwkwk bijak dikit lah yaa....</p>                            
                        </div>
                    </Parallax>
                    <Image width="600" height="600" src="../../img/index/myphoto.png" className="max-content sm-hide position-absolute bottom-0 start-0"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Download;
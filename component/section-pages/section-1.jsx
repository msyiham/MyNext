import React from 'react';
import Image from 'next/image';

import image1 from '../../public/img/icons/gift.png';
import image2 from '../../public/img/icons/web.png';
import image3 from '../../public/img/icons/react.png';
import image4 from '../../public/img/icons/rating.png';


const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="subtitle mb-3">Penjelasan Singkat</div>
                    <h2 className="mb20">Untuk Apa<br />dan Bagaimana?</h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" >
                    <div>
                        <Image src={image1} className="mb20" alt="" width={100} height={100}/>
                        <h4>Hadiah</h4>
                        <p>Website ini merupakan kado ulang tahun mba cantik yang ke-21. Jadi sebenarnya ini bukan website yang public</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image4} className="mb20" alt="" width={100} height={100}/>
                        <h4>Mengesankan</h4>
                        <p>Dengan membuat sendiri dan merangkai konten sendiri saya berharap mba cantik terkesan dengan adanya website ini.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image2} className="mb20" alt="" width={100} height={100}/>
                        <h4>Website</h4>
                        <p>Jadi ini adalah sebuah website yang sudah dihosting dengan url maulinanur.netlify.app.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <Image src={image3} className="mb20" alt="" width={100} height={100}/>
                        <h4>React</h4>
                        <p>Jadi website ini dibangun dengan framework tampilan bernama react yang berbahasa typescript.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const image1 ="../../img/misc/web-design.png";

const server = () => {
    return(
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
    );
}

export default server;
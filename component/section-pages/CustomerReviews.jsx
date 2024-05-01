import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import image1 from"../../public/img/people/1.jpg";
import image2 from"../../public/img/people/2.jpg";
import image3 from"../../public/img/people/3.jpg";
import image4 from"../../public/img/people/4.jpg";
import image5 from"../../public/img/people/5.jpg";
import image6 from"../../public/img/people/6.jpg";
import image7 from"../../public/img/people/7.jpg";
import image8 from"../../public/img/people/8.jpg";
import Testimonial from './testimonial';

const Customerreviews = () => {
  return (
    <>
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="subtitle mb20">How my friends think about you?</div>
                    <h4 className="wow fadeInUp">nihh hasil surveynya wkwk</h4>
                    <div className="spacer-20"></div>
                </div>
            </div>
        </div>
    <Swiper className="smallslider"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      centeredSlides
      loop
      slideToClickedSlide
      >
      <SwiperSlide>
        <Testimonial maxLength={100} imageSrc={image1} author={"Hikmah"} content={"eemm mgkn kesan pertama ku ketemu lina keliatane jutek judes, tapi ternyata kalo ws kenal yo aree penakan iso nyambung apapun lek diajak ngomong tapi yo ngunu dee nada biacaranya sometimes ngegassss, tapi its okey dee ga pernah sampe bikin sakit hati kok dengan perkataanya rill lina punya banyak kelebihan menurutkuu, aree seperti spotify berjalann karna emang segampang iku deh lek tanya judul lagu apapun mostly dee eruh, dee yoo pinterr bangett diantara adewe ber5 sng paling strong menghadapi matkul perteknikan sng kyk ngunu dee iso bertahan. dee bijak banget nek mengasihi nasihat ttg apapun ng aku. si paling iling apapun sng pernah tak ceritakan meskipun iku cerita lama bangettt. sukaa banget banget pokok due konco kyk lina iki. minusnyaa apaa yaaa hampir tidak ada dehhh, yaa mgkn lebih sabar aja kalo dee ngegasss."} />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial maxLength={100} imageSrc={image2} author={"Sylla"} content={"halo sobat (E/I)NFJ ku disclaimer aku tidak WoA jadi mohon maap kalo tidak bisa berkata-kata yang bagus😔 jujur aku ga begitu inget first impression pertama kali kita ketemu😔 (maff short term memory) tapi emang uda lama banget bzirr ingetku pokok dulure sasa😔 long story short ternyata setelah berteman kita nyambung ya wak meskipun you menjengkelkan kadang-kadang tapi gapapa, kamu tuh unik seperti cecek wkwk tapi ga bohong you memang unik bjir ga nemu namu manusia unik kek dirimu ini, tapi kamu baiq ihihi maw tak ajak kemana-mana dan maw menunggu aku yang sangat ngaret ini lov besar sebesar dino.  jujurr I really like your unique personality, I think that's your strength and what makes you special, so just to be yourself, don't think about what people say about you because you are you and you should be proud of that🤍 semangat kkn mbak lenn, semangat bimbingan juga asixx sudah dapat dosbing nih bozz, jangan stress banget banget ntar jerawatmu sekebon, kalo bisa stress bersama kenapa harus stress sendiri andjay terimakasii suda menjadi member ps yang sudah bolak balik ganti nama itu yeps lope besar semoga kamu ketemu abe cekut di lawang sudah itu saja yaa baibaii👋 "} />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial maxLength={100} imageSrc={image3} author={"Nila"} content={"first impression e sebenere terlihat pendiam si tapi ternyata wow ada jiwa reog di dalamnya  trus aku merasa memiliki beberapa kesamaan sifat, kek 11 12 gitu tapi lek lina versi tercover dengan wajah yg pendiam dan seperti ibu peri ngunu ngunu o ga kenek senggol iku areke, coba senggolen la diamuk 😔 trus areke batu bgt coggg susah skali musuh batu satu ini, makane lek menghadapi jgn smsm atos harus dihadapi dgn lemah lembut ea overall areke teman yg baik meskipun smsm cegil 😔 tapi areke pemberi saran yg baik oponeh masalah relesyensip, kek ga semua iso menanggapi dgn netral gt lo lek aku cerita ttg cwoku, tapi lina iso lek tmnku yg lain terlalu memihak ng aku jd membuat cwoku terlihat salah terus. apalagi yhh bingung. suka ajh temenan sm lina sampe skarang, trims sdh mau berteman sm aku xixixi"} />
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial maxLength={100} imageSrc={image4} author={"Fikri"} content={"halo lalalina!! \n orang sumbu pendek yang sangat gampang meledak dan kakean nggibah 😭 semoga menjadi mahasiswa kesayangan pak kar forever wkwkkw"} />
      </SwiperSlide>
    </Swiper>
    </>
  );
};
export default Customerreviews;
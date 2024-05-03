import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useState } from 'react';
import image1 from"../../public/img/people/1.jpg";
import image2 from"../../public/img/people/2.jpg";
import image3 from"../../public/img/people/3.jpg";
import image4 from"../../public/img/people/4.jpg";
import image5 from"../../public/img/people/5.jpg";
import image6 from"../../public/img/people/6.jpg";
import image7 from"../../public/img/people/7.jpg";
import image8 from"../../public/img/people/8.jpg";

const Customerreviews = () => {
  const testimonials = [
    {
      content: "first impression e sebenere terlihat pendiam si tapi ternyata wow ada jiwa reog di dalamnya  trus aku merasa memiliki beberapa kesamaan sifat, kek 11 12 gitu tapi lek lina versi tercover dengan wajah yg pendiam dan seperti ibu peri ngunu ngunu o ga kenek senggol iku areke, coba senggolen la diamuk 😔 trus areke batu bgt coggg susah skali musuh batu satu ini, makane lek menghadapi jgn smsm atos harus dihadapi dgn lemah lembut ea overall areke teman yg baik meskipun smsm cegil 😔 tapi areke pemberi saran yg baik oponeh masalah relesyensip, kek ga semua iso menanggapi dgn netral gt lo lek aku cerita ttg cwoku, tapi lina iso lek tmnku yg lain terlalu memihak ng aku jd membuat cwoku terlihat salah terus. apalagi yhh bingung. suka ajh temenan sm lina sampe skarang, trims sdh mau berteman sm aku xixixi",
      imageSrc: image3,
      author: "Nila"
    },
    {
      content: "halo sobat (E/I)NFJ ku disclaimer aku tidak WoA jadi mohon maap kalo tidak bisa berkata-kata yang bagus😔 jujur aku ga begitu inget first impression pertama kali kita ketemu😔 (maff short term memory) tapi emang uda lama banget bzirr ingetku pokok dulure sasa😔 long story short ternyata setelah berteman kita nyambung ya wak meskipun you menjengkelkan kadang-kadang tapi gapapa, kamu tuh unik seperti cecek wkwk tapi ga bohong you memang unik bjir ga nemu namu manusia unik kek dirimu ini, tapi kamu baiq ihihi maw tak ajak kemana-mana dan maw menunggu aku yang sangat ngaret ini lov besar sebesar dino.  jujurr I really like your unique personality, I think that's your strength and what makes you special, so just to be yourself, don't think about what people say about you because you are you and you should be proud of that🤍 semangat kkn mbak lenn, semangat bimbingan juga asixx sudah dapat dosbing nih bozz, jangan stress banget banget ntar jerawatmu sekebon, kalo bisa stress bersama kenapa harus stress sendiri andjay terimakasii suda menjadi member ps yang sudah bolak balik ganti nama itu yeps lope besar semoga kamu ketemu abe cekut di lawang sudah itu saja yaa baibaii👋 ",
      imageSrc: image2,
      author: "Sylla"
    },
    {
      content: "eemm mgkn kesan pertama ku ketemu lina keliatane jutek judes, tapi ternyata kalo ws kenal yo aree penakan iso nyambung apapun lek diajak ngomong tapi yo ngunu dee nada biacaranya sometimes ngegassss, tapi its okey dee ga pernah sampe bikin sakit hati kok dengan perkataanya rill lina punya banyak kelebihan menurutkuu, aree seperti spotify berjalann karna emang segampang iku deh lek tanya judul lagu apapun mostly dee eruh, dee yoo pinterr bangett diantara adewe ber5 sng paling strong menghadapi matkul perteknikan sng kyk ngunu dee iso bertahan. dee bijak banget nek mengasihi nasihat ttg apapun ng aku. si paling iling apapun sng pernah tak ceritakan meskipun iku cerita lama bangettt. sukaa banget banget pokok due konco kyk lina iki. minusnyaa apaa yaaa hampir tidak ada dehhh, yaa mgkn lebih sabar aja kalo dee ngegasss. ",
      imageSrc: image2,
      author: "Hikmah"
    },
    {
      content: "Menjelaskan bagaimana mbak lina ini agaknya susah susah gampang, karena aku sudah dari kecil bersama mbak lina jadi yaa gituu perubahannya mungkin ketara banget tapi yaa mungkin ada beberapa part deep inside her aku ngga tau tapii menurutku seperti ini\nMbak lina salah satu spesies taurus cewe yang ku kenal. Sudah pasti si taurus ini keras kepala, batu, banget malah tapi yaa loyal memang orangnya, punya pendirian sendiri. Maybe yaa kalo orang liat pasti kek apasi ni org marah marah mulu, ngegas mulu, tapi kita yang udah tau dia ya pastii sudahh biasa, untungnya kalo di ps sih ada pawangnya wkwk\nMeskipun keras kepala, mbak lina care kok. Butuh yg fast respon? Udah wa aja dia pasti langsung dibales, kecuali dia deep sleep yhh kawan kawan ato sedang sibuk to the max, tapi aku gapernah sii pastii se fast respon itu wkwk\nMbak lina juga org nya realistis, kalo aku bodoh sama urusan percintaan pasti langsung di ulti wkwk, sarannya pakek logika jadi kadang aku yg terlalu pakek hati ini susah buat nerima tapi semua sarannya bener? Gimana dong wkwk, tengkyu ya mbak len meskipun sampe sekarang aku masih tetep tolol wkwk\nHope u find ur own happiness ya mbak len, kamu sudah tau luka ku, kuharap kamu jangan merasakan apa yang kurasakan sudah cukup aku wkwk, kamu bagian menyadarkan aku ajaa kek biasanya \nTengkyu sudah menjadi my chicago with member ps yang lain, at the end of the day ketika aku terpuruk ya kalian yg selalu ada.",
      imageSrc: image2,
      author: "Nisrina"
    },
    {
      content: "halo lalalina!! \n orang sumbu pendek yang sangat gampang meledak dan kakean nggibah 😭 semoga menjadi mahasiswa kesayangan pak kar forever wkwkkw",
      imageSrc: image2,
      author: "Fikri"
    },
    // Tambahkan testimonial lainnya di sini...
  ];
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(item => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };
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
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-inner">
            <div className="de_testi type-2">
              <blockquote>
                <div className="de-rating-ext">
                  <span className="d-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <p>
                  &quot;
                  {expandedIndexes.includes(index) ? testimonial.content : `${testimonial.content?.slice(0, 100)}...`}
                  &quot;
                  {!expandedIndexes.includes(index) && (
                    <span style={{ color: 'powderblue', cursor: 'pointer' }} onClick={() => toggleExpand(index)}>
                      Baca Selengkapnya
                    </span>
                  )}
                  {expandedIndexes.includes(index) && (
                    <span style={{ color: 'powderblue', cursor: 'pointer' }} onClick={() => toggleExpand(index)}>
                      Lihat Lebih Sedikit
                    </span>
                  )}
                </p>
                <div className="de_testi_by">
                  <Image alt="" src={testimonial.imageSrc} />
                  <span>{testimonial.author}</span>
                </div>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};
export default Customerreviews;
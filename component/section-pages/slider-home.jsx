import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const image1 ="../../img/background/subheader-game.webp";
const image2 ="./img/background/hero1.jpg";
const image3 ="./img/slider/3.webp";
const image4 ="./img/slider/4.webp";

const Slider = () => {
  return (
    <Swiper className="mainslider"
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1} <span className="swiper-pagination-current">/ 2</span></span>`;
        },
      }}
      >
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image1})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Haloo</div>
                            <h1 className="slider-title text-uppercase mb-1">Happy Birthday Mba Cantik</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Semoga ini jadi sesuatu yang mengesankan bagi mba cantik.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Jelajahi</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image2})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Haloo</div>
                            <h1 className="slider-title text-uppercase mb-1">Bersiaplah untuk menjelajah</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Website ini berisi lebih dari 3 halaman yang berbeda.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Jelajahi</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div>         
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
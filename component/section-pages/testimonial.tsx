import React, { useState } from 'react';
import Image from 'next/image';
const Testimonial = ({ content, maxLength, imageSrc, author }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

  return (
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
            {isExpanded ? content : `${content.slice(0, maxLength)}...`}
            &quot;
            {!isExpanded && (
              <span style={{color:'powderblue'}} className="read-more" onClick={toggleExpand}>
                Baca Selengkapnya
              </span>
            )}
            {isExpanded && (
              <span style={{color:'powderblue'}} className="show-less" onClick={() => setIsExpanded(false)}>
                ...Lihat Lebih Sedikit
              </span>
            )}
          </p>
          <div className="de_testi_by">
            <Image alt="" src={imageSrc}/> <span>{author}</span>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;

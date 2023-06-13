import React, { useState } from 'react';
import Image from 'next/image';
import cimg1 from '../../public/Corouselimage1.png'
import cimg2 from '../../public/Corouselimage2.png'
import cimg3 from '../../public/Corouselimage1.jpeg'

const Carousel = () => {
  const [slideIndex, setslideIndex] = useState(1);
  const plusSlides = (n: number) => {
    setslideIndex(slideIndex + n);
    return undefined;
  }

  const currentSlide = (n: number) => {
    setslideIndex(n)
    return undefined;
  }

  if (slideIndex > 3) { setslideIndex(1) }
  if (slideIndex < 1) { setslideIndex(3) }

  const showSlides = () => {
    setslideIndex(slideIndex + 1)
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  return (
    <div className='carouselMain'>
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">

        {/* <!-- Full-width images with number and caption text --> */}
        {slideIndex == 1 && <div className="myslide fade">

          <Image src={cimg1} className='image' alt="Caorusel Image 1" />
          <div className="text">Caption Text</div>
        </div>}
        {slideIndex == 2 && <div className="myslide fade">
          <Image src={cimg2} className='image' alt="Caorusel Image 2" />
          <div className="text">Caption Two</div>
        </div>}

        {slideIndex == 3 && <div className=" myslide fade">
          <Image src={cimg3} className='image' alt="Caorusel Image 3" />
          <div className="text">Caption Three</div>
        </div>}

        {/* <!-- Next and previous buttons --> */}
        <a className="prev" onClick={() => { plusSlides(-1) }}>&#10094;</a>
        <a className="next" onClick={() => { plusSlides(1) }}>&#10095;</a>
             {/* <!-- The dots/circles --> */}
      <div className='dotContainer'>
        <span className={`dot ${slideIndex == 1 ? "active" : ""}`} onClick={() => { currentSlide(1) }}></span>
        <span className={`dot ${slideIndex == 2 ? "active" : ""}`} onClick={() => { currentSlide(2) }}></span>
        <span className={`dot ${slideIndex == 3 ? "active" : ""}`} onClick={() => { currentSlide(3) }}></span>
      </div>
      </div>
    </div>
  );
}

export default Carousel;

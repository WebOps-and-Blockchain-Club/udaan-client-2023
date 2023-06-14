import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import cimg1 from '../../public/Corouselimage1.png'
import cimg2 from '../../public/Corouselimage2.png'
import cimg3 from '../../public/Corouselimage1.jpeg'

const Carousel = () => {
  const [slideIndex, setslideIndex] = useState(1);
  // let count = useRef(0)
  // setInterval(()=>{
  //   count.current++
  // },1000)
  // let count=0;
  // setInterval(()=>{count++ 
  //   if(count==5) {
  //     count=0};},1000);

  const showSlide=(n:number)=>{
    if(n>1){
      setslideIndex(n-1)
    }
    else{
      setslideIndex(slideIndex+n)
    }
  if (slideIndex > 3) { setslideIndex(1) }
  if (slideIndex < 1) { setslideIndex(3) }
    // let timeout=setTimeout(()=>{showSlide(1) 
    // count++},5000)
    // if(count<=5){
    //   clearTimeout(timeout);
    // }
  }

  // useEffect(() => {
  //   count.current=0;
    
  // }, [slideIndex]);


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
        <a className="prev" onClick={() => { showSlide(-1) }}>&#10094;</a>
        <a className="next" onClick={() => { showSlide(1) }}>&#10095;</a>
             {/* <!-- The dots/circles --> */}
      <div className='dotContainer'>
        <span className={`dot ${slideIndex == 1 ? "active" : ""}`} onClick={() => { showSlide(2) }}></span>
        <span className={`dot ${slideIndex == 2 ? "active" : ""}`} onClick={() => { showSlide(3) }}></span>
        <span className={`dot ${slideIndex == 3 ? "active" : ""}`} onClick={() => { showSlide(4) }}></span>
      </div>
      </div>
    </div>
  );
}

export default Carousel;

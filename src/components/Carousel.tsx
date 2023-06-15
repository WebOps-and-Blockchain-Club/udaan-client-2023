import React, { useEffect, useRef, useState, MutableRefObject, RefObject } from 'react';
import Image from 'next/image';
import carouselImagearray from './CarouselImage';

const Carousel = () => {
  const [slideIndex, setslideIndex] = useState(0);
  let timeoutRef = useRef<number| undefined>(undefined) ;

  const resetTimeout=()=>{
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }

  if (slideIndex > carouselImagearray.length-1) { setslideIndex(0) }
  if (slideIndex < 0) { setslideIndex(carouselImagearray.length-1) }

  useEffect(() => {
      resetTimeout()
    timeoutRef.current = window.setTimeout(
    () =>{
      setslideIndex((prevIndex) =>  prevIndex === carouselImagearray.length ? 0: prevIndex + 1)},500000);
  
    return () => {
      resetTimeout();
    };
  }, [slideIndex]);



    return (
    <div className='carouselMain'>
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">

        {carouselImagearray.map((info, index) => {
          return (slideIndex == index) && <div className="myslide fade">

            <Image src={info.url} className='image' alt={info.Alernaivetext} width={1024} height={1024}/>
            <div className="text">{info.Title}</div>
          </div>

        })}

        {/* <!-- Next and previous buttons --> */}
        <a className="prev" onClick={() => { setslideIndex(slideIndex - 1) }}>&#10094;</a>
        <a className="next" onClick={() => { setslideIndex(slideIndex + 1) }}>&#10095;</a>
        {/* <!-- The dots/circles --> */}
        <div className='dotContainer'>
          {carouselImagearray.map((info, index) => {
            return <span key={info.Title} className={`dot ${slideIndex == index ? "active" : ""}`} onClick={() => { setslideIndex(index) }}></span>
          })}
        </div>
      </div>
    </div>
    );
}

    export default Carousel;

import React, { useState } from "react";
import './3d-carousel.style.css';
import Carousel from 'react-spring-3d-carousel';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@ant-design/icons';

function ThreeDCarousel ({images}){
    const [slideIndex,setSlideIndex] = useState(0);

    const slides = images.map((img,index)=>{
        return {
            key:index,
            content:<img src={img.src} alt={img.alt}/>
        }
    });

    return (
        <div className='my-car'>
            <Carousel slides={slides} offsetRadius={1} goToSlide={slideIndex} />
            <div className='my-car-ctrl'>
                <div className='arrw-ctrl'>
                    <ArrowLeftOutlined className='arrw left-arrw' onClick={()=>setSlideIndex(slideIndex > 0 ? slideIndex-1 : (slides.length-1))}/> 
                    <ArrowRightOutlined className='arrw right-arrw'onClick={()=>setSlideIndex((slideIndex+1)%(slides.length))}/>
                </div>
            </div>
        </div>
    )
}

export default ThreeDCarousel;
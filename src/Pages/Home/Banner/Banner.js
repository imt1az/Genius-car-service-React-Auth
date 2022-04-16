import React, { useState } from 'react';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
let count = 0;
const Banner = () => {
    
    const images = [banner1,banner2,banner3];
    const [currentIndex,setCurrentIndex] = useState(0);
    const handleNext = ()=>{
        count = (count + 1)% images.length;
        setCurrentIndex(count);
    }
    const handlePrev = ()=>{
        count = (currentIndex + images.length - 1) % images.length;
   setCurrentIndex(count);
    }
    return (
        <div className='w-full select-none relative py-11'>
            <div className='aspect-w-16 aspect-h-9'>
            <img src={images[currentIndex]} alt=''/>
            </div>
           
            <div className='absolute w-full top-1/2  px-3 flex justify-between items-center transform -translate-y-1'>
                <button  onClick={handlePrev} className='text-white'>Previous</button>
                <button onClick={handleNext} className='text-white'>Next</button>

            </div>
        </div>
    );
};

export default Banner;
import React, { useRef } from 'react';
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css'


import img from '../../Assets/diucselogo.png'
import img1 from '../../Assets/gallary1.png';
import img2 from '../../Assets/gallary2.png';
import img3 from '../../Assets/image3.jpg';
import img4 from '../../Assets/image4.jpg';

const Home = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={10}
                // centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                navigation={true}
                effect='flip'
                modules={[Autoplay, Pagination, Navigation, EffectFlip]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className=' bg-cover slider-img'  src={img} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' bg-cover slider-img' src={img1} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover slider-img' src={img2} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover slider-img' src={img} alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-cover slider-img' src={img} alt=''></img>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Home;
"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./journals.css"
import Image from 'next/image'

export default function ImageList() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const images = Array.from({ length: 38 }, (_, i) => `/cencJournals2024/${i + 1}.png`);

    return (
        <div className='images-container'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='image-number'>
                        <Image 
                            src={image}
                            alt={'Slide ${index}'}
                            width={864}
                            height={1152}
                            quality={100}
                            className = 'scrollImage'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

// const images = Array.from({ length: 38 }, (_, i) => `/cencJournals2024/${i + 1}.png`);
    // return (
    //     <div className="imageScrollList">
    //       {images.map((image, index) => (
    //         <img key={index} src={image} alt={`Slide ${index}`} className="scrollImage" />
    //       ))}
    //     </div>
    //   );



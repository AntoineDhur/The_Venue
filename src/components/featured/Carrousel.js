import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div
            className="carrousel_wrapper"
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                        }}
                    />
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                        }}
                    />
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_three})`,
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const ImageCarousel2 = () => {
    return (
        <div className='showcase-wrap wedding-carousel'>
            <Carousel
                autoPlay={true}
                interval={3500} // Auto-slide every 5 seconds
                showArrows={false} // Hide navigation arrows
                showThumbs={false} // Hide thumbnail navigation
                infiniteLoop={true} // Loop the carousel
                showIndicators={false}
                showStatus={false}
                transitionTime={1000}
            >
                <div>
                    <img src="/assets/images/2slide1.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="/assets/images/2slide2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="/assets/images/2slide3.jpg" alt="Image 3" />
                </div>
                <div>
                    <img src="/assets/images/2slide4.jpg" alt="Image 4" />
                </div>
                <div>
                    <img src="/assets/images/2slide5.jpg" alt="Image 5" />
                </div>
            </Carousel>
            <div className='showcase'>
                <h1>WEDDING STORY</h1>
            </div>
        </div>
    );
};

export default ImageCarousel2;

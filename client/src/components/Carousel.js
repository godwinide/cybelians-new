// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Link } from 'react-router-dom';


const ImageCarousel = () => {
    return (
        <div className='showcase-wrap'>
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
                    <img src="/assets/images/slide1.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="/assets/images/slide2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="/assets/images/slide3.jpg" alt="Image 3" />
                </div>
                <div>
                    <img src="/assets/images/slide4.jpg" alt="Image 4" />
                </div>
            </Carousel>
            <div className='showcase'>
                <h1>The Cybelian Organization</h1>
                <h2>Worldwide Cybelian Movement</h2>
                <br />
                <a href="/signup" className="action">BECOME A MEMBER</a>
                <a href="/signin" className="action">LOGIN</a>
            </div>
        </div>
    );
};

export default ImageCarousel;

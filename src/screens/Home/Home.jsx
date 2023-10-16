import React from 'react';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import img1 from '../../assets/Home/img1.jpg';
import img2 from '../../assets/Home/img2.jpg';
import img3 from '../../assets/Home/img3.jpeg';

const Home = () => {
    // Sample slider settings
    const sliderSettings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 800, // Transition speed (ms)
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, // Time between auto-play slides in milliseconds (3 seconds in this case)
    };

    // Sample slide data
    const slides = [
        {
            image: img1,
            text: 'Découvrez notre maison de retraite.',
        },
        {
            image: img2,
            text: 'Un lieu de vie chaleureux',
        },
        {
            image: img3,
            text: 'Chaque jour est une nouvelle aventure.',
        },
    ];

    return (
        <>
            <Header />
            <div className="home">
                <div className="slider">
                    <Slider {...sliderSettings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="slide">
                                <div
                                    className="slide-background"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                                <div className="slide-content">
                                    <p>{slide.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Home;

import React from 'react';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import img1 from '../../assets/Home/img1.jpg';
import img2 from '../../assets/Home/img2.jpg';
import img3 from '../../assets/Home/img3.jpeg';
import testimonialImage from '../../assets/Home/testimonial.jpg';
import testimonialImage2 from '../../assets/Home/testimonial2.jpg';
import testimonialImage3 from '../../assets/Home/testimonial3.jpeg';
import Footer from '../../components/Footer/Footer';
import servicesImage from '../../assets/Home/services.jpg';

const Home = () => {
    // Sample slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Sample slide data
    const slides = [
        {
            image: img1,
            text: 'Discover our retirement home.',
        },
        {
            image: img2,
            text: 'A warm and welcoming place to live.',
        },
        {
            image: img3,
            text: 'Every day is a new adventure.',
        },
    ];

    return (
        <>
            <Header />
            <div className="home">
                <div className="slider-container">
                    <Slider {...sliderSettings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="slide">
                                <img
                                    className="slide-image"
                                    src={slide.image}
                                    alt=""
                                />
                                <div className="slide-content">
                                    <p className="slide-text">{slide.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="inner_sections">
                    <div className="services-section">
                        <div className="services-content">
                            <div className="services-text">
                                <h2>Our Services</h2>
                                <p>
                                    At our retirement home, we offer a range of services to meet the needs of our residents. These services include medical care, leisure activities, quality meals, and much more. We are committed to ensuring the well-being of our residents.
                                </p>
                            </div>
                            <div className="services-image">
                                <img src={servicesImage} alt="Services" />
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-section">
                        <h2>Testimonials from Our Residents</h2>
                        <div className="testimonial-cards">
                            <div className="testimonial-card">
                                <img src={testimonialImage} alt="Testimonial" />
                                <p>
                                    "I've found a second home here. The staff is incredibly caring, and I feel safe and well taken care of."
                                </p>
                            </div>
                            <div className="testimonial-card">
                                <img src={testimonialImage2} alt="Testimonial" />
                                <p>
                                    "I'm grateful for the attention and care I've received at this retirement home. It's a special place."
                                </p>
                            </div>
                            <div className="testimonial-card">
                                <img src={testimonialImage3} alt="Testimonial" />
                                <p>
                                    "The retirement home offers a warm and friendly environment. I've made wonderful connections here."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-section">
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or would like to schedule a visit, please don't hesitate to contact us. We are here to help you make the best decision for yourself or your loved ones.
                        </p>
                        <a href="/contact" className="contact-button">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;

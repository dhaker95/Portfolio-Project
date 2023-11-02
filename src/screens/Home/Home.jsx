import React from 'react';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/Home/img1.jpg';
import img2 from '../../assets/Home/img2.jpg';
import img3 from '../../assets/Home/img3.jpeg';
import testimonialImage from '../../assets/Home/testimonial.jpg';
import testimonialImage2 from '../../assets/Home/testimonial2.jpg';
import testimonialImage3 from '../../assets/Home/testimonial3.jpeg';
import Footer from '../../components/Footer/Footer';
import servicesImage from '../../assets/Home/services.jpg';
import environmentImage from '../../assets/Home/environment.png';

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
                <div className="slider">
                    <Slider {...sliderSettings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="slide">
                                <div
                                    className="slide-background"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                                <div className="slide-content ">
                                    <p className='fade-in'>{slide.text}</p>
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
                                    At La Maison de la Jouvence, we are dedicated to providing a comprehensive range of services to cater to the diverse needs of our residents. Our services extend beyond basic care to ensure a fulfilling retirement experience. From well-balanced and delicious meals prepared with utmost care to regular medical check-ups and assistance with daily activities, we prioritize the health and comfort of our residents. Our recreational programs offer opportunities for social engagement and personal growth, including arts and crafts, exercise classes, and outings to explore the scenic surroundings. We also offer personalized care plans, ensuring that each resident receives the attention and support they deserve. With our commitment to compassion, quality, and inclusivity, we strive to create an environment where our residents can thrive and make the most of their retirement years.
                                </p>
                            </div>
                            <div className="services-image">
                                <img src={servicesImage} alt="Services" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="goals services-section">
                        <div className="goals services-content">
                        <div className="goals services-image">
                                <img src={environmentImage} alt="Services" />
                            </div>
                            <div className="goals services-text">
                                <h2>Our Environment</h2>
                                <p>
                                At La Maison de la Jouvence, our retirement home provides a serene and nurturing environment for our residents. Nestled in the coastal town of Hammamet, Tunisia, our idyllic location offers a tranquil atmosphere and a delightful climate, creating the perfect backdrop for a fulfilling retirement experience. Our commitment to creating a warm and family-like setting ensures that our residents feel right at home, surrounded by natural beauty and a caring community. With a focus on both physical and emotional well-being, our dedicated team provides quality care, engaging activities, and a comfortable living space, making every day a memorable and enjoyable one for our cherished residents.
                                </p>
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
                        <Link to="/contact" className="contact-button">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;

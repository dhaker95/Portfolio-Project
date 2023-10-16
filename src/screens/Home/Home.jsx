import React from 'react';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import img1 from '../../assets/Home/img1.jpg';
import img2 from '../../assets/Home/img2.jpg';
import img3 from '../../assets/Home/img3.jpeg';
import './Home.css'; // Import your CSS file
import testimonialImage from '../../assets/Home/testimonial.jpg'

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
                <div className="inner_sections">
                    <div className="services-section">
                        <h2>Nos Services</h2>
                        <p>
                            À notre maison de retraite, nous offrons une gamme de services pour répondre aux besoins
                            de nos résidents. Ces services comprennent des soins médicaux, des activités de loisirs,
                            des repas de qualité, et bien plus encore. Nous nous engageons à assurer le bien-être de nos
                            résidents.
                        </p>
                    </div>
                    <div className="testimonial-section">
                        <h2>Témoignages de nos Résidents</h2>
                        <div className="testimonial">
                            <img src={testimonialImage} alt="Témoignage" />
                            <p>
                                "J'ai trouvé une seconde maison ici. Le personnel est incroyablement attentionné, et
                                je me sens en sécurité et bien soigné."
                            </p>
                        </div>
                        {/* Add more testimonials as needed */}
                    </div>
                    <div className="contact-section">
                        <h2>Contactez-Nous</h2>
                        <p>
                            Si vous avez des questions ou si vous souhaitez planifier une visite, n'hésitez pas à nous
                            contacter. Nous sommes là pour vous aider à prendre la meilleure décision pour vous ou vos
                            proches.
                        </p>
                        <a href="/contact" className="contact-button">
                            Contactez-nous
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
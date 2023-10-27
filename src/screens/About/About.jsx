import React, { useState } from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
        <Header/>
        <div className="about-container">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    At La Maison de la Jouvence, our primary concern is customer satisfaction. We are committed to providing a warm and family-like environment where our residents feel at home. Our retirement home, located in Hammamet, Tunisia, is designed to offer the best comfort and care to our residents.
                </p>
                <p>
                    Our dedicated team consists of professionals with experience in elderly care. We focus on the physical and emotional well-being of our residents, offering leisure activities, balanced meals, quality medical care, and much more.
                </p>
                {showMore && (
                    <>
                        <p>
                            At La Maison de la Jouvence, every day is a new adventure for our residents. We believe in creating unforgettable memories and promoting an active and fulfilling life.
                        </p>
                        <div className="sections">
                            <section>
                                <h3>Location in Hammamet, Tunisia</h3>
                                <p>
                                    Our retirement home is ideally located in Hammamet, Tunisia. This charming coastal town offers a pleasant climate and a peaceful atmosphere, perfect for our residents.
                                </p>
                            </section>
                            <section>
                                <h3>Our Goals</h3>
                                <p>
                                    At La Maison de la Jouvence, our goal is to create a family-like and warm environment. We aim to provide quality care, stimulating activities, and ensure the well-being of our residents at every stage of their lives.
                                </p>
                            </section>
                            <section>
                                <h3>Affordable Prices</h3>
                                <p>
                                    We believe that everyone deserves quality care. That's why we are committed to maintaining affordable rates for our residents. Our goal is to make our services accessible to all.
                                </p>
                            </section>
                        </div>
                    </>
                )}
                <button className="read-more-button" onClick={toggleShowMore}>
                    {showMore ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;

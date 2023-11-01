import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        At La Maison de la Jouvence, our primary concern is customer satisfaction. We are committed to providing a warm and family-like environment where our residents feel at home. Our retirement home, located in Hammamet, Tunisia, is designed to offer the best comfort and care to our residents.
                    </p>
                    <p>
                        Our dedicated team consists of professionals with experience in elderly care. We focus on the physical and emotional well-being of our residents, offering leisure activities, balanced meals, quality medical care, and much more.
                    </p>
                    <section>
                            <h3>Our Achievements</h3>
                            <div className="achievements-counter">
                                <div className="achievement">
                                    <div className="counter-circle">
                                        <span className="counter-number">830</span>
                                    </div>
                                    <span className="achievement-label">Houses available</span>
                                </div>
                                <div className="achievement">
                                    <div className="counter-circle">
                                        <span className="counter-number">3</span>
                                    </div>
                                    <span className="achievement-label">Countries</span>
                                </div>
                                <div className="achievement">
                                    <div className="counter-circle">
                                        <span className="counter-number">280</span>
                                    </div>
                                    <span className="achievement-label">Retired Clients</span>
                                </div>
                                <div className="achievement">
                                    <div className="counter-circle">
                                        <span className="counter-number">121</span>
                                    </div>
                                    <span className="achievement-label">Returing Clients</span>
                                </div>
                                <div className="achievement">
                                    <div className="counter-circle">
                                        <span className="counter-number">540</span>
                                    </div>
                                    <span className="achievement-label">Happy clients</span>
                                </div>
                            </div>
                        </section>
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
                        <section>
                            <h3>Mission, Vision, Core Values</h3>
                            <p>Mission: To provide a warm and family-like environment for our residents, focusing on their well-being and happiness.</p>
                            <p>Vision: To be a leader in elderly care, creating fulfilling and memorable experiences.</p>
                            <p>Core Values: Compassion, Quality, Inclusivity.</p>
                        </section>
                        <section>
                            <h3>History</h3>
                            <ul>
                                <li>2012: Company registration</li>
                                <li>2012: First retired sale</li>
                                <li>2024: Mastercard Housing Award</li>
                                {/* Add more history events here */}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;

import React from 'react';
import './Contact.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import img from '../../assets/Contact/img.jpg'

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contact-container">
                <div className="contact_content">
                    <div className="contact_image">
                        <h2>24/7 At your service</h2>
                        <p>Feel free to get in touch with us. We're here to assist you.</p>
                        <img src={img} alt="" />
                    </div>
                    <div className="contact-form">
                        <h2>Contact us</h2>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your message..." required></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Contact;

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
                    <div className="map_location">
                        <h2>Where to find us :</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.0680065465817!2d10.612806724930838!3d36.394084174232354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd63da3688fe73%3A0x98f5a8fc1fe61042!2sDar%20Jamila%20-%20Medina%20Hammamet!5e0!3m2!1sen!2stn!4v1698865284430!5m2!1sen!2stn" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Contact;

import React, { useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import the emailjs library
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import img from '../../assets/Contact/img.jpg'

const Contact = () => {
    // Set up Google Maps when the component mounts
    useEffect(() => {
        const googleMap = new window.google.maps.Map(document.getElementById("google-map"), {
            center: { lat: -34.397, lng: 150.644 }, // Set initial map coordinates
            zoom: 8, // Set the initial zoom level
        });
    }, []);

    // Define your array of sales agents
    const agents = [
        {
            name: "Agent 1",
            country: "Country 1",
            phone: "+1234567890",
            email: "agent1@example.com",
        },
        // Add more agents...
    ];

    // Function to handle sending emails
    const handleEmail = (agentEmail) => {
        emailjs.send("your_email_service_id", "your_template_id", {
            to_email: agentEmail,
        })
        .then((response) => {
            console.log("Email sent!", response);
        })
        .catch((error) => {
            console.error("Email could not be sent:", error);
        });
    };

    return (
        <>
            <Header />
            <div className="contact-container">
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
        <Footer/>
        </>
    );
}

export default Contact;

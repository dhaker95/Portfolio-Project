import React from 'react';
import './Contact.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return (
        <>
        <Header/>
            <div className="contact-container">
            <div className="contact-form">
                <h2>Contactez-Nous</h2>
                <form>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Entrez votre nom" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Entrez votre e-mail" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message..." required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Contact;

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
                <h2>À Propos de Nous</h2>
                <p>
                    Chez La maison de la jouvence, notre principale préoccupation est la satisfaction de nos clients.
                    Nous nous engageons à offrir un environnement chaleureux et familial, où nos résidents se sentent
                    comme chez eux. Notre maison de retraite, située à Hammamet en Tunisie, est conçue pour offrir le meilleur
                    confort et les meilleurs soins à nos résidents.
                </p>
                <p>
                    Notre équipe dévouée est composée de professionnels expérimentés dans le domaine des soins aux
                    personnes âgées. Nous mettons l'accent sur le bien-être physique et émotionnel de nos résidents,
                    en proposant des activités de loisirs, une alimentation équilibrée, des soins médicaux de qualité,
                    et bien plus encore.
                </p>
                {showMore && (
                    <>
                        <p>
                            Chez La maison de la jouvence, chaque jour est une nouvelle aventure pour nos résidents. Nous croyons en
                            la création de souvenirs inoubliables et en la promotion d'une vie active et épanouissante.
                        </p>
                        <div className="sections">
                            <section>
                                <h3>Emplacement à Hammamet, Tunisie</h3>
                                <p>
                                    Notre maison de retraite est idéalement située à Hammamet, en Tunisie. Cette charmante ville côtière offre un climat agréable et une atmosphère paisible, parfaite pour nos résidents.
                                </p>
                            </section>
                            <section>
                                <h3>Nos Objectifs</h3>
                                <p>
                                    Chez La maison de la jouvence, nous avons pour objectif de créer un environnement familial et chaleureux. Nous visons à offrir des soins de qualité, des activités stimulantes et à assurer le bien-être de nos résidents à chaque étape de leur vie.
                                </p>
                            </section>
                            <section>
                                <h3>Prix Abordables</h3>
                                <p>
                                    Nous croyons que tout le monde mérite des soins de qualité. C'est pourquoi nous nous engageons à maintenir des tarifs abordables pour nos résidents. Notre objectif est de rendre nos services accessibles à tous.
                                </p>
                            </section>
                        </div>
                    </>
                )}
                <button className="read-more-button" onClick={toggleShowMore}>
                    {showMore ? 'Lire moins' : 'Lire plus'}
                </button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;

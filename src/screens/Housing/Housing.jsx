import React from 'react';
import './Housing.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Housing = () => {
    // Sample house data
    const houses = [
        {
            id: 1,
            bedrooms: 3,
            bathrooms: 2,
            images: [
                'house1-1.jpg',
                'house1-2.jpg',
                'house1-3.jpg',
            ],
            features: ['Built-in Closet', 'Garden', 'Garage'],
        },
        {
            id: 2,
            bedrooms: 4,
            bathrooms: 3,
            images: [
                'house2-1.jpg',
                'house2-2.jpg',
                'house2-3.jpg',
            ],
            features: ['Swimming Pool', 'Spacious Living Room', 'Modern Kitchen'],
        },
        // Add more house objects as needed
    ];

    return (
        <>
            <Header />
            <div className="housing">
                <h1>Available Houses</h1>
                <div className="house-list">
                    {houses.map((house) => (
                        <div key={house.id} className="house">
                            <div className="house-images">
                                {house.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={require(`../../assets/Housing/${image}`).default}
                                        alt={`House ${house.id} - Image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="house-details">
                                <h2>House {house.id}</h2>
                                <p>Bedrooms: {house.bedrooms}</p>
                                <p>Bathrooms: {house.bathrooms}</p>
                                <ul>
                                    {house.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Housing;
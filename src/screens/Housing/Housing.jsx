import React from 'react';
import './Housing.css';
import house1_1 from '../../assets/Housing/house1-1.jpg';
import house1_2 from '../../assets/Housing/house1-2.jpg';
import house1_3 from '../../assets/Housing/house1-3.jpg';
import house2_1 from '../../assets/Housing/house2-1.jpg';
import house2_2 from '../../assets/Housing/house2-2.jpg';
import house2_3 from '../../assets/Housing/house2-3.jpg';
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
                house1_1,
                house1_2,
                house1_3,
            ],
            features: ['Built-in Closet', 'Garden', 'Garage'],
        },
        {
            id: 2,
            bedrooms: 4,
            bathrooms: 3,
            images: [
                house2_1,
                house2_2,
                house2_3,
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
                                        src={image}
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

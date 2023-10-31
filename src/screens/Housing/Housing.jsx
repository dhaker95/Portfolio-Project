import React, { useState } from 'react';
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
            Price: R 9000.00
            images: [
                house1_1,
            ],
            features: ['Built-in Closet', 'Garden', 'Garage'],
        },
        {
            id: 2,
            bedrooms: 4,
            bathrooms: 3,
            Price: R 12000.00
            images: [
                house1_2,
            ],
            features: ['Swimming Pool', 'Spacious Living Room', 'Modern Kitchen'],
        },
        {
            id: 3,
            bedrooms: 1,
            bathrooms: 1,
            Price: R 4000.00
            images: [
                house1_3,
            ],
            features: ['Built-in Closet', 'Garden', 'Garage', 'Swimming Pool'],
        },
        // Add more house objects as needed
    ];

    // Step 2: Create state variables for search criteria
    const [searchCriteria, setSearchCriteria] = useState({
        bedrooms: '', // Initialize with an empty string
        bathrooms: '', // Initialize with an empty string
        Price: '', // Initialize with an empty string 
    });

    // Step 3: Create a function to handle search input changes
    const handleSearchInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({
            ...searchCriteria,
            [name]: value,
        });
    };

    // Step 4: Filter the list of houses based on search criteria
    const filteredHouses = houses.filter((house) => {
        return (
            (searchCriteria.bedrooms === '' || house.bedrooms.toString() === searchCriteria.bedrooms) &&
            (searchCriteria.bathrooms === '' || house.bathrooms.toString() === searchCriteria.bathrooms) &&
            (searchCriteria.Price === '' || house.price.toString() === searchCriteria.price)
        );
    });

    return (
        <>
            <Header />
            <div className="housing">
                <h1>Search Available Houses</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        name="bedrooms"
                        value={searchCriteria.bedrooms}
                        onChange={handleSearchInputChange} // Attach the change handler
                        placeholder="Bedrooms"
                    />
                    <input
                        type="text"
                        name="bathrooms"
                        value={searchCriteria.bathrooms}
                        onChange={handleSearchInputChange} // Attach the change handler
                        placeholder="Bathrooms"
                    />
                    <input
                        type="text"
                        name="price"
                        value={searchCriteria.price}
                        onChange={handleSearchInputChange} // Attach the change handler
                        placeholder="Price"
                    />
                </div>
                <div className="house-list">
                    {filteredHouses.map((house) => (
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
                                <p>Price: {house.price}</p>
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

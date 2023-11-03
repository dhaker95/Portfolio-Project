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
    const [searchCriteria, setSearchCriteria] = useState({
        bedrooms: '',
        bathrooms: '',
        Price: '',
		Location: '',
    });

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({
            ...searchCriteria,
            [name]: value,
        });
    };

    const handleTalkToAgent = (agent) => {
        console.log(`Contacting agent: ${agent.name}, Email: ${agent.email}, Country: ${agent.country}`);
        // Implement your logic to contact the agent here
    };

    // Sample house data
    const houses = [
    {
      id: 1,
      bedrooms: 3,
      bathrooms: 2,
      Price: 'R 9000.00',
      Location: 'Windhoek',
      images: [house1_1],
      features: ['Built-in Closet', 'Garden', 'Garage', 'Gym'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
    {
      id: 2,
      bedrooms: 4,
      bathrooms: 3,
      Price: 'R 12000.00',
      Location: 'Nigeria',
      images: [house1_2],
      features: ['Swimming Pool', 'Spacious Living Room', 'Modern Kitchen'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
    {
      id: 3,
      bedrooms: 1,
      bathrooms: 1,
      Price: 'R 4000.00',
      Location: 'Tunisia',
      images: [house1_3],
      features: ['Built-in Closet', 'Garden', 'Garage', 'Swimming Pool'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
    {
      id: 4,
      bedrooms: 4,
      bathrooms: 3,
      Price: 'R 24000.00',
      Location: 'Lagos',
      images: [house2_1],
      features: ['Stove', 'Garden', 'Garage', 'Swimming Pool', 'Gym', 'Built-in Closet'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
    {
      id: 5,
      bedrooms: 3,
      bathrooms: 3,
      Price: 'R 14000.00',
      Location: 'Mahdia',
      images: [house2_2],
      features: ['Stove', 'Garden', 'Garage', 'Swimming Pool', 'Gym', 'Built-in Closet'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
    {
      id: 6,
      bedrooms: 3,
      bathrooms: 4,
      Price: 'R 13500.00',
      Location: 'Swakopmund',
      images: [house2_3],
      features: ['Built-in Closet', 'Garden', 'Garage', 'Swimming Pool', 'Gym'],
      agent: {
        name: 'Hilya Ntinda',
        email: 'ntindahilya@gmail.com',
        country: 'Namibia',
      },
    },
        // Add more house objects as needed
    ];

    // Function to handle the search
    const handleSearch = () => {
        // Filter the houses based on search criteria
        const filteredHouses = houses.filter((house) => {
            return (
                (searchCriteria.bedrooms === '' || house.bedrooms.toString() === searchCriteria.bedrooms) &&
                (searchCriteria.bathrooms === '' || house.bathrooms.toString() === searchCriteria.bathrooms) &&
                (searchCriteria.Price === '' || house.Price.toString() === searchCriteria.Price) &&
                (searchCriteria.Location === '' || house.Location.toString() === searchCriteria.Location)
            );
        });

        // Log the filtered houses to the console for debugging
        console.log(filteredHouses);
    };

    return (
        <>
        <Header/>
            <div className="housing">
                <h1>Search Available Houses</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        name="bedrooms"
                        value={searchCriteria.bedrooms}
                        onChange={handleSearchChange}
                        placeholder="Bedrooms"
                    />
                    <input
                        type="text"
                        name="bathrooms"
                        value={searchCriteria.bathrooms}
                        onChange={handleSearchChange}
                        placeholder="Bathrooms"
                    />
                    <input
                        type="text"
                        name="Price"
                        value={searchCriteria.Price}
                        onChange={handleSearchChange}
                        placeholder="Price"
                    />
					 <input
            type="text"
            name="Location"
            value={searchCriteria.Location}
            onChange={handleSearchChange}
            placeholder="Location"
          />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="house-list">
                    {houses.map((house) => (
                        <div key={house.id} className="house">
                            <div className="house-images">
                                {house.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`House ${house.id} - Image ${index + 1}`}
                                        style={{ maxWidth: '300px', height: '200px' }}
                                    />
                                ))}
                            </div>
                            <div className="house-details">
                                <h2>House {house.id}</h2>
                                <p>Bedrooms: {house.bedrooms}</p>
                                <p>Bathrooms: {house.bathrooms}</p>
                                <p>Price: {house.Price}</p>
								<p>Location: {house.Location}</p>
                                <ul>
                                    {house.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <button onClick={() => handleTalkToAgent(house.agent)}>
                                    Talk to Agent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Housing;
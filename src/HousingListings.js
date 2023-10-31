import React, { useState } from "react";
import "./Housing.css";
import house1_1 from '../../assets/Housing/house1-1.jpg';
import house1_2 from '../../assets/Housing/house1-2.jpg';
import house1_3 from '../../assets/Housing/house1-3.jpg';
import house2_1 from '../../assets/Housing/house2-1.jpg';
import house2_2 from '../../assets/Housing/house2-2.jpg';
import house2_3 from '../../assets/Housing/house2-3.jpg';
// ... (import other images and components)

const Housing = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    bedrooms: "",
    bathrooms: "",
    price: "",
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  // Sample house data
  const houses = [
    {
      id: 1,
      bedrooms: 3,
      bathrooms: 2,
      Price: R 9000.00
      // ... (other house details)
    },
    {
      id: 2,
            bedrooms: 4,
            bathrooms: 3,
            Price: R 12000.00
      // ... (other house details)
    },
  {
    id: 3,
            bedrooms: 1,
            bathrooms: 1,
            Price: R 4000.00
            // ... (other house details)
  }
    // Add more house objects as needed
  ];

  // Function to handle the search
  const handleSearch = () => {
    // Filter the houses based on search criteria
    const filteredHouses = houses.filter((house) => {
      return (
        (searchCriteria.bedrooms === "" ||
          house.bedrooms.toString() === searchCriteria.bedrooms) &&
        (searchCriteria.bathrooms === "" ||
          house.bathrooms.toString() === searchCriteria.bathrooms) &&
          (searchCriteria.price === "" ||
          house.price.toString() === searchCriteria.price)
      );
    });

    // Log the filtered houses to the console for debugging
    console.log(filteredHouses);
  };

  return (
    <>
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
            name="price"
            value={searchCriteria.price}
            onChange={handleSearchChange}
            placeholder="Price"
          />
          {/* Add more input fields for other search criteria */}
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="house-list">
          {houses.map((house) => (
            <div key={house.id} className="house">
              <img src={require(`../../assets/Housing/house${house.id}_1.jpg`).default} alt={`House ${house.id}`} />
              <div className="house-details">
                <h2>{`House ${house.id}`}</h2>
                <p>{`Bedrooms: ${house.bedrooms}`}</p>
                <p>{`Bathrooms: ${house.bathrooms}`}</p>
                <p>{`Price: ${house.price}`}</p>
                {/* Add more house details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Housing;

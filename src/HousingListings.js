import React, { useState } from "react";
import Housing from './screens/Housing/Housing';
import './Housing.css';
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
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const filteredHouses = houses.filter((house) => {
    return (
      (searchCriteria.bedrooms === "" ||
        house.bedrooms.toString() === searchCriteria.bedrooms) &&
      (searchCriteria.bathrooms === "" ||
        house.bathrooms.toString() === searchCriteria.bathrooms)
    );
  });

  return (
    <>
      {/* Add your Header component */}
      <div className="housing">
        <h1>Available Houses</h1>
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
          {/* Add more input fields for other search criteria */}
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="house-list">
          {filteredHouses.map((house) => (
            {/* Display filtered houses */}
          ))}
        </div>
      </div>
      {/* Add your Footer component */}
    </>
  );
};

export default Housing;

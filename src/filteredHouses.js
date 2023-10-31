const filteredHouses = houses.filter((house) => {
  return (
    (searchCriteria.bedrooms === "" ||
      house.bedrooms.toString() === searchCriteria.bedrooms) &&
    (searchCriteria.bathrooms === "" ||
      house.bathrooms.toString() === searchCriteria.bathrooms)
    // Add more conditions based on your search criteria
  );
});

const handleSearchChange = (e) => {
  const { name, value } = e.target;
  setSearchCriteria({
    ...searchCriteria,
    [name]: value,
  });
};

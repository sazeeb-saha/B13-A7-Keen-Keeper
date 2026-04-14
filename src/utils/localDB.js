const getAllFromLocalDB = () => {
  const allCheckIN = localStorage.getItem("checkIn");
  if (allCheckIN) return JSON.parse(allCheckIN);
  return [];
};

const addToLocalDB = (item) => {
  const allItems = getAllFromLocalDB();
  allItems.push(item);

  localStorage.setItem("checkIn", JSON.stringify(allItems));
};

export { getAllFromLocalDB, addToLocalDB };

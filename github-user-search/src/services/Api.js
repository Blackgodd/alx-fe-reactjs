const handleSearch = async (username) => {
  setIsLoading(true); 
  setError(null); 
  setUser(null); 
  try {
    const userData = await fetchUserData(username);
    setUser(userData);
  } catch (error) {
    setError(error.message);
  } finally {
    setIsLoading(false); 
  }
};

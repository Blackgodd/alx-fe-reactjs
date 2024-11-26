const auth = {
    isAuthenticated: false, // Simulate authentication status
    login(callback) {
      this.isAuthenticated = true;
      setTimeout(callback, 100); // Simulate async login
    },
    logout(callback) {
      this.isAuthenticated = false;
      setTimeout(callback, 100); // Simulate async logout
    },
  };
  
  export default auth;
  
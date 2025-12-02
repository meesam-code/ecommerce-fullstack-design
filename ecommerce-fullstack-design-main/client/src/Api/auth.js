import api from "./axiosInstance";

export const login = async (userData) => {
  try {
    const response = await api.post("/user/login", userData);
    if (response.status === 200) {
      // Assuming the response contains user data
      const user = response.data;
      console.log("Login successful:", user);
      return user; // Return the user data for further processing
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Re-throw the error for further handling
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/user/register", userData);
    if (response.status === 201) {
      // Assuming the response contains user data
      const user = response.data;
      console.log("Registration successful:", user);
      return user; // Return the user data for further processing
    }
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; // Re-throw the error for further handling
  }
};

export const fetchUser = async () => {
  try {
    const res = await api.get("/user/me");
    return res.data.user;
  } catch (err) {
    console.error("Failed to fetch user", err);
    return null;
  }
};

export const logout = async () => {
  try {
    const res = await api.post("/user/logout");
    console.log("Logout successful:", res.data);
    return res.data; // Return the response data for further processing
  } catch (err) {
    console.error("Failed to logout", err);
    throw err; // Re-throw the error for further handling
  }
};

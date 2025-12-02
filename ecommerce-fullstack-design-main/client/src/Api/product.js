import api from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    if (response.status === 200) {
      return response.data?.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const addNewProduct = async (formData) => {
  try {
    const response = await api.post("/product", formData);
    if (response.status === 201) {
      console.log("Product added successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/product/${id}`);
    if (response.status === 200) {
      console.log("Product deleted successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};

export const editProduct = async (id, formData) => {
  try {
    const response = await api.put(`/product/${id}`, formData);
    if (response.status === 200) {
      console.log("Product updated successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Failed to update product:", error);
    throw error;
  }
};

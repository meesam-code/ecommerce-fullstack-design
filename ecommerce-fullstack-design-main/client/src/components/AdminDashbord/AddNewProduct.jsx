import React, { useState } from "react";
import axios from "axios";
import { addNewProduct, getProducts } from "../../Api/product.js";
import toast from "react-hot-toast";
import { UseContext } from "../../Context/EcommerceContext.jsx";

const AddNewProduct = () => {
  const { products, setProducts } = UseContext();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [orders, setOrders] = useState(0);
  const [shipping, setShipping] = useState("");
  const [inStock, setInStock] = useState(false);

  const handleImageChange = (e, index) => {
    const files = [...images];
    files[index] = e.target.files[0];
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((file) => {
      if (file) formData.append("images", file);
    });

    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryName", category);
    formData.append("price", Number(price));
    formData.append("oldPrice", Number(oldPrice));
    formData.append("rating", Number(rating));
    formData.append("orders", Number(orders));
    formData.append("shipping", shipping);
    formData.append("inStock", inStock);

    try {
      const { product } = await addNewProduct(formData);
      console.log("Success:", product);
      toast.success("Product added successfully");

      setProducts((prev) => [...prev, product]);
      toast("Products updated");

      // ✅ Clear the form only after success
      setCategory("");
      setImages([]);
      setTitle("");
      setDescription("");
      setPrice(0);
      setOldPrice(0);
      setRating(0);
      setInStock(false);
      setShipping("");
      setOrders(0);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="flex  flex-col justify-between items-center bg-[#f9fafb] ">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-4 space-y-5 max-w-xl w-full"
      >
        {/* Image Upload */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src={
                      images[index]
                        ? URL.createObjectURL(images[index])
                        : "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                    }
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          >
            <option value="">Select Category</option>
            {["Electronics", "Clothing", "Accessories"].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Prices, Rating, Orders */}
        <div className="flex items-center gap-5 flex-wrap">
          <InputBlock
            label="Product Price"
            value={price}
            onChange={setPrice}
            id="product-price"
          />
          <InputBlock
            label="Offer Price"
            value={oldPrice}
            onChange={setOldPrice}
            id="offer-price"
          />
          <InputBlock
            label="Rating"
            value={rating}
            onChange={setRating}
            id="rating"
            min="0"
            max="5"
            step="0.1"
          />
          <InputBlock
            label="Orders"
            value={orders}
            onChange={setOrders}
            id="orders"
          />
        </div>

        {/* Shipping */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="shipping">
            Shipping Info
          </label>
          <input
            id="shipping"
            type="text"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            placeholder="e.g. Free shipping"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          />
        </div>

        {/* In Stock */}
        <div className="flex items-center gap-3">
          <input
            id="inStock"
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="inStock" className="text-base font-medium">
            In Stock
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-[#0d6efd] cursor-pointer text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

// Small reusable input block
const InputBlock = ({ label, value, onChange, id, ...rest }) => (
  <div className="flex-1 flex flex-col gap-1 w-32">
    <label className="text-base font-medium" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="0"
      className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
      {...rest}
    />
  </div>
);

export default AddNewProduct;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../Api/product";
import { editProduct } from "../Api/product"; // make sure this is the correct import
import toast from "react-hot-toast";
import { UseContext } from "../Context/EcommerceContext";

const EditProductInfo = () => {
  const [product, setProduct] = useState(null);
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
  const { id } = useParams();
  const { setProducts } = UseContext();
  const navigate = useNavigate();

  const handleImageChange = (e, index) => {
    const files = [...images];
    files[index] = e.target.files[0];
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append only new images (File objects)
    images.forEach((file) => {
      if (file instanceof File) {
        formData.append("images", file);
      }
    });

    // Optionally send existing image URLs
    const existingImages = images.filter((img) => typeof img === "string");
    existingImages.forEach((url) => {
      formData.append("existingImages", url);
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
      const { data } = await editProduct(product._id, formData);

      toast.success("Product data updated successfully");
      setProducts((prev) =>
        prev.map((item) => (item._id === data._id ? data : item)),
      );
    } catch (error) {
      toast.error("Issue while editing product");
      console.log("Error", error);
    }

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
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProducts();
        const productData = data.find((item) => item._id === id);
        console.log(productData);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setDescription(product.description || "");
      setCategory(product.category?.name || "");
      setPrice(product.price || 0);
      setOldPrice(product.oldPrice || 0);
      setRating(product.rating || 0);
      setOrders(product.orders || 0);
      setShipping(product.shipping || "");
      setInStock(product.inStock || false);
      setImages(product.image || []);
    }
  }, [product, id]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="flex flex-col justify-between items-center  bg-gray-100 mt-2">
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
                      typeof images[index] === "string"
                        ? images[index]
                        : images[index]
                        ? URL.createObjectURL(images[index])
                        : "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                    }
                    alt="upload"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>

        {/* Title */}
        <InputField
          label="Product Name"
          value={title}
          onChange={setTitle}
          id="product-name"
        />

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-description"
            className="text-base font-medium"
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
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-base font-medium">
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
        <InputField
          label="Shipping Info"
          value={shipping}
          onChange={setShipping}
          id="shipping"
        />

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
          className="px-8 py-2.5 bg-[#0d6efd] text-white font-medium rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

// Reusable input block for numbers
const InputBlock = ({ label, value, onChange, id, ...rest }) => (
  <div className="flex-1 flex flex-col gap-1 w-32">
    <label htmlFor={id} className="text-base font-medium">
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

// Reusable input block for text
const InputField = ({ label, value, onChange, id }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-base font-medium">
      {label}
    </label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type here"
      className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
      required
    />
  </div>
);

export default EditProductInfo;

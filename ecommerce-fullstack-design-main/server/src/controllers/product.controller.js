// controllers/product.controller.js
import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import fs from "fs";
import AppError from "../utils/AppError.js";

export const createProduct = async (req, res) => {
  try {
    const urls = [];
    for (const file of req.files) {
      const result = await uploadToCloudinary(file.path);
      urls.push(result.url);
      fs.unlink(file.path, () => {});
    }

    const {
      title,
      price,
      oldPrice,
      rating,
      orders,
      shipping,
      description,
      inStock,
      categoryName,
    } = req.body;

    if (!title || !price || !description || !categoryName) {
      return res.status(400).json({ error: "Missing required product fields" });
    }

    const categoryDoc = await Category.findOneAndUpdate(
      { name: categoryName },
      { name: categoryName },
      { new: true, upsert: true },
    );

    const newProduct = await Product.create({
      title,
      price: Number(price),
      oldPrice: Number(oldPrice),
      rating: Number(rating),
      orders: Number(orders),
      shipping,
      description,
      inStock: inStock === "true",
      image: urls,
      category: categoryDoc._id,
    });

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: products });
  } catch (error) {
    next(new AppError("No products found", 400));
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }
    const product = await Product.findByIdAndDelete(id).populate("category");
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ data: product });
  } catch (error) {
    next(new AppError("Error deleting product", 500));
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      price,
      oldPrice,
      rating,
      orders,
      shipping,
      description,
      inStock,
      categoryName,
    } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const urls = [];
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map(async (file) => {
        const result = await uploadToCloudinary(file.path);
        fs.unlink(file.path, () => {});
        return result.url;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      urls.push(...uploadedUrls);
    }

    const categoryDoc = await Category.findOneAndUpdate(
      { name: categoryName },
      { name: categoryName },
      { new: true, upsert: true },
    );

    product.title = title || product.title;
    product.price = price ? Number(price) : product.price;
    product.oldPrice = oldPrice ? Number(oldPrice) : product.oldPrice;
    product.rating = rating ? Number(rating) : product.rating;
    product.orders = orders ? Number(orders) : product.orders;
    product.shipping = shipping || product.shipping;
    product.description = description || product.description;
    product.inStock =
      typeof inStock === "string"
        ? inStock.toLowerCase() === "true"
        : product.inStock;
    product.image = urls.length > 0 ? urls : product.image;
    product.category = categoryDoc._id;

    await product.save();

    res
      .status(200)
      .json({ message: "Product updated successfully", data: product });
  } catch (error) {
    console.error("Error updating product:", error);
    next(new AppError("Internal server error", 500));
  }
};

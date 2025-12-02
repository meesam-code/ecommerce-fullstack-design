import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  oldPrice: Number,
  rating: Number,
  orders: Number,
  shipping: String,
  description: String,
  image: [String],
  inStock: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;

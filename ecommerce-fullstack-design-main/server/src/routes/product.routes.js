import { Router } from "express";
import upload from "../middleware/upload.js";
import adminMiddleware from "../middleware/adminMidleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
} from "../controllers/product.controller.js";
const router = Router();

router.post(
  "/product",
  authMiddleware,
  adminMiddleware, // Ensure only admin can add products
  upload.array("images", 5),
  createProduct,
);

router.get("/products", getProducts);
router.delete("/product/:id", authMiddleware, adminMiddleware, deleteProduct);

router.put(
  "/product/:id",
  authMiddleware,
  adminMiddleware, // Ensure only admin can update products
  upload.array("images", 5),
  updateProduct,
);

export default router;

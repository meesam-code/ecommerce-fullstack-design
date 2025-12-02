import { Router } from "express";

import asyncHandler from "../middleware/asyncHandler.js";
import {
  loginUser,
  registerUser,
  logout,
  isUser,
  adminWelcome,
} from "../controllers/user.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMidleware.js";
const router = Router();

router.post("/register", asyncHandler(registerUser));
router.post("/login", asyncHandler(loginUser));
router.post("/logout", logout);
router.get("/me", authMiddleware, isUser);
router.get("/admin/dashboard", authMiddleware, adminMiddleware, adminWelcome);

export default router;

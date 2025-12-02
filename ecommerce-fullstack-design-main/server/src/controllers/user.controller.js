import User from "../models/user.model.js";
import asyncHandler from "../middleware/asyncHandler.js";
import AppError from "../utils/AppError.js";

async function registerUser(req, res) {
  console.log(req.body);
  const { fullName, username, email, password, role } = req.body;
  if (!fullName || !username || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new AppError("Invalid email format", 400);
  }

  if (password.length < 6) {
    throw new AppError("Password must be at least 6 characters long", 400);
  }
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new AppError("Email or username already exists", 400);
  }

  const newUser = await User.create({
    fullName,
    username,
    email,
    password,
    role: role || "user", // Ensure role is included in the user creation
  });

  if (!newUser) {
    throw new AppError("User registration failed", 500);
  }

  res.status(201).json({
    status: "success",
    data: {
      username: newUser.username,
      email: newUser.email,
    },
  });
}

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  // Use comparePassword method from the schema
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  // Generate token
  const token = user.generateAuthToken();

  // Set cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });

  res.status(200).json({
    status: "success",
    message: "Login successful",
    user: {
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      role: user.role, // Include role in the response
    },
  });
});

const logout = asyncHandler(async (req, res) => {
  // Assuming you have a logout logic, like clearing session or token
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set to true in production
    sameSite: "Strict",
  });
  res.status(200).json({
    message: "User logged out successfully",
  });
});

const isUser = (req, res) => {
  res.status(200).json({
    message: "User authenticated successfully",
    user: req.user, // Assuming user info is attached to req by authMiddleware
  });
};

const adminWelcome = (req, res) => {
  res.status(200).json({
    message: "Welcome to the admin dashboard",
    user: req.user, // Assuming user info is attached to req by authMiddleware
  });
};

export { loginUser, registerUser, logout, isUser, adminWelcome };

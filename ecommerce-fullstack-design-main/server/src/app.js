import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", //Url of frontend
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// For product routes
app.use("/api", productRouter);

// For user routes
app.use("/api/user", userRouter);

// If no user call an invalid api this will handle
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found – Invalid API path",
  });
});

export default app;

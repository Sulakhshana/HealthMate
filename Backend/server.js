import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js"; 

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/appointments", appointmentRoute); 

// Start server
app.listen(PORT, () => {
  connectCloudinary();
  connectDB();
  console.log(`App is listening on port ${PORT}`);
});

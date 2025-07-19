import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db";
import routes from "./routes";


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db";
import routes from "./routes";
import transactionRoutes from "./routes/transactionRoutes";

// Importing models
import User from "./models/User";
import Category from "./models/Category";
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", routes);
app.use("/api/transactions", transactionRoutes);

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

// Creating User

//run();

async function run() {
  try {
    const user = await User.create({
      email: "hello@gmail.com",
      passwordHash: "hehehehe",
      name: "Saleh",
    });
    console.log("User Created");

    await Category.create({
      userId: user._id,
      name: "Transport",
      type: "expense",
    });
    console.log("Category attached");
  } catch (err) {
    console.log(err);
  }
}

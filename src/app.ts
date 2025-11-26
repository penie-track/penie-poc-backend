import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import transactionRoutes from "./routes/transactionRoutes";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//Connect to the DB
connectDB();

//routes
app.use("/api/transactions", transactionRoutes);

export default app;

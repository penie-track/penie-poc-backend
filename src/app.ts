import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import transactionRoutes from "./routes/transactionRoutes";
import cors from "cors";
import {
  requestLogger,
  errorHandler,
  unKnownEndPoint,
} from "./utils/middleware";
dotenv.config();

const app = express();
// Middlewares
app.use(express.json());
app.use(requestLogger);

app.use(cors());

//Connect to the DB
connectDB();

//routes
app.use("/api/transactions", transactionRoutes);
app.use(errorHandler);
app.use(unKnownEndPoint);

export default app;

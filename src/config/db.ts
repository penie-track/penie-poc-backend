import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../utils/logger";

dotenv.config();

export const connectDB = async () => {
  try {
    logger.info("Connecting to MongoDB...", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

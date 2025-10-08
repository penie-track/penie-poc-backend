import express from "express";
import {
  addTransaction,
  getAllTransactions,
} from "../controllers/transactionController";

const router = express.Router();

router.post("/", addTransaction);
router.get("/", getAllTransactions);

export default router;

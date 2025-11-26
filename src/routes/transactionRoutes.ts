import express from "express";
import {
  createTransactionController,
  deleteTransactionController,
  getTransactionController,
  getTransactionsController,
  updateTransactionController,
} from "../controllers/transactionController";

const router = express.Router();

router.post("/", createTransactionController);
router.get("/", getTransactionsController);
router.get("/:id", getTransactionController);
router.patch("/:id", updateTransactionController);
router.delete("/:id", deleteTransactionController);

export default router;

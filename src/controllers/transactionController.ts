import { Request, Response } from "express";
import Transaction from "../models/Transaction";
import { checkMissingFields } from "../utils/checkMissingFields";
import {
  CreateTransactionRequest,
  DeleteTransactionRequest,
  UpdateTransactionRequest,
} from "../apiDefination";

// Create Transaction
export const createTransaction = async (
  req: Request<{}, {}, CreateTransactionRequest["body"]>,
  res: Response
) => {
  // Check missing fields
  const missing = checkMissingFields(["type", "category", "amount"], req.body);
  if (missing.length > 0) {
    return res
      .status(400)
      .json({ message: `Missing required fields: ${missing.join(", ")}` });
  }
  try {
    const newTransaction = new Transaction(req.body);
    const saved = await newTransaction.save();
    res.status(201).json({ message: "New Transaction added" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating a transaction", error: err });
  }
};

// Get all transaction

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: err });
  }
};

// Update transaction by id

export const updateTransaction = async (
  req: Request<
    UpdateTransactionRequest["params"],
    {},
    UpdateTransactionRequest["body"]
  >,
  res: Response
) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error Updating transaction", error: err });
  }
};

// Delete Transaction
export const deleteTransaction = async (
  req: Request<DeleteTransactionRequest["params"]>,
  res: Response
) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "error deleting transaction", error: err });
  }
};

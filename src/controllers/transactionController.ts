import { Request, Response } from "express";
import { TransactionModel } from "../models/Transaction";

export const addTransaction = async (req: Request, res: Response) => {
  try {
    const { type, category, amount, description, date } = req.body;

    if (!type || !category || !amount || !description || !date) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newTransaction = await TransactionModel.create({
      type,
      category,
      amount,
      description,
      date,
    });

    return res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add transaction" });
  }
};

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    // You can also populate user/category details here if needed
    const transactions = await TransactionModel.find();

    res.status(200).json({
      count: transactions.length,
      data: transactions,
    });
  } catch (error: any) {
    console.error("Error fetching transactions:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

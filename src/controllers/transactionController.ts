import { TransactionDTO } from "../apiDefination";
import {
  createTransaction,
  deleteTransaction,
  getTransactionById,
  getTransactions,
  updateTransaction,
} from "../services/transaction";
import { NextFunction, Request, Response } from "express";

export const createTransactionController = async (
  req: Request<{}, {}, TransactionDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const transaction = await createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error: any) {
    next(error);
  }
};

export const getTransactionsController = async (
  req: Request,
  res: Response
) => {
  try {
    const transactions = await getTransactions();
    res.json(transactions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transaction = await getTransactionById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    } else {
      res.json(transaction);
    }
  } catch (error: any) {
    next(error);
  }
};

export const updateTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const updatedTransaction = await updateTransaction(req.params.id, req.body);

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // Just use _id, no need for toObject or getters
    res.json(updatedTransaction);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    await deleteTransaction(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

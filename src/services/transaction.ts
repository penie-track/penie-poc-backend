import { TransactionDTO } from "../apiDefination";
import { ITransaction, TransactionModel } from "../models/Transaction";

export const createTransaction = async (payload: TransactionDTO) => {
  const transaction = new TransactionModel(payload);
  return await transaction.save();
};

export const getTransactions = async () => {
  return await TransactionModel.find();
};

export const getTransactionById = async (id: string) => {
  return await TransactionModel.findById(id);
};

export const updateTransaction = async (
  id: string,
  data: Partial<TransactionDTO>
) => {
  return await TransactionModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteTransaction = async (id: string) => {
  return await TransactionModel.findByIdAndDelete(id);
};

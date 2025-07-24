// Transaction Structure
export interface TransactionDTO {
  amount: number;
  type: "income" | "expense";
  note: string;
  date: Date;
  tags: string[];
  isRecurring: boolean;
}

// Create transaction
export interface CreateTransactionRequest {
  body: TransactionDTO;
}

// Get all transaction

export interface GetTransactionsRequest {}

// Update transaction

export interface UpdateTransactionRequest {
  params: { id: string };
  body: Partial<TransactionDTO>;
}

// Detele Transaction

export interface DeleteTransactionRequest {
  params: { id: string };
}

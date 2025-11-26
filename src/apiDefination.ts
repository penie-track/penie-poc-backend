// Transaction Structure
export interface TransactionDTO {
  amount: number;
  type: "income" | "expense";
  description: string;
  date: string;
}

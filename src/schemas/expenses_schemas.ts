// Bot Service create expense payload schema
export interface UploadExpensePayload {
  telegram_id: string;
  message: string;
}
// Bot Service create expense response schema
export interface UploadExpenseResponse {
  user_id: number;
  description: string;
  amount: number;
  category: string;
  added_at: Date;
}

// Bot Service get expenses payload schema
export interface GetExpensePayload {
  telegram_id: string;
}

// Expense schema
interface Expense {
  user_id: number;
  description: string;
  amount: string;
  category: string;
  added_at: string;
  id: number;
}

// Bot Service get expenses response schema
export interface GetExpensesResponse {
  expenses: Expense[];
}

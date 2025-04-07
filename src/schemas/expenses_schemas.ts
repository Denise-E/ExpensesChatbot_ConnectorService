export interface UploadExpensePayload {
  telegram_id: string;
  message: string;
}

export interface UploadExpenseResponse {
    user_id: number;
    description: string;
    amount: number;
    category: string;
    added_at: Date;
  }

export interface GetExpensePayload {
    telegram_id: string;
  }

interface Expense {
    user_id: number;
    description: string;
    amount: string; 
    category: string;
    added_at: string;
    id: number;
  }
  
export interface GetExpensesResponse {
    expenses: Expense[];
  }
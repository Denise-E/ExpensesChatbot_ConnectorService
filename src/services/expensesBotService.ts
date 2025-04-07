import axios from 'axios';
import { env } from '../config/env';

const BOT_SERVICE_URL = env.botServiceURL

interface UploadExpensePayload {
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

interface GetExpensePayload {
    telegram_id: string;
  }

  export interface Expense {
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

export const uploadExpense = async (payload: UploadExpensePayload): Promise<UploadExpenseResponse> => {
  try {
    const response = await axios.post(`${BOT_SERVICE_URL}/expenses/create`, payload);
    return response.data;
  } catch (error: any) {
    console.error('Unable to save the expense:', error.response?.data || error.message);
    console.log("ERROR RESPONSE:", error.response)
    throw error;
  }
};

export const getExpenses = async (payload: GetExpensePayload): Promise<GetExpensesResponse> => {
  try {
    const response = await axios.get(`${BOT_SERVICE_URL}/expenses/get/${payload.telegram_id}/all`);
    return response.data;
  } catch (error: any) {
    console.error('Unable to get expenses:', error.response?.data || error.message);
    console.log("ERROR RESPONSE:", error.response)
    throw error;
  }
};

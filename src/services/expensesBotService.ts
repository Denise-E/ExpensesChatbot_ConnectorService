import axios from 'axios';
import { env } from '../config/env';

const BOT_SERVICE_URL = env.botServiceURL

interface UploadExpensePayload {
  telegram_id: number;
  text: string;
}

export interface UploadExpenseResponse {
    user_id: number;
    description: string;
    amount: number;
    category: string;
    added_at: Date;
  }

export const uploadExpense = async (payload: UploadExpensePayload): Promise<UploadExpenseResponse> => {
  try {
    const response = await axios.post(`${BOT_SERVICE_URL}/create/expenses`, payload);
    return response.data;
  } catch (error: any) {
    console.error('Unable to save the expense:', error.response?.data || error.message);
    console.log("ERROR RESPONSE:", error.response)
    throw error;
  }
};

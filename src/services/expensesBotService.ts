import axios from 'axios';
import { env } from '../config/env';
import {UploadExpensePayload, UploadExpenseResponse, GetExpensePayload,GetExpensesResponse} from '../schemas/expenses_schemas'

const BOT_SERVICE_URL = env.botServiceURL


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

import { Context } from 'telegraf';
import { isTextMessage } from '../../utils/telegramHelpers';
import { uploadExpense } from '../../services/expensesBotService';


export const uploadExpenseHandler = async (ctx: Context) => {
  console.log("Uploading expense");

  if (!ctx.message || !isTextMessage(ctx.message)) {
    console.log("Invalid input")
    return ctx.reply("");
  }

  const telegram_id: string = String(ctx.from!.id);
  const message = ctx.message.text.replace(/^\/cargar\s*/, "");

  try {
    const response = await uploadExpense({ telegram_id, message});
    const category = response.category

    ctx.telegram.sendMessage(ctx.chat!.id, `${category} expense added ✅`);
  } catch (error: any) {
    const status =  error.response?.status;
    const message = error.response?.data?.msg || error.message;

    if (status === 400 && message.includes('User not found')) {
      console.log(`Unauthorize user: ${telegram_id}`);
      return; // Ignore unauthorize users
    }
    ctx.telegram.sendMessage(ctx.chat!.id, 'Sorry, we were not able to save you expense. Please, try again later.');
  }
};

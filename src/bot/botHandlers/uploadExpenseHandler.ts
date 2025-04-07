import { Context } from 'telegraf';
import { isTextMessage, getTelegramId } from '../../utils/telegramHelpers';
import { uploadExpense } from '../../services/expensesBotService';
import { handleBotError } from '../../utils/errorsHandler';

export const uploadExpenseHandler = async (ctx: Context) => {
  console.log("Uploading expense");

  if (!ctx.message || !isTextMessage(ctx.message)) {
    console.log("Invalid input");
    return ctx.reply("");
  }

  const telegram_id = getTelegramId(ctx);
  const message = ctx.message.text.replace(/^\/cargar\s*/, "");

  try {
    const response = await uploadExpense({ telegram_id, message });
    const category = response.category;
    ctx.telegram.sendMessage(ctx.chat!.id, `${category} expense added ✅`);
  } catch (error: any) {
    handleBotError(ctx, error, telegram_id);
  }
};

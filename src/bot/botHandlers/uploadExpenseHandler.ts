import { Context } from 'telegraf';
import { isTextMessage, getTelegramId } from '../../utils/telegramHelpers';
import { uploadExpense } from '../../services/expensesBotService';
import { BotServiceErrorHandler } from '../../utils/errorsHandler';

// Bot excecution when uploading a new expense
export const uploadExpenseHandler = async (ctx: Context) => {
  console.log("Uploading expense");

  // Validating input is not a empty string
  if (!ctx.message || !isTextMessage(ctx.message)) {
    console.log("Invalid input");
    return ctx.reply("");
  }

  const telegram_id = getTelegramId(ctx);
  // Removes the command from the message received
  const message = ctx.message.text.replace(/^\/upload\s*/, "");

  try {
    // Connects with Bot Service to valdiate and create the expense on the database
    const response = await uploadExpense({ telegram_id, message });
    const category = response.category;

    // Bot response if the expense is saved successfully
    ctx.telegram.sendMessage(ctx.chat!.id, `${category} expense added ✅`);
  } catch (error: any) {
    // Bot Service error handler
    BotServiceErrorHandler(ctx, error, telegram_id);
  }
};

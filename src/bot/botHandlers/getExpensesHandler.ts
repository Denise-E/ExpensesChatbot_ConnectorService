import { Context } from 'telegraf';
import { getExpenses } from '../../services/expensesBotService';
import { getTelegramId } from '../../utils/telegramHelpers';
import { BotServiceErrorHandler } from '../../utils/errorsHandler';
import { formatExpensesList } from '../../utils/formatters/expensesFormatters';
import logger from '../../utils/logger';

// Bot excecution when getting user expenses
export const getExpensesHandler = async (ctx: Context) => {
  logger.info("Getting user expenses");

  const telegram_id = getTelegramId(ctx);

  try {
    const response = await getExpenses({ telegram_id });
    const expenses = response.expenses;

    // If the user doesn't have any expese saved, it return the folowwing message
    if (!Array.isArray(expenses) || expenses.length === 0) {
      return ctx.telegram.sendMessage(ctx.chat!.id, "You don't have any recorded expenses yet.");
    }
    
    // If the user have saved expenses, they are going to be shown as a list
    const formattedExpenses = formatExpensesList(expenses);
    // Sends the user a message with a list of the expenses
    ctx.telegram.sendMessage(ctx.chat!.id, `Your expenses list:\n${formattedExpenses}`);
  } catch (error: any) {
    // Bot Service error handler
    BotServiceErrorHandler(ctx, error, telegram_id);
  }
};

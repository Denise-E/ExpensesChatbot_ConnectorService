import { Context } from 'telegraf';
import { getExpenses } from '../../services/expensesBotService';
import { getTelegramId } from '../../utils/telegramHelpers';
import { handleBotError } from '../../utils/errorsHandler';
import { formatExpensesList } from '../../utils/formatters/expensesFormatters';

export const getExpensesHandler = async (ctx: Context) => {
  console.log("Getting user expenses");
  const telegram_id = getTelegramId(ctx);

  try {
    const response = await getExpenses({ telegram_id });
    const expenses = response.expenses;

    if (!Array.isArray(expenses) || expenses.length === 0) {
      return ctx.telegram.sendMessage(ctx.chat!.id, "You don't have any recorded expenses yet.");
    }

    const formattedExpenses = formatExpensesList(expenses);
    ctx.telegram.sendMessage(ctx.chat!.id, `Your expenses list:\n${formattedExpenses}`);
  } catch (error: any) {
    handleBotError(ctx, error, telegram_id);
  }
};

import { Context } from 'telegraf';
import { getExpenses } from '../../services/expensesBotService';

export const getExpensesHandler = async (ctx: Context) => {
    console.log("Getting user expenses"); 
    const telegram_id: string = String(ctx.from!.id);

    try{
      const response = await getExpenses({ telegram_id});
      const expenses = response.expenses;

      if (Array.isArray(expenses) && expenses.length === 0) {
        ctx.telegram.sendMessage(ctx.chat!.id, "You don't have any recorded expenses yet.");
      } else {
        const formattedExpenses = expenses
        .map(
          (expense: any) => {
            const formattedDate: string = new Date(expense.added_at).toISOString().split('T')[0];
            return `${formattedDate} - ${expense.category} expense: ${expense.amount}  ${expense.description}`;
          }
        )
        .join('\n');

        ctx.telegram.sendMessage(
          ctx.chat!.id,
          `Your expenses list:\n${formattedExpenses}`
        );
      }
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
  
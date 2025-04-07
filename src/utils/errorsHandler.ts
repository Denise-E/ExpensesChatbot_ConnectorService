import { Context } from 'telegraf';

export const handleBotError = (ctx: Context, error: any, telegram_id: string) => {
  const status = error.response?.status;
  const message = error.response?.data?.msg || error.message;

  if (status === 400 && message.includes('User not found')) {
    console.log(`Unauthorize user: ${telegram_id}`);
    return; // Ignore unauthorize users
  }else{
    ctx.telegram.sendMessage(ctx.chat!.id, 'Sorry, we were not able to save you expense. Please, try again later.');
  }

};

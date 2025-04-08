import { Context } from 'telegraf';

export const BotServiceErrorHandler = (ctx: Context, error: any, telegram_id: string) => {
  // Gets the status and message of the response
  const status = error.response?.status;
  const message = error.response?.data?.msg || error.message;

  // If the user is not in the whitelist or the text is not an expense, the message should be ignore
  if (status === 400 && (message.includes('User not found') || message.includes('not an expense') )) {
    console.log("API Repsonse:", message, " - Telegram ID:", telegram_id)
    return; // Ignore unauthorize users and not expense related messages
  }else{
    // If other error is received, the following message will be send to the user
    ctx.telegram.sendMessage(ctx.chat!.id, 'Sorry, we were not able to excecute your petition. Please, try again later.');
  }
};

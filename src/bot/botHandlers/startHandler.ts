import { Context } from 'telegraf';

export const startHandler = (ctx: Context) => {
  console.log("Expenses bot started")
  console.log("Telegram user info:", ctx.from)

  ctx.telegram.sendMessage(
    ctx.chat!.id,
    'Hi! Welcome to the Expenses Bot.You can use any of the following commands:\n \n/upload - To upload a new expense \n/get - To see al your expenses \n/help - To see all the enable commands'
  );
};

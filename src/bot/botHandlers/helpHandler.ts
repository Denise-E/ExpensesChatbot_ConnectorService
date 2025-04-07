import { Context } from 'telegraf';

export const helpHandler = (ctx: Context) => {
  ctx.telegram.sendMessage(
    ctx.chat!.id,
    'You can use any of the following commands:\n \n/upload - To upload a new expense \n/get - To see al your expenses'
  );
};

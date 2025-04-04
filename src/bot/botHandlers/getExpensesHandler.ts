import { Context } from 'telegraf';

export const getExpensesHandler = (ctx: Context) => {
    console.log("Getting user expenses"); 

    // const telegram_id: number = ctx.from!.id;
    ctx.telegram.sendMessage(
      ctx.chat!.id,
      'Detalle de tus gastos: '
    );
  };
  
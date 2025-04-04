import { Context } from 'telegraf';

export const startHandler = (ctx: Context) => {
  console.log("Expenses bot started")
  
  ctx.telegram.sendMessage(
    ctx.chat!.id,
    '¡Hola! Bienvenido al bot de gastos. Usá /obtener para ver tus gastos, o /cargar para agregar uno nuevo.'
  );
};

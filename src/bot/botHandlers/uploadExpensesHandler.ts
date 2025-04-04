import { Context } from 'telegraf';
import { isTextMessage } from '../../utils/telegramHelpers';
// En el futuro podrías llamar a un service acá.

export const uploadExpenseHandler = (ctx: Context) => {
  console.log("Uploading expense");

  if (!ctx.message || !isTextMessage(ctx.message)) {
    return ctx.reply("Este comando solo acepta mensajes de texto.");
  }

  // const telegram_id: number = ctx.from!.id;
  const description = ctx.message.text.replace(/^\/cargar\s*/, "");
  ctx.telegram.sendMessage(ctx.chat!.id, `General expense added: ${description} ✅`);
};

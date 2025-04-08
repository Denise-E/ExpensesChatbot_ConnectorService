import { Context } from 'telegraf';
import { getTelegramId } from '../../utils/telegramHelpers';

// Bot excecution when getting user tekegram id
export const getIdHandler = async (ctx: Context) => {
  console.log("Getting user telegram_id");

  // Gets user telegram_id
  const telegram_id = getTelegramId(ctx);
  // Returns telegram_id in the response message
  ctx.telegram.sendMessage(ctx.chat!.id, `Your telegram ID: ${telegram_id}`);

};

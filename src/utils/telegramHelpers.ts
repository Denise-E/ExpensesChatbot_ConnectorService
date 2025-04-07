import { Message } from 'telegraf/types';
import { Context } from 'telegraf';


export function isTextMessage(msg: Message): msg is Message.TextMessage {
  return 'text' in msg;
}

export const getTelegramId = (ctx: Context): string => {
  return String(ctx.from!.id);
};

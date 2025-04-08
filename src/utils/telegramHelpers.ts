import { Message } from "telegraf/types";
import { Context } from "telegraf";

// Validates the msg is a text
export function isTextMessage(msg: Message): msg is Message.TextMessage {
  return "text" in msg;
}

// Gets telegram id from bot input
export const getTelegramId = (ctx: Context): string => {
  return String(ctx.from!.id);
};

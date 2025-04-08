import { Context } from 'telegraf';
import logger from '../../utils/logger';

// Bot response when starting a conversation
export const startHandler = (ctx: Context) => {
  logger.info("Expenses bot started")
  //logger.info("Telegram user info:", ctx.from)

  // Bot response message - gives information about the enable commands
  ctx.telegram.sendMessage(
    ctx.chat!.id,
    'Hi! Welcome to the Expenses Bot.You can use any of the following commands:\n \n/upload - To upload a new expense \n/get - To see al your expenses \n/help - To see all the enable commands'
  );
};

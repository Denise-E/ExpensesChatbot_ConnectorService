import { Context } from 'telegraf';
import logger from '../../utils/logger';

// Bot excecution when user asks for help
export const helpHandler = (ctx: Context) => {
  logger.info("Helper command")
  // The bot sends the user a message with all the enable commands
  ctx.telegram.sendMessage(
    ctx.chat!.id,
    'You can use any of the following commands:\n \n/upload - To upload a new expense \n/get - To see al your expenses'
  );
};

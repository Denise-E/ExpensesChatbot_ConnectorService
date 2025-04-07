  
import { Context, MiddlewareFn } from 'telegraf';
import { Message } from 'telegraf/types';

// Middleware for unrecognized input from Telegram Bot
export const unknownCommandHandler: MiddlewareFn<Context> = async (ctx) => {
    const messageText = (ctx.message as Message.TextMessage)?.text;

  // If the received text is a command but is not implemented 
  if (messageText && messageText.startsWith('/')) {
    await ctx.reply('Oops! That command does not exist. Try one of these instead: \n \n/upload - To upload a new expense \n/get - To see al your expenses \n/help - To see all the enable commands');
  }else{
    // If the received text is just a text, not a command (desn't starts with a slash)
    await ctx.reply('Please, enter one of the following commands: \n \n/upload - To upload a new expense \n/get - To see al your expenses \n/help - To see all the enable commands');
  }
};
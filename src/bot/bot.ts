import { Telegraf } from 'telegraf';
import { startHandler } from './botHandlers/startHandler';
import { uploadExpenseHandler } from './botHandlers/uploadExpenseHandler';
import { getExpensesHandler } from './botHandlers/getExpensesHandler';
import { env } from '../config/env';
import { helpHandler } from './botHandlers/helpHandler';
import { unknownCommandHandler } from './botHandlers/unknownCommandHandler';
import { getIdHandler } from './botHandlers/getIdHandler';
import { enableUserHandler } from './botHandlers/enableUserHandler';

// Gets bot token and validates it's value
const BOT_TOKEN: string = env.telegramBotToken || "";

if (!BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not defined in environment variables");
}

// Creates a Telegraf instance with the token 
export const bot = new Telegraf(BOT_TOKEN);

// Commands definitions - to indicate our bot how to react when receiving different messages (/command)
bot.command('start', startHandler);
bot.command('upload', uploadExpenseHandler);
bot.command('get', getExpensesHandler)
bot.command('help', helpHandler);
bot.command('id', getIdHandler); // For testing use
bot.command('whitelist', enableUserHandler); // For testing use


// It manage unknown commands and texts received from the Telegram bot
bot.use(unknownCommandHandler);

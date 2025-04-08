import dotenv from 'dotenv';
dotenv.config();

// Defines .env variables
export const env = {
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  botServiceURL: process.env.BOT_SERVICE_URL,
};

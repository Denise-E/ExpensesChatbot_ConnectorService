import dotenv from 'dotenv';
dotenv.config();

export const env = {
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN!,
  botServiceURL: process.env.BOT_SERVICE_URL!,
};

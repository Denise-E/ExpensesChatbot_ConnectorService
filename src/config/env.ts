import dotenv from "dotenv";
dotenv.config();

// .env variables
const environment = process.env.ENV || "LOCAL";

const telegramBotToken =
  environment === "PROD"
    ? process.env.PRD_TELEGRAM_BOT_TOKEN
    : process.env.LOCAL_TELEGRAM_BOT_TOKEN;

const botServiceURL =
  environment === "PROD"
    ? process.env.PRD_BOT_SERVICE_URL
    : process.env.LOCAL_BOT_SERVICE_URL;

export const env = {
  telegramBotToken,
  botServiceURL,
};

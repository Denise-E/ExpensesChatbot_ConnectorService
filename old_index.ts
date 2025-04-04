import express, { Request, Response } from 'express';
//import axios from 'axios';
import path from 'path';
import dotenv from 'dotenv';
import { Telegraf, Context } from 'telegraf';
import { Message } from 'telegraf/types';

dotenv.config();

const expressApp = express();
const port: number = Number(process.env.PORT) || 3000;

expressApp.use(express.static('static'));
expressApp.use(express.json());

const BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || "";

if (!BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not defined in environment variables");
}

const bot = new Telegraf(BOT_TOKEN);

expressApp.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Commands to indicate our bot how to react
bot.command('start', (ctx: Context) => { 
    console.log(ctx.from); 
    bot.telegram.sendMessage(ctx.chat!.id, '¡Hola! Bienvenido al bot de telegram para mantener el control de tus gastos. Si querés ver todos tus gastos manda /obtener. Si querés cargar un nuevo gasto envía /cargar seguido de una breve descripción y el monto gastado.');
}); 

bot.command('obtener', (ctx: Context) => {  // TODO: Connect to BotService
    console.log("Getting user expenses"); 
    // const telegram_id: number = ctx.from!.id;
    bot.telegram.sendMessage(ctx.chat!.id, 'Detalle de tus gastos: ');
}); 

bot.command('cargar', (ctx: Context) => {  // TODO: Connect to BotService
    console.log("Uploading expense"); 
    // const telegram_id: number = ctx.from!.id;

    // Verifies the message is a text and not a file or other type of data
    const textMessage = ctx.message as Message.TextMessage;
    // Removes '/cargar' from de string 
    const description: string = textMessage.text.replace(/^\/cargar\s*/, "");

    bot.telegram.sendMessage(ctx.chat!.id, `Gasto cargado: ${description} ✅`);
}); 

bot.launch();

expressApp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

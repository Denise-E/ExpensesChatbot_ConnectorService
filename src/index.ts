import express, { Request, Response } from 'express';
import path from 'path';
import { bot } from './bot/bot';


const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.static('static'));
app.use(express.json());


app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

bot.launch();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

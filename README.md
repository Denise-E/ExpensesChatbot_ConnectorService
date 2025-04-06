# ExpensesChatbot_ConnectorService
This service acts as the interface between the Telegram API and the Bot Service. It manages the reception of inbound messages from users, forwards these messages to the Bot Service for processing, and sends the appropriate responses back to the users via Telegram.

ExpensesChatbot_ConnectorService is responsible for receiving Telegram messages from users, forwarding them to the BotService API for processing, and then replying to the user with the processed response. It is implemented in Node.js using Telegraf and Express, and communicates with the Python-based BotService over HTTP.


## ⚙️ Technologies Used

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **TypeScript**: Superset of JavaScript adding static typing.
- **Telegraf**: Framework for building Telegram bots.
- **Express**: Minimal web framework for exposing routes.
- **Axios**: HTTP client for sending requests to the BotService.

## Running the Project

### Clone the repository

### Make sure to have NodeJS installed https://nodejs.org/es/download

### 💾 Install Dependencies

```bash
npm install
```

### .env Variables
Create a .env file in the root directory with the following content:

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
BOT_SERVICE_URL=bot_service_url 

### 🚀 Run the Project

#### Development mode

```bash
npm run dev
```

#### Production mode

```bash
npm run start
```

### 🤖 How It Works

Unlike traditional REST APIs, this service doesn't expose public endpoints. Instead, it passively listens to incoming messages sent to a Telegram bot.

To set up your bot:
1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Start a chat and use the `/newbot` command to create a new bot.
3. Follow the prompts to give your bot a name and username.
4. Once created, BotFather will provide you with a **bot token**.
5. Copy this token and paste it into your `.env` file under the `TELEGRAM_BOT_TOKEN` variable.

The ConnectorService uses the **Telegraf** framework to define how the bot should react to specific commands received from users. It currently supports the following commands:

- `/start`: Greets the user and confirms the bot is active.
- `/upload`: Allows users to submit a free-form message describing an expense. This message is sent to the BotService for analysis, classification, and storage.
- `/get`: Requests a list of all expenses recorded by the user.

These interactions allow users to manage their expenses directly from Telegram, with the ConnectorService acting as the bridge between Telegram and the core business logic implemented in the Python-based BotService.

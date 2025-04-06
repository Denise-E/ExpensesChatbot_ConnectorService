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

### 💾 Install Dependencies

```bash
npm install
```

### .env Variables
Create a .env file in the root directory with the following content:

TELEGRAM_BOT_TOKEN=your_telegram_bot_token
BOT_SERVICE_URL=bot_service_url 


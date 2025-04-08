import { Context } from 'telegraf';
import { getTelegramId } from '../../utils/telegramHelpers';
import { BotServiceErrorHandler } from '../../utils/errorsHandler';
import { createUser } from '../../services/expensesBotService';

// Bot excecution when adding a new user to the whitelis
export const enableUserHandler = async (ctx: Context) => {
  console.log("Adding user to whitelist");

  const telegram_id = getTelegramId(ctx);

  try {
    await createUser({ telegram_id });

    // Sends the user a message with a list of the expenses
    ctx.telegram.sendMessage(ctx.chat!.id, '¡You are now enable to save your expenses!');
  } catch (error: any) {
    // Bot Service error handler
    BotServiceErrorHandler(ctx, error, telegram_id);
  }
};

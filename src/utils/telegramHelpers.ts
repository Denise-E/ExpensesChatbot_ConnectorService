import { Message } from 'telegraf/types';

export function isTextMessage(msg: Message): msg is Message.TextMessage {
  return 'text' in msg;
}

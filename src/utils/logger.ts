import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // Included warn and error logs
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp, ...meta }) => {
      const metaString = Object.keys(meta).length ? JSON.stringify(meta) : '';
      return `[${timestamp}] ${level.toUpperCase()}: ${message} ${metaString}`;
    })
  ),
  transports: [
    new transports.Console(),
  ],
});

export default logger;

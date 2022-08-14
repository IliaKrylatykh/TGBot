const TelegamApi = require("node-telegram-bot-api");

const token = "5548001603:AAEJ_KDpijcDPUAcRnxlItmAcbiaMlToJww";

const bot = new TelegamApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "/start") {
    bot.sendMessage(chatId, `Добро пожаловать в телеграм бот, ${msg.from.first_name}`);
  }

  if (text === "/info") {
    bot.sendMessage(chatId, `info for ${msg.from.first_name} ${msg.from.last_name} ${msg.date}`);
  }

  bot.sendMessage(chatId, `Ты мне написал ${text}`);

  console.log(msg);
});

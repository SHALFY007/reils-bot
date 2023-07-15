import { Telegraf } from "telegraf";
import { TOKEN } from "./const.js";

const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Welcome'));
bot.command('info', (ctx) => ctx.reply("Информация"))

bot.launch();
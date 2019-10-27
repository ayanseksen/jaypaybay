const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '937827713:AAHewPehu_Nayj9ORu1NGBv2u3iUSNJzEcw'

const bot = new TelegramBot(TOKEN, {polling:true})

bot.on('message', msg.chat.id, 'Hello from JayPay, bot says; "Salem, ${msg.from.first_name}"')


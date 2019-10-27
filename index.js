const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '937827713:AAHewPehu_Nayj9ORu1NGBv2u3iUSNJzEcw'

const bot = new TelegramBot(TOKEN, {polling:true})


bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Sälem JayPaydan, bot says: "Sälem, ${msg.from.first_name}"`)
})


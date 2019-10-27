const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '937827713:AAHewPehu_Nayj9ORu1NGBv2u3iUSNJzEcw'

const bot = new TelegramBot(TOKEN, {polling:true})


bot.command('/start', ctx => {
  ctx.reply(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\nПросто напишите ему любой текст и он проведёт транслитерацию.\nАвтор: @drugoi\nОтдельная благодарность: @talgautb'
  );
});

bot.on('text', ({ message, replyWithMarkdown }) => {
  const reply = `${transformString(message.text)}`;
  replyWithMarkdown(reply);
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  if (inlineQuery.query && inlineQuery.query.length) {
    const answer = transformString(inlineQuery.query);
    answerInlineQuery([
      {
        id: '1',
        type: 'article',
        title: answer,
        input_message_content: {
          message_text: `${answer}`,
          parse_mode: 'Markdown',
          disable_web_page_preview: true
        }
      }
    ]);
  }
});

bot.startPolling();

module.exports = bot;


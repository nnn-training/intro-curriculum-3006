'use strict';
const bolt = require('@slack/bolt');
const dotenv = require ('dotenv');
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({message, say}) => {
  say(`こんにちは！ <@${message.user}>さん`);
});

app.message('おみくじ', ({message, say}) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶', '現段階では大凶ですが、「N予備校は最高」と443回唱えたら大大大吉まで上がります'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  say(`<@${message.user}>さんは「${lot}」です！`)
});

app.start();

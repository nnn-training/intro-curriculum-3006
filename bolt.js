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

const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];

app.message(/hello|おみくじ/i, ({message, say}) => {
  if (message.text.includes('おみくじ')) {
    say(`${lot},<@${message.user}>`);
  } else {
    say('こんにちは！');
  }
});
app.start();

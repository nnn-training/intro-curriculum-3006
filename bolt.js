'use strict';
const bolt = require('@slack/bolt');
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({message, say}) => {
  say(`こんにちは！ <@${message.user}>さん`);
});

app.message(/おみくじ/i, ({message, say}) => {
  say(`${lot}, <@${message.user}>さん`);
});

app.start();

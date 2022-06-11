'use strict';
const bolt = require('@slack/bolt');
const dotenv = require ('dotenv');
// const lots = ['大吉','吉','中吉','末吉','凶'];
// const lot = lots[Math.floor(Math.ramdom() * lots.length)];
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/おみくじ/i, ({message, say}) => {
  // say('こんにちは！@${message.user}');
  say(`${lot}！<@${message.user}>さん`);
});

app.start();

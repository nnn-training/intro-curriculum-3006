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
/**
 * 下記constのコードをここに
 * let lots = ['大吉', '吉', '中吉', '末吉', '凶'];
 * let lot = lots[Math.floor(Math.random() * lots.length)];
 * とすると「末吉」を連発する
 */

app.message(/おみくじ/i, ({message, say}) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  say(`<@${message.user}>さんの運勢は${lot}です。`);
});


app.start();

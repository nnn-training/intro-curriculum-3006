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

function randomLot(){
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const rand = Math.floor(Math.random() * lots.length);
  const lot = lots[rand];
  return lot
}
app.message(/hello/i, ({message, say}) => {
  say(`こんにちは！ <@${message.user}>さん`);
});
app.message('おみくじ', ({message, say}) => {
  say(`${randomLot()}, <@${message.user}>`);
});

app.start();

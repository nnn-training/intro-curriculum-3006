'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
let lot = lots[Math.floor(Math.random() * lots.length)];

app.message(/おみくじ/, ({message, say}) => {
  let lot = lots[Math.floor(Math.random() * lots.length)];
  say(`${lot}, <@${message.user}>`);
});

app.start();

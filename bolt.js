'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});''

const omikuji = ['大吉', '中吉', '吉', '末吉', '凶'];



app.message(/おみくじ/i, ({message, say}) => {
  const results = Math.floor(Math.random() * omikuji.length);
  say(`${omikuji[results]} <@${message.user}>`);
});

app.start();

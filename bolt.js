'use strict';
const bolt = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug',
});

message(/hello/i, async ({ message, say }) => {
  await say(`こんにちは！  <@${message.user}>さん！`);
});

message('おみくじ', async ({ message, say }) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];

  await say(`${lot}, <@${message.user}>`);
});

async function message(pattern, fn) {
  await app.message(pattern, fn);
}

app.start();

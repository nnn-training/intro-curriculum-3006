'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({ message, say }) => {
  say(`こんにちは！ <@${message.user}>さん`);
});

/**
 * おみくじの結果をランダムに返す関数
 * @returns {string} おみくじの結果
 */
function getFortune() {
  const lots = [
    '大吉',
    '吉',
    '中吉',
    '末吉',
    '凶'
  ];
  return /*lot =*/lots[Math.floor(Math.random() * lots.length)];
}

app.message(/おみくじ/, ({ message, say }) => {
  say(`${getFortune()}, <@${message.user}>`);
});

app.start();

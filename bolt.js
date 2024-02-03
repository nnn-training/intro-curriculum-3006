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

app.message(/hello/i, ({message, say}) => {
  const omikujiNumber = Math.floor(Math.random() * lots.length);
  if (0 <= omikujiNumber && omikujiNumber < 1) {
    say(`${lots[0]}, <@${message.user}>さん`);
  } else if (1 <= omikujiNumber && omikujiNumber < 2) {
    say(`${lots[1]}, <@${message.user}>さん`);
  } else if (2 <= omikujiNumber && omikujiNumber < 3) {
    say(`${lots[2]}, <@${message.user}>さん`);
  } else if (3 <= omikujiNumber && omikujiNumber < 4) {
    say(`${lots[3]}, <@${message.user}>さん`);
  } else if (4 <= omikujiNumber && omikujiNumber < 5) {
    say(`${lots[4]}, <@${message.user}>さん`);
  } else {
    say(`Error : ${omikujiNumber}でした`);
  }
});

app.start();

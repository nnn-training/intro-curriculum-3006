pwd
yo hubot-yarn
git status
bin/hubot
exit
yarn install
touch scripts/hello.js
code .
exit
yarn install
code .
exit
yarn onstall
yarn install
touch slack_study
touch hubot_study
exit
yarn install
env 'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });
  robot.hear(/おみくじ/i, msg => {
    const username = msg.message.user.name;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, ${username}`);
env HUBOT_SLACK_TOKEN=xoxb-2636186162032-2612546297186-iLoADjLsI7A9DLMsJN7kQCUZ bin/hubot --adapter slack
exit

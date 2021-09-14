'use strict';
module.exports = robot => {
  robot.hear(/good morning>/i, msg => {
    sendMes(msg, "good morning");
  });

  robot.hear(/hello>/i, msg => {
    sendMes(msg, "hello");
  });

  robot.hear(/おはようございます>/i, msg => {
    sendMes(msg, "おはようございます");
  });

  robot.hear(/こんにちは>/i, msg => {
    sendMes(msg, "こんにちは");
  });

  robot.hear(/こんばんは>/i, msg => {
    sendMes(msg, "こんばんは");
  });

  robot.hear(/おみくじ>/i, msg => {
    const lots = ['大吉', '中吉', '吉', '末吉', '凶',];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const user_id = msg.message.user.id;
    msg.send(`おみくじの結果は${lot}です, <@${user_id}>`);
  });
};

function sendMes(msg, mes){
  const user_id = msg.message.user.id;
  msg.send(`${mes}, <@${user_id}>`);
}
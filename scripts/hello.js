'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/omikuji2021/i, msg => {
    const user_id = msg.message.user.id;
    const result = omikuji();
    msg.send(`${result}, <@${user_id}>`);
  });
};


function omikuji() {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  let randomIndex = Math.floor(Math.random() * lots.length);
  let lot = lots[randomIndex];
  return lot;
}
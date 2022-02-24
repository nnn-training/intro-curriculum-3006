'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
};
 module.exports = robot => {
  robot.hear(/今日の運勢>/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];   
    msg.send(`あなたの今日の運勢は${lot}です`);
  });
};


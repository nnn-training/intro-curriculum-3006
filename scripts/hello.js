'use strict';
module.exports = robot => {
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const user_name = msg.message.user.name;
    const lots =['大吉', '中吉', '小吉', '吉', '凶', '大凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`@${user_name}さんのおみくじの結果は ${lot} でした。 <@${user_id}>`);    
  });
}
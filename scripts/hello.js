'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });

  // REVIEW: 仕様に記載の"大吉, あなたのユーザー名"表記はメンション許容か要確認。user.profile.display_nameが使えずメンションで代用
  robot.hear(/おみくじ/, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const user_id = msg.message.user.id;
    msg.send(`${lot}, <@${user_id}>`);
  });

};
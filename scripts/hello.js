'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`コンニチハ, <@${user_id}>`);
  });
  robot.hear(/おやつは？/, msg => {
    const username = msg.message.user.name;
    const lots = ['🍮Custard', '🥧Pie', '🍨 Ice Cream', '🍪Cookie', 
    '🍰Shortcake', '🍡三色だんご', '🧁Cupcake', '🧇Waffle','🥮月餅'];
    const lot = lots[Math.floor(Math.random()*lots.length)];
    msg.send(`きょうのおやつは、${lot}です！ (o^−^o) , ${username}`);
  });
};

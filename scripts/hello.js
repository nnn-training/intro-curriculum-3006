'use strict';
module.exports = robot => {
  robot.hear(/おみくじしたい！/i, msg => {
    const lots = ['おめでとう！大吉', '吉', '中吉', '末吉', '残念！凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const username = msg.message.user.name;
    msg.send(`いいよ！ジャジャーン！${username}さんは、${lot}です！`);
  });

  // こわい言い方
  robot.hear(/おみくじやらさせてくれよな！ちなみに凶やったらしばくぞ/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const username = msg.message.user.name;
    msg.send(`へへぇ${username}さんは、${lot}ですぅぅ`);
  });

  robot.hear(/おいなんで凶なんや？どうゆうこと？あ？/i, msg => {
    const username = msg.message.user.name;
    msg.send(`へへぇすみません${username}さんは、大吉ですぅぅ`);
  });
};

'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });
  robot.hear(/おみくじ/i, msg => {
    const username = msg.message.user.name;
    const lots = ['大吉です。やったー！', '吉です。いいね。', '中吉です。可もなく不可もなく', '末吉です。末吉って何？', '凶。きょうはもう寝よう。'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${username}さんの今日の運勢は${lot}, `);
  });
};
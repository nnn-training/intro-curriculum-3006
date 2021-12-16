'use strict';
module.exports = robot => {
  robot.hear(/へろー/i, msg => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });

  robot.hear(/おみくじ/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const username = msg.message.user.name;
    msg.send(`おめーの運勢は ${lot} だよ ${username} さんよ。`);
  });

  robot.hear(/なん[じ?]|いまなん[じ？]|今何[時？]|何[時？]/i, msg => {
    const time1 = new Date();
    const time2 = time1.getHours() + "時" +
                  time1.getMinutes() + "分"
    msg.send(time2);
  });
};

'use strict';
robot.hear(/おみくじ/i, msg => {
  const username = msg.message.user.name;
  const lots = ["大吉", "中吉", "吉", "小吉", "末吉", "凶"];
  const index = lots[Math.floor(Math.random() * lots.length)];
  msg.send(`<@${username}>さんの今日の運勢は、 ${index} です。`);
});
'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_name = msg.message.user.name;
    const lots = ['虎丸', '王牙', 'おきつなみ', 'フラカン', 'グーグーベア', '常闇',];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`Hello, <@${user_name}>. Today lucky hammer is ${lot}.`);
  });
};

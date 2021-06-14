'use strict';
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
module.exports = robot => {
	robot.hear(/hello>/i, msg => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	  });
	robot.hear('おみくじ', msg => {
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const userName = msg.message.user.name;
		msg.send(`${lot}, ${userName}`);
	});
};

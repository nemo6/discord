const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js"); // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on( "message", function (message){

	if (message.content === "!ping"){

		message.channel.send("pong")
	}

})

bot.login(token)

console.log("done!")

// le "hello world" des bots discord.

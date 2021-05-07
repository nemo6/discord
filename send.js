const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js") // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on("ready", () => {

	let content = `Hello there! | ${date.format(new Date())}
https://www.youtube.com/watch?v=${msg}`

	bot.channels.get("526702417253892106").send(content)
	
	bot.destroy()

})

bot.login(token)

console.log("done!")

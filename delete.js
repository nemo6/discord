const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js"); // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on("ready", function() {

	bot.channels.get("526702417253892106").fetchMessages( { limit: 100 } )
	.then( messages => {

		messages.map( msg => {

			console.log(msg.content)

		  	msg.delete({ timeout: 500 })

		})

	} )
	.catch(console.error)
})

bot.login(token)

console.log("done!")

// supprime 100 messages dans le channel ayant pour id "526702417253892106" avec une lantence de 500 ms.

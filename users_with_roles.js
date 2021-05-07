  
const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js"); // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on('ready', function() {

	role = {}

	function id(x){

		return x.map( i => role[i] )

	}
	
	bot.guilds.get('ID_DISCORD_SERVER').roles.map( x => role[x.id] = x.name  )
	
	bot.guilds.get('ID_DISCORD_SERVER').members.map( x => console.log( x.user.username, id(x._roles) ) )

})

bot.login(token)

console.log("done!")

const Discord = require("C:/Users/USERNAME/AppData/Roaming/npm/node_modules/discord.js"); // discord.js@11.6.4
const bot     = new Discord.Client();
const token   = process.env.TOKEN;

bot.on("ready", () => {

  console.log("ready!")

  bot.channels.get("526702417253892106").fetchMessage("673809328540745729")
  .then(message =>  message.edit(`ce message a été édité`))
  .catch(console.error)

})

bot.login(token)

console.log("done!")

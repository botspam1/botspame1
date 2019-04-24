const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("570711305695002624")
setInterval(function() {
channel.send(`i love you all`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message){
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const contentBody = message.content.slice(prefix.length);
    const args = contentBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! The delay is ${timeTaken}ms`);
    }else if(command === "sum"){
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of numbers provided is ${sum}`);
    }
});

client.login(config.BOT_TOKEN);
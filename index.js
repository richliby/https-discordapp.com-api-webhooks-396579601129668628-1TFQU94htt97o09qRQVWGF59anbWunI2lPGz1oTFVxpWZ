var http = require('http');

var fs = require('fs');
 fs.readFile('node_modules.', function (req,res){

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='d/';

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/dverge');
    }


client.login ('ODMwNjAwMzEyNjk1NTU0MDc5.YHJC0g.dgFA9v-bpFv7SYeXgVr2wam-_Vk')
}

)
 }
 )

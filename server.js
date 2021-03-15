const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'a!p') {
    msg.reply('Pong!');
  }

   if (msg.content === 'a!av') {
    // Send the user's avatar URL
    msg.reply(msg.author.displayAvatarURL());
  }


  if (msg.content === 'a!slmt pagi') {
    msg.reply('iya, pagi! 🌫️');
  }
  if (msg.content === 'a!slmt siang') {
    msg.reply('iya, siang! ☀️');
  }

if (msg.content === 'a!slmt malam') {
    msg.reply('iya, Malam! 🌙');
  }
  
if (msg.content === 'a!help') {
    msg.channel.send(' ``a!slmt pagi`` |  ``a!slmt siang``  |  ``a!slmt malam`` |  ``a!p``   |  ``a!av`` ');
  }  
  
   const embed = new Discord.MessageEmbed()
   .setColor('#fdd900')
   .setTitle(' ``a!slmt pagi`` |  ``a!slmt siang``  |  ``a!slmt malam`` ')
   .setDescription('=== All commands from Dzikri ===')
   return msg.channel.send(embed);
});

client.login('ODE0MDAwMzQ2ODg4MjczOTMw.YDXe5g.6g_jPCQh--PGlAJPJQszd8mKrfw');
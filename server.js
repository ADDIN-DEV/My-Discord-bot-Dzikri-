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
  
    if (msg.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new messageembed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  }
});

client.login('ODE0MDAwMzQ2ODg4MjczOTMw.YDXe5g.6g_jPCQh--PGlAJPJQszd8mKrfw');
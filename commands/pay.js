const Discord = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
	name: "pay",
    permissions: [],
    cooldown: 12,
	description: "Pay someone!",

async execute(client, message, args, Discord, profileData) {
  const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Wrong usage!')
        .setDescription('Please use the command like this `+pay <user> <amount>`')
    const balanceerror = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Insufficient balance!')
        .setDescription('It looks like you do not have that much<a:EmeraldbotCurrency:838846098847039599> to pay!`')
    const negativeerror = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Cannot pay negative numbers or zero!')
        .setDescription('Please use a positive number to pay!') 

  const response = profileData.bars
  const user = message.mentions.members.first()

  const amount = args[1];

  const member = message.author;

  if (!user) {
      return message.channel.send(error)
  }
  if (!parseInt(args[1])) {
      return message.channel.send(error)
  }
  if (message.content.includes('-')) { 
      return message.channel.send(negativeerror)
  }
  if (response < amount) {
      return message.channel.send(balanceerror)
  }
  if(args[1] == 0) {
    return message.channel.send(negativeerror)
  }

  const payconfirm = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor("30d56b")
  .setTitle('Pay')
  .setDescription(`You paid **${amount}**<a:EmeraldbotCurrency:838846098847039599> to **${user}**!`) 
  .setTimestamp()
  
  message.channel.send(payconfirm)

  await profileModel.findOneAndUpdate(
    {
      userID: member.id,
    },
    {
      $inc: {
        bars: -amount,
      }
    },


  await profileModel.findOneAndUpdate(
    {
      userID: user.id,
    },
    {
      $inc: {
        bars: amount,
  }
}
)
  )}
}

const Discord = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
	name: "pay",
    permissions: [],
    cooldown: 3,
	description: "Pay someone!",

async execute(client, message, args, Discord, profileData) {
  const error = new Discord.MessageEmbed()
  .setColor("207144")
  .setTitle('It looks like there was an error! Please use the command like stated down below!')
  .setDescription('`(prefix)pay, user(with @, must have a profile), amount(must be more than 0, cannot be more than what you have)`') 

  const barserr = new Discord.MessageEmbed()
  .setColor("207144")
  .setTitle('It looks like you do not have anough bars to pay!')
  .setDescription('`(prefix)pay, user(with @, must have a profile), amount(must be more than 0, cannot be more than what you have)`') 

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
      return message.channel.send(error)
  }
  if (response < amount) {
      return message.channel.send(barserr)
  }

  const payconfirm = new Discord.MessageEmbed()
  .setColor("207144")
  .setTitle('Pay')
  .setDescription(`You have payed ${user.username} ${amount}<:HPbar:830500268089147424>!`) 
  
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

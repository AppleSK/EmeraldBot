const Discord = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
	name: "pay",
    permissions: [],
    cooldown: 3,
	description: "Pay someone!",

async execute(client, message, args, Discord, profileData) {
  const response = profileData.bars
  const user = message.mentions.members.first()

  const amount = args[1];

  const member = message.author;


  const embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<a:Cross:618736602901905418> Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  const embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> Specify an amount to pay`);
  
  if (!parseInt(args[1])) {
      return message.channel.send(embed2)
  }
  const embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }

  const embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You don't have that much money`);

  if (response < amount) {
      return message.channel.send(embed4)
  }

  const embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have payed ${user.username} ${amount} coins`);
  
  message.channel.send(embed5)

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

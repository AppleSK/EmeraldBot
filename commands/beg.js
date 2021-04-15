const profileModel = require("../models/profileSchema");
module.exports = {
name: "beg",
permissions: [],
cooldown: 15,
description: "Beg for emeralds",
  async execute(client, message, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          bars: randomNumber,
        },
      }
    );
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Beg')
    .setDescription(`You begged and received ${randomNumber} <:HPemerald:831588273796415489>`)
    return message.channel.send(error);
  },
};
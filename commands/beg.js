const profileModel = require("../models/profileSchema");
module.exports = {
name: "beg",
permissions: [],
cooldown: 15,
description: "beg for coins",
  async execute(client, message, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
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
    .setColor('#30FFA5')
    .setTitle('Beg')
    .setDescription(`You begged and received ${randomNumber} <:HPbar:830500268089147424>`)
    return message.channel.send(error);
  },
};
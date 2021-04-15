const profileModel = require("../models/profileSchema");
module.exports = {
name: "beg",
permissions: [],
cooldown: 15,
description: "Beg for emeralds",
  async execute(client, message, args, Discord, profileData) {
    const probability = Math.floor(Math.random() * 9)
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const boostedrandomNumber = Math.floor(Math.random() * 220) + 1;
    const beatupNumber = Math.floor(Math.random() * 10) + 1;
    if(probability == 1) {
      const nothingembed = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`Beg`')
    .setDescription(`You begged but nothing happened!`)
      return message.channel.send(nothingembed);
    } else if(probability == 2) {
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: boostedrandomNumber,
          },
        }
      );
        const boostedembed = new Discord.MessageEmbed() 
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('#30d56b')
      .setTitle('`Beg`')
      .setDescription(`You begged and a rich person gave you ${boostedrandomNumber} <:HPemerald:831588273796415489>`)
        return message.channel.send(boostedembed); 
    } else if(probability == 3) {
        await profileModel.findOneAndUpdate(
          {
            userID: message.author.id,
          },
          {
            $inc: {
              bars: -beatupNumber,
            },
          }
        );
          const beatupembed = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('#30d56b')
        .setTitle('`Beat up`')
        .setDescription(`You begged and got beated up! You lost ${beatupNumber} <:HPemerald:831588273796415489>`)
          return message.channel.send(beatupembed);  
    } else {
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
      .setTitle('`Beg`')
      .setDescription(`You begged and received ${randomNumber} <:HPemerald:831588273796415489>`)
      return message.channel.send(error)
    }
  } 
}
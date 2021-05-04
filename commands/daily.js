const profileModel = require("../models/profileSchema");
module.exports = {
  name: "daily",
  permissions: [],
  cooldown: 86400,
  description: "Get your daily emeralds!",
  async execute(client, message, args, Discord, profileData) {
    const target = [message.author.id]
    const randomNumber = Math.floor(Math.random() * 750) + 1;

      await profileModel.findOneAndUpdate(
        {
          userID: target,
        },
        {
          $inc: {
            bars: randomNumber,
          },
        }
      );

        const DAILYEMBED = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Daily')
        .setDescription(`You got **${randomNumber}**<a:EmeraldbotCurrency:838846098847039599> from your daily reward. Come back tommorow to claim it again.`)
        .setTimestamp()

        return message.channel.send(DAILYEMBED);
    }
  }
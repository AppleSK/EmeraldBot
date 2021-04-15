const profileModel = require("../models/profileSchema");
module.exports = {
  name: "hourly",
  permissions: [],
  cooldown: 3600,
  description: "Get your hourly emeralds!",
  async execute(client, message, args, Discord, profileData) {
    const target = [message.author.id]
    const randomNumber = Math.floor(Math.random() * 200) + 1;

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

      const HOUREMBED = new Discord.MessageEmbed() 
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('`Hourly`')
      .setDescription(`\n\`${randomNumber}\` <:HPemerald:831588273796415489> was your hourly reward. Come back in an hour to claim it again.`) 
      return message.channel.send(HOUREMBED);
    }
  }
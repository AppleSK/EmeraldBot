const profileModel = require("../models/profileSchema");
module.exports = {
  name: "daily",
  permissions: [],
  cooldown: 86400,
  description: "Get your daily bars!",
  async execute(client, message, args, Discord, profileData) {
    const target = [message.author.id]
    const randomNumber = Math.floor(Math.random() * 750) + 1;

    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('It looks like there was an error! Please use the command like stated down below!')
    .setDescription('`(prefix)daily`') 

    try {
      const targetData = await profileModel.findOne({ userID: target });
      if (!targetData) return message.channel.send(error);

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
        .setDescription(`Sucessfully redeemed your daily reward of ${randomNumber}<:HPemerald:831588273796415489>! Come back tommorow to claim it again.`) 
        return message.channel.send(DAILYEMBED);
    } catch (err) {
      console.log(err);
    }
  },
}; 
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "hourly",
  permissions: [],
  cooldown: 3600,
  description: "Get your hourly bars!",
  async execute(client, message, args, Discord, profileData) {
    const target = [message.author.id]
    const randomNumber = Math.floor(Math.random() * 200) + 1;

    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30FFA5')
    .setTitle('It looks like there was an error! Please use the command like stated down below!')
    .setDescription('`(prefix)hourly`') 

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

        const HOURLYEMBED = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30FFA5')
        .setTitle('Hourly')
        .setDescription(`Sucessfully redeemed your hourly reward of ${randomNumber}<:HPbar:830500268089147424>! Come back in a hour to claim it again.`) 
        return message.channel.send(HOURLYEMBED);
    } catch (err) {
      console.log(err);
    }
  },
}; 
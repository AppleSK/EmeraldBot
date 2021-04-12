const profileModel = require("../models/profileSchema");
module.exports = {
  name: "promocode",
  permissions: [],
  cooldown: 10,
  description: "Set bars FOR a member!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('Code')
        .setDescription('That code does not exist or has expired!')
    const argserror = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)promocode, code`')   

 if (!args[0]) return message.channel.send(argserror);
    const RELEASE2021amount = 500;

    const target = message.author;

    if (!message.content.includes('RELEASE2021')) return message.channel.send(error);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            bars: RELEASE2021amount,
          },
        }
      );
      const REDEEMED = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('Code')
        .setDescription(`Sucessfully redeemed promocode and earned 500<:HPbar:830500268089147424>!`) 

      return message.channel.send(REDEEMED);
    }
  }
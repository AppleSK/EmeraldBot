const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  permissions: [],
  cooldown: 10,
  description: "Deposit bars into your bank!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)deposit, amount(must be a whole number, cannot be more than what you have in your wallet)`')  
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(error);
    try {
      if (amount > profileData.bars) return message.channel.send(error);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: -amount,
            bank: amount,
          },
        }
      );
      const DEPOSITEMBED = new Discord.MessageEmbed() 
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Deposit')
      .setDescription(`You deposited ${amount}<:HPemerald:831588273796415489>into your bank!`)   

      return message.channel.send(DEPOSITEMBED);
    } catch (err) {
      console.log(err);
    }
  },
};
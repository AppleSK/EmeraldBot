const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  permissions: [],
  cooldown: 10,
  description: "Withdraw emeralds from your bank!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Wrong usage!`')
    .setDescription('Please use the command like this `+withdraw <amount>`')
const balanceerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Insufficient balance!`')
    .setDescription('It looks like you do not have that much <:HPemerald:831588273796415489> to withdraw!`')
const negativeerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Cannot withdraw negative numbers or zero!`')
    .setDescription('Please use a positive number to withdraw!') 
    const amount = args[0]
    if(!amount) return message.channel.send(error);
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(negativeerror);

    try {
      if (amount > profileData.bank) return message.channel.send(balanceerror);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: amount,
            bank: -amount,
          },
        }
      );
      const WITHDRAWEMBED = new Discord.MessageEmbed() 
      .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Withdraw`')
        .setDescription(`You withdrew \n\`${amount}\` <:HPemerald:831588273796415489> into your wallet!`)  

      return message.channel.send(WITHDRAWEMBED);
    } catch (err) {
      console.log(err);
    }
  },
};
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  permissions: [],
  cooldown: 10,
  description: "Withdraw bars from your bank!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)withdraw, amount(must be a whole number, cannot be more than what you have in your bank)`')  
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(error);

    try {
      if (amount > profileData.bank) return message.channel.send(error);

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
        .setColor('207144')
        .setTitle('Deposit')
        .setDescription(`You withdrew ${amount}<:HPbar:830500268089147424>into your wallet!`)  

      return message.channel.send(WITHDRAWEMBED);
    } catch (err) {
      console.log(err);
    }
  },
};
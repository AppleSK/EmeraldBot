const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  cooldown: 10,
  description: "Withdraw bars from your bank!",
  async execute(client, message, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number!");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that much<:HPbar:830500268089147424>to withdraw!`);

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

      return message.channel.send(`You withdrew ${amount}<:HPbar:830500268089147424>from your bank!`);
    } catch (err) {
      console.log(err);
    }
  },
};

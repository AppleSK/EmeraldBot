const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  permissions: [],
  cooldown: 10,
  description: "Deposit bars into your bank!",
  async execute(client, message, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number!");
    try {
      if (amount > profileData.bars) return message.channel.send(`You don't have that much<:HPbar:830500268089147424>to deposit!`);
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

      return message.channel.send(`You deposited ${amount}<:HPbar:830500268089147424>into your bank!`);
    } catch (err) {
      console.log(err);
    }
  },
};
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "give",
  permissions: ["ADMINISTRATOR"],
  description: "Gives bars to a member!",
  async execute(client, message, args, Discord, profileData) {
    if (!args.length) return message.channel.send("You need to mention a player to give them<:HPbar:830500268089147424>!");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist!");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Given amount must be a whole number!");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user does not exist in the database! Please tell them to create an account before giving them<:HPbar:830500268089147424>!`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            bars: amount,
          },
        }
      );

      return message.channel.send(`This player has been given ${amount}<:HPbar:830500268089147424>!`);
    } catch (err) {
      console.log(err);
    }
  },
};

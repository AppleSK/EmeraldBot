const profileModel = require("../models/profileSchema");
module.exports = {
  name: "set",
  permissions: ["ADMINISTRATOR"],
  cooldown: 10,
  description: "Set bars FOR a member!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)set, user(with @, must have a profile), amount(must be more than 0)`')  
    if (!args.length) return message.channel.send(error);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(error);
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(error);

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(error);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $set: {
            bars: amount,
          },
        }
      );
      const SETEM = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('Set')
        .setDescription(`Sucessfully set to ${amount}<:HPbar:830500268089147424>!`) 

      return message.channel.send(SETEM);
    } catch (err) {
      console.log(err);
    }
  },
}; 
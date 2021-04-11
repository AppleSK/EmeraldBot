const profileModel = require("../models/profileSchema");
module.exports = {
  name: "remove",
  permissions: ["ADMINISTRATOR"],
  cooldown: 10,
  description: "Removes bars from a member!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)remove, user(with @, must have a profile), amount(must be more than zero)`')  
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
          $inc: {
            bars: -amount,
          },
        }
      );
      const REMOVEEMBED = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('Remove')
        .setDescription(`Sucessfully removed ${amount}<:HPbar:830500268089147424>!`) 

      return message.channel.send(REMOVEEMBED);
    } catch (err) {
      console.log(err);
    }
  },
}; 
const profileModel = require("../models/profileSchema");
module.exports = {
  name: "set",
  permissions: ["ADMINISTRATOR"],
  cooldown: 10,
  description: "Set bars of a member!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)set, user(with @, must have a profile), amount`')  
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
      const GIVEEMBED = new Discord.MessageEmbed() 
        .setColor('207144')
        .setTitle('Give')
        .setDescription(`Sucessfully set ${amount}<:HPbar:830500268089147424>!`) 

      return message.channel.send(GIVEEMBED);
    } catch (err) {
      console.log(err);
    }
  },
}; 
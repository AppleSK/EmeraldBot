const profileModel = require("../models/profileSchema");
module.exports = {
  name: "add",
  permissions: ["ADMINISTRATOR"],
  cooldown: 10,
  description: "Adds emeralds to a member!",
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)add, user(with @, must have a profile), amount(must be more than 0)`')  
    if (!args.length) return message.channel.send(error);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(error);
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(error);
    if (message.content.includes('-')) return message.channel.send(error)

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(error);

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
      const ADDEM = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Add')
        .setDescription(`Sucessfully added ${amount}<:HPemerald:831588273796415489>!`) 

      return message.channel.send(ADDEM);
    } catch (err) {
      console.log(err);
    }
  },
}; 
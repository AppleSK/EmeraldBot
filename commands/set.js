const profileModel = require("../models/profileSchema");
module.exports = {
  name: "set",
  permissions: ["ADMINISTRATOR"],
  cooldown: 10,
  description: "Set emeralds for a user!",
  async execute(client, message, args, Discord, profileData) {
    const notapple = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Insufficient bot powers!`')
    .setDescription('Only the bot creator can use this command!')
  if(message.author.id === "555629040455909406"){
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Wrong usage!`')
    .setDescription('Please use the command like this `+set <user> <amount>`')
    const negativeerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Cannot set negative numbers or zero!`')
    .setDescription('Please use a positive number to set!')   
    if (!args.length) return message.channel.send(error);
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send(error);
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(negativeerror);

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
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Set')
        .setDescription(`Sucessfully set to \n\`${amount}\` <:HPemerald:831588273796415489>`)
        .setTimestamp()

      return message.channel.send(SETEM);
    } catch (err) {
      console.log(err);
    }
  } else{
    message.channel.send(notapple)
  }
}
}

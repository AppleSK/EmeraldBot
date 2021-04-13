const profileModel = require("../models/profileSchema");
module.exports = {
name: "gamble",
permissions: [],
cooldown: 30,
description: "Gamble for some coins! 50/50 chance",
  async execute(client, message, args, Discord, profileData) {
    const user = message.author;
    const reward = args[0]
    const bars = profileData.bars
    const losereward = reward * 2
    const winreward = reward * 2

    const result = [
        "WIN",
        "LOSE"
      ] 

    const awnser = result[Math.floor(Math.random() * result.length)];  

    const error = new Discord.MessageEmbed()
    .setColor('207144')
    .setTitle('It looks like there was an error! Please use the command like stated down below!')
    .setDescription('`(prefix)gamble, amount(must be more than zero, cannot be more than what you have)`') 

    const loseembed = new Discord.MessageEmbed()
    .setTitle("Gamble")
    .setDescription("You lost half of your gambled bars!")
    .setColor("207144")

    const winembed = new Discord.MessageEmbed()
    .setTitle("Gamble")
    .setDescription("You won and got double of your gambled bars!")
    .setColor("207144")

    if(reward % 1 != 0 || reward <= 0) return message.channel.send(error);
    if(reward > bars) return message.channel.send(error);

      if (awnser === "LOSE") {
        message.channel.send(loseembed);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: -losereward,
              },
            }
          );
      } else {
        message.channel.send(winembed);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: winreward,
              },
            }
          );
      }
    }
}
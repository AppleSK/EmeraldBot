const profileModel = require("../models/profileSchema");
module.exports = {
name: "gamble",
permissions: [],
cooldown: 10,
description: "Gamble for some coins! 50/50 chance",
  async execute(client, message, args, Discord, profileData) {
    const user = message.author;
    const money = args[0]
    const bars = profileData.bars
    const random = Math.floor(Math.random() * 37);

    const error = new Discord.MessageEmbed()
    .setColor('207144')
    .setTitle('It looks like there was an error! Please use the command like stated down below!')
    .setDescription('`(prefix)gamble, amount(must be more than zero, cannot be more than what you have)`') 

    if(money % 1 != 0 || money <= 0) return message.channel.send(error);
    if(money > bars) return message.channel.send(error);

    if (random == 0) { // Jackpot
      const jackpot = money * 4
      const jackpotembed = new Discord.MessageEmbed()
      .setColor('207144')
      .setTitle('Jackpot')
      .setDescription(`<:HPparty:831507050479484978> Congratulations! You won the <:HPparty:831507050479484978> **jackpot** <:HPparty:831507050479484978> and earned ${jackpot}<:HPbar:830500268089147424> <:HPparty:831507050479484978>`) 
        message.channel.send(jackpotembed);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: jackpot,
              }
            }
          
        )
    }
    else if (random == 5) { // win
     const reward = money * 2.50
     const rewardembed = new Discord.MessageEmbed()
     .setColor('207144')
     .setTitle('Reward')
     .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward,
              }
            }
          
        )
    }
    else if (random == 10) { // win
      const reward1 = money * 2.50
      const rewardembed1 = new Discord.MessageEmbed()
      .setColor('207144')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward1}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed1);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward1,
              }
            }
          
        )
    }
    else if (random == 15) { // Win
      const reward2 = money * 2.50
      const rewardembed2 = new Discord.MessageEmbed()
      .setColor('207144')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward2}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed2);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward2,
              }
            }
          
        )
    }
    else if (random == 20) { // win
      const reward3 = money * 2.50
      const rewardembed3 = new Discord.MessageEmbed()
      .setColor('207144')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward3}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed3);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward3,
              }
            }
          
        )
    }
    else if (random == 25) { // Win
      const reward4 = money * 2.50
      const rewardembed4 = new Discord.MessageEmbed()
      .setColor('207144')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward4}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed4);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward4,
              }
            }
          
        )
    }
    else if (random == 30) { // Win
       const reward5 = money * 2.50
       const rewardembed5 = new Discord.MessageEmbed()
       .setColor('207144')
       .setTitle('Reward')
       .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward5}<:HPbar:830500268089147424>`) 
        message.channel.send(rewardembed5);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: reward5,
              }
            }
          
        )
    }
    else { // Lost
        const loseembed = new Discord.MessageEmbed()
       .setColor('207144')
       .setTitle('Reward')
       .setDescription(`<:HPdown:830863717423644692> You sadly lost ${money}<:HPbar:830500268089147424>`) 
        message.channel.send(loseembed);
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: -money,
              }
            }
          )
        }
    }
}
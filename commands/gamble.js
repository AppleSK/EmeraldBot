const profileModel = require("../models/profileSchema");
module.exports = {
name: "gamble",
permissions: [],
cooldown: 1,
description: "Gamble for some coins! 50/50 chance",
  async execute(client, message, args, Discord, profileData) {
    const user = message.author;
    const money = args[0]
    const bars = profileData.bars
    const random = Math.floor(Math.random() * 37);

    const error = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('It looks like there was an error! Please use the command like stated down below!')
    .setDescription('`(prefix)gamble, amount(must be more than zero, cannot be more than what you have)`') 

    if(money % 1 != 0 || money <= 0) return message.channel.send(error);
    if(money > bars) return message.channel.send(error);

    if (random == 0) { // Jackpot
      const jackpot = money * 15
      const jackpotembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Jackpot')
      .setDescription(`<:HPparty:831507050479484978> Congratulations! You won the <:HPparty:831507050479484978> **jackpot** <:HPparty:831507050479484978> and earned ${jackpot}<:HPemerald:831588273796415489> <:HPparty:831507050479484978>`) 
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
     const reward = money * 5
     const rewardembed = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.avatarURL())
     .setColor('30d56b')
     .setTitle('Reward')
     .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward}<:HPemerald:831588273796415489>`) 
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
      const reward1 = money * 5
      const rewardembed1 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward1}<:HPemerald:831588273796415489>`) 
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
      const reward2 = money * 5
      const rewardembed2 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward2}<:HPemerald:831588273796415489>`) 
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
      const reward3 = money * 5
      const rewardembed3 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward3}<:HPemerald:831588273796415489>`) 
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
      const reward4 = money * 5
      const rewardembed4 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Reward')
      .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward4}<:HPemerald:831588273796415489>`) 
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
       const reward5 = money * 3
       const rewardembed5 = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL())
       .setColor('30d56b')
       .setTitle('Reward')
       .setDescription(`<:HPup:830863741176250438> Congratulations! You won and earned ${reward5}<:HPemerald:831588273796415489>`) 
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
    else if (random == 1) { // Bank error
      const reward6 = money * 3
      const rewardembed6 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Bank Error')
      .setDescription(`<:HPno:828619271335968798> Uh oh! There was a bank error and you lost ${reward6}<:HPemerald:831588273796415489>`) 
       message.channel.send(rewardembed6);
       await profileModel.findOneAndUpdate(
           {
             userID: user.id,
           },
           {
             $inc: {
               bars: -reward6,
             }
           }
         
       )
   }
    else { // Lost
        const loseembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
       .setColor('30d56b')
       .setTitle('Reward')
       .setDescription(`<:HPdown:830863717423644692> You sadly lost ${money}<:HPemerald:831588273796415489>`) 
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
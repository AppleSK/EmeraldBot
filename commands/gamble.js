const profileModel = require("../models/profileSchema");
module.exports = {
name: "gamble",
permissions: [],
cooldown: 10,
description: "Gamble for some emeralds! 50/50 chance",
  async execute(client, message, args, Discord, profileData) {
    const user = message.author;
    const money = args[0]
    const bars = profileData.bars
    const random = Math.floor(Math.random() * 37);

    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Wrong usage!`')
    .setDescription('Please use the command like this `+gamble <amount>`')
    const balanceerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Insufficient balance!`')
    .setDescription('It looks like you do not have that much <:HPemerald:831588273796415489> to gamble with!')
    const negativeerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Cannot gamble with negative numbers or zero!`')
    .setDescription('Please use a positive number to gamble with!')  

    if(!money) return message.channel.send(error);
    if(money == 0 || money < 0) return message.channel.send(negativeerror);
    if(money > bars) return message.channel.send(balanceerror);
    
    if (random == 0) { // Jackpot
      const jackpot = money * 15
      const jackpotembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Jackpot')
      .setDescription(`<:HPjackpot:833315238811271198> Congratulations! You won the \n\`jackpot\` and earned \n\`${jackpot}\` <:HPemerald:831588273796415489>`) 
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
     .setDescription(`<:HP5x:833315238760939520> Nice! You won a \n\`5x reward\` and earned \n\`${reward}\` <:HPemerald:831588273796415489>`) 
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
      .setDescription(`<:HP5x:833315238760939520> Nice! You won a \n\`5x reward\` and earned \n\`${reward1}\` <:HPemerald:831588273796415489>`)
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
      .setDescription(`<:HP5x:833315238760939520> Nice! You won a \n\`5x reward\` and earned \n\`${reward2}\` <:HPemerald:831588273796415489>`) 
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
      .setDescription(`<:HP5x:833315238760939520> Nice! You won a \n\`5x reward\` and earned \n\`${reward3}\` <:HPemerald:831588273796415489>`)
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
      .setDescription(`<:HP5x:833315238760939520> Nice! You won a \n\`5x reward\` and earned \n\`${reward4}\` <:HPemerald:831588273796415489>`) 
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
       .setDescription(`<:HP3x:833317273254887434> Cool! You won a \n\`3x reward\` and earned \n\`${reward5}\` <:HPemerald:831588273796415489>`)
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
      const reward6 = money * 4
      const rewardembed6 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('Robbed')
      .setDescription(`<:HPstole:833315238685311006> Someone took some of your emeralds and ran away! You lost \n\`${reward6}\` <:HPemerald:831588273796415489>`) 
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
       .setTitle('Lost')
       .setDescription(`<:HPlost:833315238275317811> You gambled and sadly lost \n\`${money}\` <:HPemerald:831588273796415489>`) 
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
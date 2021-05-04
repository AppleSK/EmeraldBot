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
    .setTitle('Wrong usage!')
    .setDescription('Please use the command like this `+gamble <amount>`')
    const balanceerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Insufficient balance!')
    .setDescription('It looks like you do not have that much<a:EmeraldbotCurrency:838846098847039599> to gamble with!')
    const negativeerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Cannot gamble with negative numbers or zero!')
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
      .setDescription(`Woah! You won the **jackpot** and earned **${jackpot}**<a:EmeraldbotCurrency:838846098847039599>`) 
      .setTimestamp()
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
     .setDescription(`Yay! You won a **5x reward** and earned **${reward}**<a:EmeraldbotCurrency:838846098847039599>`) 
     .setTimestamp()
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
      .setDescription(`Yay! You won a **5x reward** and earned **${reward1}**<a:EmeraldbotCurrency:838846098847039599>`)
      .setTimestamp()
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
      .setDescription(`Yay! You won a **5x reward** and earned **${reward2}**<a:EmeraldbotCurrency:838846098847039599>`) 
      .setTimestamp()
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
      .setDescription(`Yay! You won a **5x reward** and earned **${reward3}**<a:EmeraldbotCurrency:838846098847039599>`)
      .setTimestamp()
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
      .setDescription(`Yay! You won a **5x reward** and earned **${reward4}**<a:EmeraldbotCurrency:838846098847039599>`) 
      .setTimestamp()
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
       .setDescription(`Nice! You won a **3x reward** and earned **${reward5}**<a:EmeraldbotCurrency:838846098847039599>`)
       .setTimestamp()
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
      .setDescription(`Someone took **${reward6}**<a:EmeraldbotCurrency:838846098847039599> from you!`) 
      .setTimestamp()
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
       .setDescription(`You gambled and sadly lost **${money}**<a:EmeraldbotCurrency:838846098847039599>`) 
       .setTimestamp()
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
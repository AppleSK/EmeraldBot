const Discord = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
	name: "crime",
    permissions: [],
    cooldown: 50,
	description: "Commit a crime!",
    async execute(client, message, args, Discord, profileData) {
      const balerror = new Discord.MessageEmbed() 
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor('30d56b')
      .setTitle('`Insufficient balance!`')
      .setDescription('Please make sure you have at least `300` <:HPemerald:831588273796415489> to commit a crime!') 
    const bars = profileData.bars
    const user = message.author;
    if(bars < 300) return message.channel.send(balerror)
  
    const random = Math.floor(Math.random() * 701) + 1;
        

        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 

     const awnser = result[Math.floor(Math.random() * result.length)];
        
     if (awnser === "LOOSELOOSE") {

        const jailem = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle('Arrested')
      .setDescription('`You commited a crime and got arrested! You had to pay **300**<a:EmeraldbotCurrency:838846098847039599>`')
      .setColor("30d56b")
      .setTimestamp()
          
      message.channel.send(jailem);
         
      await profileModel.findOneAndUpdate(
        {
          userID: user.id,
        },
        {
          $inc: {
            bars: -300,
          },
        }
      );
         
        } else {

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`Crime`)
      .setDescription(`You commited a crime! You stole **${random}**<a:EmeraldbotCurrency:838846098847039599>`)
      .setColor("30d56b")
      .setTimestamp()

      await profileModel.findOneAndUpdate(
        {
          userID: user.id,
        },
        {
          $inc: {
            bars: random,
          },
        }
      );
      message.channel.send(embed)

      }
    } 
  }
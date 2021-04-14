const Discord = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
	name: "crime",
    permissions: [],
    cooldown: 50,
	description: "Commit a crime!",
    async execute(client, message, args, Discord, profileData) {
   
    const user = message.author;
  
    const random = Math.floor(Math.random() * 701) + 1;
    const randomlose = Math.floor(Math.random() * 800) + 1;
        

        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 

     const awnser = result[Math.floor(Math.random() * result.length)];
        
     if (awnser === "LOOSELOOSE") {

        const jailem = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("Crime")
      .setDescription(`You commited a crime and got arrested! You had to pay ${randomlose}<:HPemerald:831588273796415489>`)
      .setColor("30d56b")
          
      message.channel.send(jailem);
         
      await profileModel.findOneAndUpdate(
        {
          userID: user.id,
        },
        {
          $inc: {
            bars: -randomlose,
          },
        }
      );
         
        } else {

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle("Crime")
      .setDescription(`You commited a crime! You stole ${random}<:HPemerald:831588273796415489>!`)
      .setColor("30d56b")
      await profileModel.findOneAndUpdate(
        {
          userID: user.id,
        },
        {
          $inc: {
            bars: +random,
          },
        }
      );
      message.channel.send(embed)

      }
    } 
  }
const Discord = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
name: "work",
permissions: [],
cooldown: 110,
description: "Work to get some emeralds!",
async execute(client, message, args, Discord, profileData) {
    const user = message.author;

        const replies = ['programmer','builder','waiter','driver','chef','mechanic', 'gamer', 'YouTuber', 'teacher', 'artist', 'developer', 'doctor', 'nurse', 'dentist', 'scientist', 'pilot', 'engineer', 'lawyer', 'manager', 'architect', 'plumber', 'firefighter']

        const result = Math.floor((Math.random() * replies.length));
        const amount = Math.floor(Math.random() * 250) + 1;

        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setTitle('Work')
        .setDescription(`You worked as **${replies[result]}** and earned **${amount}**<a:EmeraldbotCurrency:838846098847039599> `)
        .setColor("30d56b")
        .setTimestamp()
        
        message.channel.send(embed1)
        
        await profileModel.findOneAndUpdate(
            {
              userID: user.id,
            },
            {
              $inc: {
                bars: amount,
              },
            }
        )},
    }

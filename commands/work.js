const Discord = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
name: "work",
permissions: [],
cooldown: 300,
description: "Work to get some bars!",
async execute(client, message, args, Discord, profileData) {

    const user = message.author;

        const replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic', 'Gamer']

        const result = Math.floor((Math.random() * replies.length));
        const amount = Math.floor(Math.random() * 250) + 1;


        const embed1 = new Discord.MessageEmbed()
        .setTitle("Work")
        .setDescription(`You worked as a ${replies[result]} and earned ${amount}<:HPbar:830500268089147424>`)
        .setColor("207144")
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

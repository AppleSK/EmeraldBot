const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    cooldown: 7,
    description: "This mutes a member!",
    execute(client, message, args, Discord) {
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Wrong usage!`')
        .setDescription('Please use the command like this `+mute <user> <time-optional/in ms>`') 
        const success = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Mute')
        .setDescription(`User got sucessfully muted!`)
        .setTimestamp()
        const norole = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Role error!`')
        .setDescription(`You do not have the \n\`Member / Muted\` role created!`)   
        const timedsuccess = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Mute')
        .setDescription(`User got sucessfully muted for \n\`${args[1]}ms\`!`)   
        .setTimestamp()
        const target = message.mentions.users.first();
        if (target) {
 
            const mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            const memberTarget = message.guild.members.cache.get(target.id);

            if(!mainRole) return message.channel.send(norole);
            if(!muteRole) return message.channel.send(norole);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(success);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(timedsuccess);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send(error);
            return
        }
}
    }
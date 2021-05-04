module.exports = {
    name: 'unmute',
    permissions: ["MUTE_MEMBERS"],
    cooldown: 7,
    description: "This unmutes a member!",
    execute(client, message, args, Discord){ 
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Wrong usage!')
        .setDescription('Please use the command like this `+unmute <user>`') 
        const success = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Unmute')
        .setDescription(`${target} got sucessfully unmuted!`) 
        .setTimestamp()
        const target = message.mentions.users.first();
        const norole = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Role error!')
        .setDescription(`You do not have the **Member/Muted** role created!`)   
        if(target){
            const mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            const memberTarget= message.guild.members.cache.get(target.id);

            if(!mainRole) return message.channel.send(norole);
            if(!muteRole) return message.channel.send(norole);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(success);
        } else{
            message.channel.send(error);
        }
    }
}
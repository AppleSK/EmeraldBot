module.exports = {
    name: 'icon',
    permissions: [],
    cooldown: 10,
    description: 'Return a useravatar picture!',
    //Use your own execute parameters
    execute(client, message, args, Discord) {
        const yourprf = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Icon')
        .setDescription(`This is your profile picture!`) 
        .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .setTimestamp()

        if(!args[0]) return message.channel.send(yourprf);

        const avatar_list = message.mentions.users.map(user => {
            const otherprf = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Icon')
        .setDescription(`This is ${user}'s profile picture!`) 
        .setImage(`${user.displayAvatarURL({ dynamic: true })}`)
        .setTimestamp()
            return (otherprf)
        })
        message.channel.send(avatar_list)
    }
}
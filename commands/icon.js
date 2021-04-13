module.exports = {
    name: 'icon',
    permissions: [],
    cooldown: 10,
    description: 'Return a useravatar picture!',
    //Use your own execute parameters
    execute(client, message, args, Discord) {
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30FFA5')
        .setTitle('It looks like there was an error! Please use the command like stated down below!')
        .setDescription('`(prefix)icon, user(with @, write anything for your icon)`') 
        if(!args[0]) return message.channel.send(error) 
        if (!message.mentions.users.size) {
            return message.channel.send(`**This is your profile picture!** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `** This is ${user.username}'s profile picture!** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
    }
}
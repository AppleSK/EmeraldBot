module.exports = {
    name: 'poll',
    permissions: [],
    cooldown: 20,
    description: 'Creates a poll!',
    execute(client, message, args, Discord){
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Wrong usage!`')
        .setDescription('Please use the command like this `+poll <content>`') 
        if(!args[0]) return message.channel.send(error);

        const messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('30d56b')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        message.channel.send(embed).then((msg) =>{
            msg.react('<:HPyes:832589870760460298>');
            msg.react('<:HPno:832589859411329085>');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}
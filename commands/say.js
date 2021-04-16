module.exports = {
    name: "say",
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 40,
    description: "says something",
    async execute(client, message, args, Discord){ 
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Wrong usage!`')
        .setDescription('Please use the command like this `+say <channel> <message>`')
        if (message.content.includes("@everyone") || (message.content.includes("@here")))  return // if the message content includes @everyone OR ( || means or in js) @here, stop running the code. 

        const textChannel = message.mentions.channels.first() // the first channel that you tag
        if(!args[0]) return message.channel.send(error); // args are words or numbers after the command. The first word is args[0], and then args[1], and so on and so on.
        if(!args[1]) return message.channel.send(error);
        if (!message.guild.channels.cache.has(textChannel.id)) return; // here we're checking if the textChannel id provided is in the server where the message is being sent.
        message.delete() // deleting the command message

            msg = args.slice(1).join(" "); // everything including and after args[1]
            textChannel.send(msg) // sending the message in the text channel provided

        }
    }
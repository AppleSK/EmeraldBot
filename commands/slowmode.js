module.exports = {
    name: 'slowmode',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 20,
    description: 'Sets slowmode for a channel!',
async execute(client, message, args, Discord){
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('`Wrong usage!`')
    .setDescription('Please use the command like this `+slowmode <time-in ms>`')
    if (!args[0]) return message.channel.send(error);
    if(isNaN(args[0])) return message.channel.send(error);
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(error)

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

    const SLOWMODEEMBED = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Slowmode')
    .setDescription(`Sucessfully set to \n\`${args[0]}ms\`!`) 

        channel.setRateLimitPerUser(args[0])
        message.channel.send(SLOWMODEEMBED)
        return;
    }
}
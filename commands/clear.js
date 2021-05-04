module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    cooldown: 10,
    description: "Clear messages!",
   async  execute(client, message, args, Discord) {
    const error = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Wrong usage!')
    .setDescription('Please use the command like this `+clear <amount>`') 
    const lowerror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Cannot clear less than 1 messages!')
    .setDescription('Please use a number higher than 0!') 
    const higherror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('30d56b')
    .setTitle('Cannot clear more than 100 messagess!')
    .setDescription('Please use a number lower than 100!') 
        if (!args[0]) return message.channel.send(error);
 
        if(isNaN(args[0])) return message.channel.send(error);
 
        if(args[0] > 100) return message.channel.send(higherror);
        
        if(args[0] < 1) return message.channel.send(lowerror);
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   
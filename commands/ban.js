module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    cooldown: 10,
    description: "This command bans a member!",
    execute(client, message, args, Discord) {
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Wrong usage!`')
        .setDescription('Please use the command like this `+ban <user>`') 
        const success = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Ban')
        .setDescription('User has been banned successfully!') 
        .setTimestamp()

     const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(success);
        }else{
            message.channel.send(error); return
        {
    }
   }
  }
 } 
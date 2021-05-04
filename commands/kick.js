module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    cooldown: 10,
    description: "This command kicks a member!",
    execute(client, message, args, Discord) { 
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Wrong usage!')
        .setDescription('Please use the command like this `+kick <user>`')  
        
     const member = message.mentions.users.first();
     const success = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Kick')
        .setDescription(`${member} has been kicked successfully!`) 
        .setTimestamp()
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(success);
        }else{
            message.channel.send(error);
            return
        {
    }
   }
 } 
}
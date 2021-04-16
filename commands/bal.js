module.exports = {
    name: "bal",
    permissions: [],
    cooldown: 10,
    description: "Check the user balance",
    execute (client, message, args, Discord, profileData){
const target = message.mentions.users.first();
const MENTIONERROR = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('`Wrong usage!`')
        .setDescription('This feature is not included yet! Please use the command like this `+bal`')
const BALANCEEMBED = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor("#30d56b'")
.setTitle('Balance')
.setDescription(`Wallet \n\`${profileData.bars}\`<:HPemerald:831588273796415489> 
Bank \n\`${profileData.bank}\`<:HPemerald:831588273796415489>`)
if(!target) {
message.channel.send(BALANCEEMBED)}
else message.channel.send(MENTIONERROR)
    },
};
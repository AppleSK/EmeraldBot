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
        .setTitle('Unknown feature!')
        .setDescription('This feature is not included yet! We are working on it.')
const BALANCEEMBED = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor("#30d56b'")
.setTitle('Balance')
.setDescription(`Wallet • **${profileData.bars}**<a:EmeraldbotCurrency:838846098847039599> 
Bank • **${profileData.bank}**<a:EmeraldbotCurrency:838846098847039599>`)
.setTimestamp()
if(!target) {
message.channel.send(BALANCEEMBED)}
else message.channel.send(MENTIONERROR)
    },
};
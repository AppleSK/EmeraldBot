module.exports = {
    name: "bal",
    permissions: [],
    cooldown: 10,
    description: "Check the user balance",
    execute (client, message, args, Discord, profileData){
        const BALANCEEMBED = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor("#30d56b'")
.setTitle('Balance')
.setDescription(`**Wallet:** ${profileData.bars}<:HPemerald:831588273796415489>
**Bank:** ${profileData.bank}<:HPemerald:831588273796415489>`)
        message.channel.send(BALANCEEMBED);
    },
};
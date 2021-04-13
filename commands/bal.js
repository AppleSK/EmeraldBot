module.exports = {
    name: "bal",
    permissions: [],
    cooldown: 10,
    description: "Check the user balance",
    execute (client, message, args, Discord, profileData){
        const BALANCEEMBED = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor("#30FFA5'")
.setTitle('Balance')
.setDescription(`**Wallet:** ${profileData.bars}<:HPbar:830500268089147424>
**Bank:** ${profileData.bank}<:HPbar:830500268089147424>`)
        message.channel.send(BALANCEEMBED);
    },
};
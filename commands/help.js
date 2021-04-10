module.exports = {
    name: 'help',
    permissions: [],
    cooldown: 0.1,
    description: "Embed for commands!",
    execute(client, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#207144')
        .setTitle('Help')
        .setDescription('Every command and what it does!')
        .addFields(
        {name: '+bal', value: 'Tells you how much you have in your wallet and how much you have in the bank!'},
        {name: '+beg', value: 'Beg for some bars and you will get a random amount!'},
        {name: '+withdraw', value: 'Withdraw bars from your bank!'},
        {name: '+deposit', value: 'Deposit bars into your bank!'},
        {name: '+give', value: 'A command only for admins, gives a member any amount of bars!'},
        )

        message.channel.send(helpEmbed);
        }
    }
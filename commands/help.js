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
        {name: 'bal', value: 'Tells you how much you have in your wallet and how much you have in the bank!'},
        {name: 'beg', value: 'Beg for some bars and you will get a random amount!'},
        {name: 'withdraw', value: 'Withdraw bars from your bank!'},
        {name: 'deposit', value: 'Deposit bars into your bank!'},
        {name: 'give', value: 'A command only for admins, gives a member any amount of bars!'},
        {name: 'remove', value: 'A command only for admins, removes any amount of bars from a member. (You can go into negative numbers!)'},
        {name: 'set', value: 'Set the amount of bars for any member!'},
        {name: 'search', value: 'Search a location for some bars!'},
        {name: 'icon', value: 'Get an icon of a member!'},
        {name: 'daily', value: 'Get bars everyday!'},
        {name: 'hourly', value: 'Get bars every hour!'},
        )

        message.channel.send(helpEmbed);
        }
    }
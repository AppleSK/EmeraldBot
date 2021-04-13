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
        {name: 'search', value: 'Search a location for some bars!'},
        {name: 'icon', value: 'Get an icon of a member!'},
        {name: 'daily', value: 'Get bars everyday!'},
        {name: 'hourly', value: 'Get bars every hour!'},
        {name: 'crime', value: 'Commit a crime and you will either lose or gain money.'},
        {name: 'gamble', value: 'Gamble with an amount of bars of your choice and you will get double or lose half of it!'},
        {name: 'work', value: 'Go to work and get some bars!'},
        {name: 'pay', value: 'Gift some bars to a member!'},
        )

        message.channel.send(helpEmbed);
        }
    }
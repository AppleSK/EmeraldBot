module.exports = {
    name: 'help',
    permissions: [],
    cooldown: 5,
    description: "Embed for commands!",
    execute(client, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('#30d56b')
        .setTitle('Help')
        .setDescription('Every command and what it does!')
        .addFields(
        {name: 'bal', value: 'Tells you how much you have in your wallet and how much you have in the bank!'},
        {name: 'beg', value: 'Beg for some emeralds and you will get a random amount!'},
        {name: 'withdraw', value: 'Withdraw emeralds from your bank!'},
        {name: 'deposit', value: 'Deposit emeralds into your bank!'},
        {name: 'search', value: 'Search a location for some emeralds!'},
        {name: 'icon', value: 'Get an icon of a member!'},
        {name: 'daily', value: 'Get emeralds everyday!'},
        {name: 'hourly', value: 'Get emeralds every hour!'},
        {name: 'crime', value: 'Commit a crime and you will either lose or gain emeralds.'},
        {name: 'gamble', value: 'Gamble with an amount of emeralds of your choice and you will get double or lose half of it!'},
        {name: 'work', value: 'Go to work and get some emeralds!'},
        {name: 'pay', value: 'Gift some emeralds to a member!'},
        {name: '8ball', value: 'Ask it a question for 10 emeralds!'},
        )

        message.channel.send(helpEmbed);
        }
    }